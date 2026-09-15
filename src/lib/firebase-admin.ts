import { initializeApp, getApps, cert, type App } from "firebase-admin/app";
import { getAuth as getAdminAuth } from "firebase-admin/auth";

// SDK serveur — vérifie les cookies de session. Nécessite un compte de
// service (clé privée), jamais exposée au navigateur (pas de préfixe
// NEXT_PUBLIC_).
export const firebaseAdminEnabled = Boolean(
  process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY
);

function getAdminApp(): App | null {
  if (!firebaseAdminEnabled) return null;
  if (getApps().length) return getApps()[0];
  return initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Les retours à la ligne de la clé privée sont échappés dans les
      // variables d'environnement — on les restaure ici.
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export const adminApp = getAdminApp();
export const adminAuth = adminApp ? getAdminAuth(adminApp) : null;
