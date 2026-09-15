import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";

const SESSION_COOKIE = "__session";
const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

// Appelé côté client juste après une connexion Firebase réussie : échange
// l'ID token contre un cookie de session httpOnly, vérifiable côté serveur
// (dans proxy.ts et les Server Components) sans exposer de secret au navigateur.
export async function POST(request: NextRequest) {
  if (!adminAuth) {
    return NextResponse.json(
      { error: "Firebase Admin non configuré" },
      { status: 503 }
    );
  }

  const { idToken } = await request.json();
  if (!idToken) {
    return NextResponse.json({ error: "idToken manquant" }, { status: 400 });
  }

  try {
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: FIVE_DAYS_MS,
    });
    const response = NextResponse.json({ ok: true });
    response.cookies.set(SESSION_COOKIE, sessionCookie, {
      maxAge: FIVE_DAYS_MS / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Jeton invalide" }, { status: 401 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
