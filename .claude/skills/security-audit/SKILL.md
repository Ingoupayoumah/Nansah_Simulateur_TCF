---
name: security-audit
description: Scan the Nansah repo for exposed secrets (API keys, tokens, connection strings) before a commit or push. Use before committing changes to env files, API clients, config, or CI — or whenever asked to check the project is safe to push.
---

# Audit de sécurité — Nansah

Ce projet est commercial et son dépôt GitHub est **public**. Un secret poussé une seule fois doit être considéré compromis pour toujours, même si le commit est ensuite supprimé. Ce skill fait une passe de vérification avant qu'un secret n'atteigne l'historique git.

## Procédure

1. **État git** — lancer `git status` et `git diff --staged` (et `git diff` si rien n'est encore staged) pour voir exactement ce qui va être committé.

2. **Recherche de motifs de secrets** dans les fichiers modifiés/stagés (jamais dans `node_modules`) :
   - Clés Stripe : `sk_live_`, `sk_test_`, `rk_live_`
   - Clés Clerk secrètes : `sk_` dans un contexte Clerk, ou toute variable `CLERK_SECRET_KEY` avec une vraie valeur
   - Chaînes de connexion Postgres/Neon avec identifiants en clair : `postgres(ql)?://[^:]+:[^@]+@`
   - Clés AWS : `AKIA[0-9A-Z]{16}`
   - Jetons génériques : `Bearer [A-Za-z0-9_\-\.]{20,}`, `api[_-]?key\s*[:=]\s*["'][^"']{16,}["']`
   - Blocs de clé privée : `-----BEGIN (RSA |EC )?PRIVATE KEY-----`
   - Toute valeur suspecte dans `.env.example` qui ne ressemble pas à un placeholder (`""`, `your-...`, `xxx`, une URL type `user:password@host`)

3. **Vérifier `.gitignore`** — confirmer que `.env*` y figure toujours et n'a pas été retiré ou surchargé par une règle `!`.

4. **Vérifier qu'aucun fichier `.env`/`.env.local` n'est suivi par git** :
   ```
   git ls-files | grep -E '^\.env($|\.[^.]*$)' 
   ```
   Un résultat non vide = problème immédiat.

5. **Vérifier l'historique** (si un doute existe sur un secret déjà committé par le passé) :
   ```
   git log --all --full-history -- .env .env.local .env.production
   ```

## Format du rapport

- Ne jamais recopier une valeur de secret trouvée en clair dans la réponse — la tronquer (`sk_live_abcd…` → premiers caractères seulement) pour ne pas la faire fuiter une deuxième fois dans la conversation.
- Lister chaque trouvaille comme `fichier:ligne — type de secret suspecté`.
- Conclure par un verdict clair : **OK pour commit/push** ou **BLOQUER — secret détecté**.

## Si un secret est trouvé déjà committé (et a fortiori déjà poussé sur GitHub)

Dans cet ordre, jamais l'inverse :
1. Prévenir immédiatement l'utilisateur — ne pas continuer la tâche en cours sans l'avoir signalé.
2. Recommander la **révocation/régénération immédiate** de la clé chez le fournisseur (Neon, Clerk, Stripe, etc.) — c'est la seule action qui neutralise réellement une fuite sur un dépôt public.
3. Ne jamais réécrire l'historique git (`filter-branch`, `git rebase`, force-push) sans une confirmation explicite de l'utilisateur — c'est une opération destructive qui peut casser le dépôt distant pour d'autres contributeurs.
