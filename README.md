# Nansah — Dossier de cadrage

> Dossier de cadrage produit, rédigé avant le premier commit. Basé sur l'analyse du modèle de référence (formation-tcfcanada.com) et sur la compréhension du marché (immigration francophone vers le Canada via le TCF).

Version détaillée et interactive (cases à cocher, filtres par priorité) : https://claude.ai/code/artifact/d4c426ca-06ad-4883-a129-c18245451dfa

---

## Sommaire

- [0. Vision & modèle économique](#0-vision--modèle-économique)
- [1. Personas](#1-personas)
- [2. Liste de fonctionnalités](#2-liste-de-fonctionnalités)
- [3. Modèle de données](#3-modèle-de-données)
- [4. Architecture technique recommandée](#4-architecture-technique-recommandée)
- [5. Exigences non-fonctionnelles](#5-exigences-non-fonctionnelles)
- [6. Risques & questions ouvertes](#6-risques--questions-ouvertes)
- [7. Roadmap proposée](#7-roadmap-proposée)
- [8. Par où commencer](#8-par-où-commencer)
- [9. Système de design](#9-système-de-design)
- [10. Architecture d'information (routing)](#10-architecture-dinformation-routing)
- [11. Modèle de contenu — Sujet & Article](#11-modèle-de-contenu--sujet--article)
- [12. Fonctionnalité admin — gestion de contenu](#12-fonctionnalité-admin--gestion-de-contenu)
- [13. Stratégie de sourcing du contenu — à trancher](#13-stratégie-de-sourcing-du-contenu--à-trancher)

---

## 0. Vision & modèle économique

**Le problème réel.** Le TCF Canada (Test de Connaissance du Français) est une épreuve à quatre compétences (CO, CE, EO, EE) obligatoire pour l'immigration économique (Entrée express, PEQ, etc.). Le score se convertit en niveau NCLC, qui conditionne l'éligibilité. Les candidats ont besoin d'un entraînement en **conditions identiques** à l'examen officiel — pas de cours de français généraux — et de savoir précisément où ils se situent en NCLC avant de payer les frais d'examen réel.

**La proposition de valeur.**
- Simulateurs fidèles au timing et au barème officiels (39 questions, 699 pts, etc.)
- Sujets « d'actualité » renouvelés chaque mois — le contenu périme vite, la fraîcheur est un argument de vente explicite
- Correction outillée (IA pour l'écrit, examinateur humain pour l'oral) plutôt que de simples corrigés statiques
- Une figure de confiance identifiable (fondateur, examinateur nommé) plutôt qu'une marque anonyme

**Comment l'argent rentre.**
- Packs auto-formation à durée fixe (5 jours / 1 mois / 2 mois), non reconduits automatiquement
- Packs coaching en groupe, prix nettement supérieur, avec séances live
- Add-ons à l'unité : séance avec examinateur humain, recharge de crédits simulateur
- L'examen blanc complet + attestation est un inclus « premium » qui justifie le prix des packs, pas un produit vendu seul

**Ce qui différencie vraiment.**
- Le paiement mobile money par pays (CCP/Baridi Mob, Orange Money, Wave, MTN) — signal fort que la cible est majoritairement en Afrique francophone, où la carte bancaire internationale est un frein réel
- WhatsApp comme canal de support principal, avant l'email
- La rareté du service « examinateur humain » — c'est un goulot d'étranglement assumé, pas un bug

---

## 1. Personas

**Fatima — 29 ans, Alger.** Vise l'Entrée express, budget serré, pas de carte bancaire internationale. Paie en Baridi Mob/CCP, découvre l'offre via TikTok/Instagram, échange sur WhatsApp avant d'acheter. Achète le pack le moins cher d'abord, upgrade si le score progresse.

**Junior — 34 ans, déjà au Canada.** Sur permis temporaire, besoin d'une attestation NCLC rapide pour la résidence permanente. Paie par carte, moins sensible au prix. Va droit à l'examen blanc et au calculateur NCLC. Date d'examen officiel proche → forte pression temporelle.

**Aïcha — 24 ans, Douala.** Étudiante, vise le pack complet avec coaching live pour l'oral, sa faiblesse principale. Consomme du contenu gratuit (YouTube, blog) avant de payer. Sensible à la preuve sociale (taux de réussite, avis). Le prix des packs coaching (150–250 $) est un frein réel.

---

## 2. Liste de fonctionnalités

Légende : 🟢 MVP · 🟡 V2 · 🟣 V3

### A · Site public & marketing
- 🟢 Page d'accueil — hero, stories de nouveautés, 4 épreuves, avantages, fondateur, FAQ courte
- 🟢 Pages par épreuve (CE/CO/EE/EO) — structure pédagogique, format d'examen, tâches détaillées
- 🟢 Page tarification — comparatif des packs auto-formation vs coaching, add-ons à l'unité
- 🟢 Pages légales — confidentialité, CGU, cookies, politique de remboursement
- 🟢 Bandeau cookies — consentement granulaire (essentiels / analytics / marketing)
- 🟢 Contact & support — formulaire, boutons WhatsApp/email flottants
- 🟡 Calculateur NCLC gratuit — aimant à leads
- 🟡 Blog SEO — guides immigration / méthodologie TCF
- 🟡 SEO structuré — JSON-LD (Course, FAQPage, Organization), sitemap, canonical
- 🟡 Preuve sociale — témoignages, statistiques de réussite, avis vérifiés

### B · Authentification & compte
- 🟢 Inscription / connexion email + mot de passe
- 🟢 Mot de passe oublié
- 🟢 Mon compte — abonnement actif, échéance, historique de paiement
- 🟡 Connexion Google
- 🟡 Upgrade de forfait au prorata
- 🟡 Suppression de compte / export de données

### C · Contenu pédagogique (CE / CO / EE / EO)
- 🟢 Modules méthodologie (texte/vidéo par épreuve)
- 🟢 Séries QCM (CE/CO) — 3 gratuites, suite premium
- 🟢 Correction QCM automatique — score sur /699
- 🟢 Lecteur audio CO — accents variés, lecture unique
- 🟢 Banque de sujets d'actualité (EE/EO) — organisée par mois
- 🟢 Déblocage premium par série
- 🟢 Process de publication mensuelle du contenu

### D · Simulateurs & correction IA
- 🟢 Simulateur EE — éditeur chronométré, 3 tâches, 60 min
- 🟡 Correction IA du texte — grille TCF (tâche, lexique, grammaire, cohérence)
- 🟡 Simulateur EO — enregistrement micro/vidéo, 3 tâches, 12 min
- 🟡 Historique des soumissions
- 🟡 Recharge de crédits simulateur à l'unité
- 🟣 File de révision humaine des corrections IA à faible confiance

### E · Examen blanc complet
- 🟡 Parcours combiné CO+CE+EE en conditions réelles
- 🟡 Score global + niveaux NCLC par compétence
- 🟡 Attestation PDF téléchargeable
- 🟡 Accès illimité inclus dans tous les packs

### F · Examen oral avec examinateur humain
- 🟡 Profil examinateur (bio, habilitation)
- 🟣 Calendrier de réservation de créneau
- 🟣 Création automatique du lien visio (Zoom)
- 🟡 Paiement à l'unité
- 🟣 Rapport d'évaluation détaillé post-séance
- 🟣 Gestion multi-examinateurs

### G · Calculateur NCLC (outil gratuit)
- 🟡 Formulaire de saisie des 4 scores
- 🟡 Conversion instantanée en niveaux NCLC
- 🟡 Tableau d'équivalence officiel affiché

### H · Tableau de bord & progression
- 🟡 Suivi des scores par épreuve dans le temps
- 🟡 Historique complet des tentatives
- 🟣 Repérage automatique des points faibles

### I · Paiement & abonnements
- 🟢 Carte bancaire (Stripe)
- 🟢 Abonnement à durée fixe, non reconduit automatiquement
- 🟡 PayPal
- 🟡 Mobile money par pays (Algérie, Cameroun, Côte d'Ivoire…)
- 🟡 Codes promo
- 🟡 Génération de factures

### J · Back-office & admin
- 🟢 CMS interne pour publier les sujets mensuels sans déploiement
- 🟢 Gestion des utilisateurs et abonnements
- 🟡 Tableau de bord business (conversion, churn, CA)
- 🟣 Gestion des créneaux de l'examinateur
- 🟣 File de modération des corrections IA

### K · Communication
- 🟢 Bouton WhatsApp flottant
- 🟢 Emails transactionnels (achat, résultats, rappel d'expiration)
- 🟡 Notification nouveaux sujets du mois

---

## 3. Modèle de données

**Identité & abonnement**
- `User` — id, email, phone, country, locale, auth_provider_id, created_at
- `Subscription` — id, user_id, plan[bronze..platinium], starts_at, ends_at, status
- `Payment` — id, user_id, amount, currency, method[card/paypal/momo], provider_ref, status

**Contenu pédagogique**
- `Serie` — id, epreuve[CE/CO], number, question_count, access_level[free/premium]
- `Question` — id, serie_id, type, content, audio_url, choices[], correct, points
- `Sujet` — id, epreuve[EE/EO], tache_number, content, month, year, published_at

**Pratique & IA**
- `Attempt` — id, user_id, serie_id, started_at, finished_at, answers[], score, mode
- `WrittenSubmission` — id, user_id, sujet_id, text, submitted_at, ai_score, ai_feedback_json
- `OralSubmission` — id, user_id, sujet_id, media_url, submitted_at, score, feedback

**Examen blanc**
- `ExamAttempt` — id, user_id, co_score, ce_score, ee_score, nclc_levels_json
- `Attestation` — id, exam_attempt_id, pdf_url, issued_at

**Examinateur**
- `Examiner` — id, name, bio, photo_url, habilitation
- `Booking` — id, user_id, examiner_id, slot_at, status, zoom_link, payment_id

**Marketing**
- `BlogPost` — id, title, slug, content_mdx, cover_url, published_at, seo_json
- `Coupon` — id, code, discount_pct, valid_from, valid_to, max_uses, uses

---

## 4. Architecture technique recommandée

| Couche | Choix | Pourquoi |
|---|---|---|
| Présentation | Next.js (App Router) + TypeScript + Tailwind + shadcn/ui | RSC pour le contenu statique, client components pour les simulateurs interactifs |
| Application | Route Handlers / Server Actions Next.js | Suffisant en monolithe ; isoler la logique IA pour pouvoir l'extraire plus tard |
| Authentification | Clerk | MFA, sessions, webhooks d'abonnement sans réinventer la sécurité |
| Données | PostgreSQL (Neon, serverless) + Prisma | Branching de base utile pour tester des migrations de contenu sans risquer la prod |
| Média | Vercel Blob ou S3-compatible | Stockage des audios CO et enregistrements EO des candidats |
| Correction IA | API Claude, prompt structuré → sortie JSON | Grille TCF encodée dans le prompt, score + feedback typés |
| Paiement | Stripe (carte) + agrégateur mobile money (CinetPay / PawaPay) | Deux intégrations distinctes dès le départ — complexité centrale du produit |
| Visio & booking | Zoom API + Cal.com (ou custom léger) | Uniquement pour le module examinateur humain (V3) |
| Emailing | Resend ou Postmark | Deliverability transactionnelle fiable |
| Infra & observabilité | Vercel + PostHog + Sentry | Cohérent avec le stack observé, coût prévisible au démarrage |

---

## 5. Exigences non-fonctionnelles

**Performance** — mobile-first, lazy-load des audios, budget de poids de page strict (audience sur connexions parfois lentes).

**Sécurité & anti-fraude** — protection du contenu premium contre le scraping/partage de compte, rate limiting sur les soumissions, aucune donnée de carte stockée (délégué à Stripe).

**Conformité légale** — Loi 25 (Québec) + RGPD si audience européenne, consentement explicite pour la conservation des enregistrements audio/vidéo, politique de remboursement appliquée par le back-office.

**Accessibilité** — sémantique HTML correcte, pas de texte tronqué sans alternative, contraste AA sur les deux thèmes.

---

## 6. Risques & questions ouvertes

1. **Qui produit le contenu mensuel, et selon quel calendrier ?** Sans process éditorial défini, le CMS sera vide au lancement.
2. **La correction IA est-elle fiable par rapport à la grille TCF officielle ?** Prévoir une phase de calibration (échantillon corrigé en parallèle par un humain) avant d'exposer le score comme définitif.
3. **Un examinateur humain unique suffit-il ?** Le service premium repose sur une personne — un pic de demande peut saturer le calendrier en quelques jours.
4. **Quel agrégateur mobile money, avec quels délais et quelles commissions ?** Impacte directement la marge sur le segment le plus captif.
5. **Propriété intellectuelle du contenu inspiré du TCF officiel.** Le TCF est une marque de France Éducation International — le contenu doit être original dans sa forme.
6. **Durée de conservation des enregistrements audio/vidéo des candidats.** Sensible (voix, image, contenu personnel) — politique à écrire avant la V2.
7. **Partage de compte entre plusieurs candidats.** Réduit le revenu par utilisateur sur un produit à durée fixe — envisager une limite de sessions actives dès le MVP.

---

## 7. Roadmap proposée

**MVP (≈ 6–8 semaines)** — Valider que des candidats payent pour s'entraîner en conditions réelles.
- Auth + un seul pack payant, sans upgrade
- CE/CO : séries QCM + correction automatique
- EE : simulateur chronométré, correction manuelle par email (pas d'IA)
- Paiement carte uniquement (Stripe)
- Pages marketing, légales, CMS minimal pour les sujets

**V2 (≈ 2–3 mois après le MVP)** — Automatiser la correction et couvrir le marché africain.
- Correction IA de l'expression écrite
- Simulateur EO avec enregistrement
- Examen blanc combiné + attestation PDF
- Mobile money, packs multiples, calculateur NCLC
- Tableau de bord de progression

**V3 (selon traction)** — Monétiser le service premium à forte marge et scaler l'éditorial.
- Réservation d'examinateur humain + visio automatique
- Multi-examinateurs
- Back-office complet, file de modération IA
- Blog SEO, notifications, coaching live en groupe

---

## 8. Par où commencer

Dans l'ordre, avant d'écrire du code :

1. **Trancher les 7 questions ouvertes de la section 6** — surtout #1 (qui écrit le contenu) et #5 (propriété intellectuelle). Le reste du planning en dépend.
2. **Choisir un seul pack MVP et un seul mode de paiement** (carte via Stripe). Résister à l'envie de construire Bronze/Silver/Gold et le mobile money dès le jour 1 — ça vient en V2.
3. **Initialiser le repo** : Next.js + TypeScript + Tailwind + Prisma + Neon (branche `main`), CI minimale (lint + typecheck).
4. **Modéliser en premier les tables `User`, `Subscription`, `Serie`, `Question`, `Attempt`** (section 3) — tout le reste du MVP en dépend directement.
5. **Construire un seul parcours de bout en bout avant d'élargir** : inscription → paiement → une série CE avec correction automatique → tableau de score simple. C'est la preuve que le modèle économique fonctionne techniquement, avant d'ajouter EE/EO/CO.
6. **Brancher le contenu réel du mois 1** avant le lancement public — un CMS vide ne convainc personne.
7. **Lancer en accès limité** (quelques dizaines d'utilisateurs, idéalement via le canal WhatsApp) avant d'ouvrir le marketing à grande échelle, pour vérifier que la correction et le paiement tiennent en conditions réelles.

Concrètement : le prochain jalon concret est l'étape 3 (initialisation du repo) une fois les étapes 1 et 2 tranchées avec toi.

---

## 9. Système de design

Version visuelle à jour (palette définitive, composants) : https://claude.ai/code/artifact/c5b67f08-eb86-430f-88cc-1ea5aa8090f5

> Statut : **couleurs et police de base validées** par l'équipe. Une maquette complète suivra plus tard pour la charte visuelle définitive (mise en page, illustration) — mais ces 4 couleurs et cette typographie sont figées dès maintenant et ne doivent pas être rouvertes sans demande explicite.

**Couleurs — 4 couleurs, chacune avec un rôle fixe, jamais décoratif :**

| Couleur | Hex | Source | Rôle |
|---|---|---|---|
| Noir | `#121117` | preply.com (encre) | Texte d'interface, boutons primaires |
| Bleu | `#3346E0` | Choix propre (carte fondateur/examinateur) | Action, info, liens |
| Fuchsia | `#FF7AAC` | preply.com (marque) | Mise en avant, premium |
| Vert | `#3DDABE` | preply.com (section contenu) | Validation, gratuit, succès |

**Typographie** — **Plus Jakarta Sans** partout, y compris les grands nombres (minuteur, scores) ; **IBM Plex Mono** conservé uniquement pour le repère de temps du lecteur audio.

**Fond & élévation** — dégradé mesh doux (les 3 couleurs fondues en flous discrets) derrière le bloc héros plutôt qu'un aplat, grain subtil superposé sur toute la page, cartes en surfaces blanches élevées avec ombre à deux couches plutôt que des blocs de couleur plate.

**Composants fondations** — boutons (primaire noir plein/secondaire/ghost/destructeur fuchsia), champs de formulaire avec compteur de mots, badges à deux familles (accès candidat : Gratuit/Premium/Nouveau — statut éditorial admin : Brouillon/Programmé/Publié), liste à chevrons pour les 4 épreuves (icône colorée + libellé + repère chiffré + `›`), cartes profil à effet photo empilée.

**Patterns spécifiques au produit** :
- **Minuteur d'examen** — 3 états visuels (normal / < 2 min / < 30 s), le composant le plus critique du produit
- **Lecteur audio à lecture unique** — pas de retour arrière, fidèle aux conditions réelles de la compréhension orale
- **Carte de score** — toujours le score brut et l'équivalence NCLC, jamais un pourcentage seul
- **Navigation** — barre haute pilule sur desktop, barre basse à 5 items sur mobile
- **Tableau admin** — statut éditorial visible sans ouvrir la ligne

**Historique des itérations** (pour mémoire, non retenues) : v1 fondations sobres bleu marine — jugée "trop IA" ; v2 direction passeport/billet d'embarquement — abandonnée au profit d'une référence concrète (preply.com).

---

## 10. Architecture d'information (routing)

**Site public**
```
/                                                  accueil
/epreuve/[slug]                                    slug: comprehension-ecrite | comprehension-orale
                                                            expression-ecrite | expression-orale
/epreuve/[slug]/sujets-actualites/[mois-annee]      banque de sujets filtrée par mois
/tarification                                       packs + add-ons
/examen-blanc                                       parcours combiné
/examen-oral                                        réservation examinateur (V3)
/blog
/blog/[slug]
/a-propos
/foire-aux-questions
/contact
/mentions-legales · /politique-de-confidentialite · /cookies · /politique-remboursement
/connexion · /inscription · /mot-de-passe-oublie
/mon-compte
```

**Admin (protégé, rôle admin uniquement)**
```
/admin                          tableau de bord + calendrier éditorial
/admin/sujets                   liste — filtres épreuve / mois / statut
/admin/sujets/nouveau
/admin/sujets/[id]/edition
/admin/articles                 liste blog
/admin/articles/nouveau
/admin/articles/[id]/edition
/admin/series                   gestion séries QCM CE/CO + banque de questions
/admin/utilisateurs
/admin/abonnements
/admin/paiements
/admin/examinateur               créneaux (V3 uniquement)
```

---

## 11. Modèle de contenu — Sujet & Article

Champs complets nécessaires pour les formulaires admin de création/édition (section 12).

### Sujet (Expression Écrite / Expression Orale)

| Champ | Type | Notes |
|---|---|---|
| Épreuve* | select | Expression Écrite / Expression Orale |
| Tâche* | select | 1 / 2 / 3 — avec description du type de tâche affichée en aide |
| Titre interne* | texte | Usage admin uniquement, jamais affiché au candidat |
| Consigne / énoncé* | texte riche | Ce que voit le candidat |
| Niveau CECRL | select | A2 → C2, informatif |
| Documents annexes | texte riche × 2 | EE tâche 3 uniquement — Document 1 (favorable) / Document 2 (défavorable) |
| Durée suggérée | nombre (min) | |
| Longueur attendue | plage (mots) | Pour l'expression écrite |
| Fichier audio | upload | Si mise en situation avec support audio |
| Réponse modèle / corrigé type | texte riche, optionnel | Visible en admin, ou débloqué après tentative |
| Mois de publication* | select mois/année | |
| Statut* | select | Brouillon / Programmé / Publié / Archivé |
| Date de publication programmée | date | Si statut = Programmé |
| Tags/thèmes | multi-select libre | immigration, société, technologie, famille, travail… |
| Ordre d'affichage | nombre | Tri dans la liste du mois |
| Accès | toggle | Gratuit / Premium |

### Article (Blog)

| Champ | Type | Notes |
|---|---|---|
| Titre* | texte | |
| Slug* | texte | Généré automatiquement, éditable |
| Extrait / chapo | texte | Résumé court — cartes + SEO |
| Contenu* | éditeur riche / MDX | Blocs image supportés |
| Image de couverture* | upload | Ratio recommandé affiché à l'upload |
| Auteur | select | Parmi les profils admin |
| Catégorie | select | Méthodologie / Immigration / Actualités TCF / Témoignages |
| Tags | multi-select libre | |
| Temps de lecture | calculé | Automatique à partir du contenu |
| Statut* | select | Brouillon / Programmé / Publié |
| Date de publication programmée | date | |
| SEO — titre meta | texte | Préempli depuis le titre, éditable |
| SEO — description meta | texte | Préempli depuis l'extrait, éditable |
| SEO — image Open Graph | upload | Préempli depuis la couverture |
| Article épinglé | booléen | Mise en avant sur la home ou le blog |

---

## 12. Fonctionnalité admin — gestion de contenu

Ce que le dashboard doit permettre, dans l'ordre de valeur :

1. **Liste filtrable** (par épreuve, statut, mois) avec recherche — vue par défaut du module
2. **Calendrier éditorial** — vue mensuelle montrant ce qui est prévu / publié / manquant, pour éviter le risque n°1 identifié en section 6 (le CMS vide au lancement)
3. **Formulaire de création/édition avec aperçu** — rendu exactement comme le candidat le verra, avant publication
4. **Publication programmée** — alignée sur la cadence mensuelle observée sur le marché de référence
5. **Duplication d'un sujet existant** comme point de départ — accélère la production mensuelle une fois le format stabilisé
6. **Historique de versions** — qui a publié quoi et quand, utile dès qu'il y a plus d'un rédacteur

---

## 13. Stratégie de sourcing du contenu — à trancher

Point soulevé explicitement pendant le cadrage : formation-tcfcanada.com est un produit commercial concurrent, et ses « sujets d'actualité » / séries verrouillées sont son contenu payant propriétaire. Les scraper pour les réutiliser tel quel poserait un problème de copyright et de concurrence déloyale (certaines séries sont en plus derrière un paywall).

**Décision actuelle : reportée** — à trancher avant la phase de production éditoriale (pas avant le développement technique). Options envisagées :

1. **Format inspiré, contenu original** — observer uniquement la structure publique (types de tâches, cadence mensuelle) et rédiger un contenu 100 % original, assisté ou non par IA.
2. **Contenu officiel TCF uniquement** — construire le format à partir des annales et spécifications publiques de France Éducation International (l'organisme officiel du TCF), sans regarder le site concurrent.

Cette décision n'affecte pas l'architecture ni le design system définis ci-dessus — elle conditionne uniquement le contenu réel du mois 1 (voir section 8, étape 6).
