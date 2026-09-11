# Nansah — règles projet

Plateforme commerciale de préparation au TCF Canada. Voir [README.md](README.md) pour le cadrage produit complet.

## Sécurité des secrets — non négociable

Ce projet manipule des secrets réels dès que les comptes seront connectés : `DATABASE_URL` (Neon), clés Clerk, puis Stripe, agrégateur mobile money, API IA de correction, Zoom, email transactionnel. Un secret exposé sur ce dépôt **public** est compromis définitivement, même après suppression du commit (l'historique Git reste récupérable).

Règles à appliquer sans exception, y compris par Claude :

1. **Aucun secret réel en dur dans le code, jamais.** Toujours `process.env.NOM_DE_LA_VARIABLE`. Les seules valeurs codées en dur acceptables sont des placeholders explicites (`"..."`, `"your-key-here"`).
2. **`.env.local` et `.env` ne sont jamais committés.** `.gitignore` couvre déjà `.env*` — ne jamais le modifier pour réintroduire un fichier `.env*`. Seul `.env.example` (placeholders uniquement) est versionné.
3. **Avant tout `git add`/commit touchant à la config, aux clients API ou aux fichiers d'env** : lancer le skill `/security-audit` (voir `.claude/skills/security-audit/`) ou au minimum relire `git diff --staged` à l'œil pour repérer une clé, un token, une chaîne de connexion.
4. **Préfixe `NEXT_PUBLIC_`** réservé aux valeurs qui peuvent légitimement être exposées côté navigateur (ex. `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`). Tout le reste (clé secrète, `DATABASE_URL`, clé API IA) reste côté serveur uniquement.
5. **Clés séparées dev/prod.** Ne jamais utiliser une clé de production en local. Les clés de prod vivent uniquement dans les variables d'environnement du hébergeur (Vercel), jamais dans un fichier du repo.
6. **Si un secret fuite malgré tout** (commit, capture d'écran, message partagé) : le considérer compromis immédiatement, le révoquer/régénérer chez le fournisseur, puis seulement nettoyer l'historique — dans cet ordre, pas l'inverse.
7. **Ne jamais coller de secret réel dans le chat, un fichier de mémoire, ou un artefact publié** — ces canaux ne sont pas conçus pour stocker des identifiants.

## Autres conventions du projet

- Palette et typographie verrouillées — voir README section 9. Ne pas rouvrir ces choix sans demande explicite.
- Nom du produit : **Nansah**.
- Les questions ouvertes de cadrage (README section 6) doivent être tranchées avant d'implémenter la fonctionnalité qu'elles concernent — ne pas construire par-dessus une question non résolue sans le signaler.
