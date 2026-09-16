import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import { prisma } from "@/lib/prisma";

const SESSION_COOKIE = "__session";
const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

type SessionBody = {
  idToken?: string;
  nom?: string;
  ville?: string;
  telephone?: string;
};

// Appelé côté client juste après une connexion Firebase réussie : échange
// l'ID token contre un cookie de session httpOnly, vérifiable côté serveur
// (dans proxy.ts et les Server Components) sans exposer de secret au navigateur.
// Crée ou met à jour la ligne User correspondante dans Postgres au passage.
export async function POST(request: NextRequest) {
  if (!adminAuth) {
    return NextResponse.json(
      { error: "Firebase Admin non configuré" },
      { status: 503 }
    );
  }

  const { idToken, nom, ville, telephone } = (await request.json()) as SessionBody;
  if (!idToken) {
    return NextResponse.json({ error: "idToken manquant" }, { status: 400 });
  }

  let sessionCookie: string;
  let decoded: Awaited<ReturnType<typeof adminAuth.verifyIdToken>>;
  try {
    [sessionCookie, decoded] = await Promise.all([
      adminAuth.createSessionCookie(idToken, { expiresIn: FIVE_DAYS_MS }),
      adminAuth.verifyIdToken(idToken),
    ]);
  } catch {
    return NextResponse.json({ error: "Jeton invalide" }, { status: 401 });
  }

  // La synchronisation du profil vers Postgres ne doit jamais empêcher la
  // connexion — une base momentanément indisponible ne doit pas bloquer
  // l'utilisateur, le cookie de session est déjà valide à ce stade.
  if (decoded.email) {
    try {
      await prisma.user.upsert({
        where: { authProviderId: decoded.uid },
        update: {
          email: decoded.email,
          ...(nom ? { name: nom } : {}),
          ...(ville ? { city: ville } : {}),
          ...(telephone ? { phone: telephone } : {}),
        },
        create: {
          authProviderId: decoded.uid,
          email: decoded.email,
          name: nom ?? decoded.name ?? null,
          city: ville ?? null,
          phone: telephone ?? null,
        },
      });
    } catch (e) {
      // Ignoré volontairement — voir commentaire ci-dessus.
      console.error("[api/session] échec upsert User:", e);
    }
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, sessionCookie, {
    maxAge: FIVE_DAYS_MS / 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
