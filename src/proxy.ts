import { NextResponse } from "next/server";

// Le proxy tourne en runtime Edge, qui ne supporte pas firebase-admin (Node.js
// uniquement) — la vérification cryptographique du cookie de session se fait
// donc dans les Server Components / routes API, pas ici. Ce fichier reste un
// simple point d'entrée pour le jour où on ajoutera un contrôle d'accès léger
// (ex. rediriger vers /connexion si le cookie __session est absent).
export default function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
