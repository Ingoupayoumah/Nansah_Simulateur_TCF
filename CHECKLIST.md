# Nansah — Checklist des fonctionnalités

> Dernière mise à jour : **2026-09-11**
> Source : [README.md section 2](README.md#2-liste-de-fonctionnalités). Cochez au fil du développement — mettez à jour la date ci-dessus à chaque changement d'état.

Légende : 🟢 MVP · 🟡 V2 · 🟣 V3 — rien n'est encore construit (le seul code existant est le scaffold technique : Next.js, Prisma, Clerk, tokens de design).

## A · Site public & marketing
- [ ] 🟢 Page d'accueil — hero, 4 épreuves, avantages, fondateur, FAQ courte
- [ ] 🟢 Pages par épreuve (CE/CO/EE/EO) — structure pédagogique, format d'examen, tâches détaillées
- [ ] 🟢 Page tarification — comparatif des packs auto-formation vs coaching, add-ons à l'unité
- [ ] 🟢 Pages légales — confidentialité, CGU, cookies, politique de remboursement
- [ ] 🟢 Bandeau cookies — consentement granulaire (essentiels / analytics / marketing)
- [ ] 🟢 Contact & support — formulaire, boutons WhatsApp/email flottants
- [ ] 🟡 Calculateur NCLC gratuit — aimant à leads
- [ ] 🟡 Blog SEO — guides immigration / méthodologie TCF
- [ ] 🟡 SEO structuré — JSON-LD (Course, FAQPage, Organization), sitemap, canonical
- [ ] 🟡 Preuve sociale — témoignages, statistiques de réussite, avis vérifiés

## B · Authentification & compte
- [ ] 🟢 Inscription / connexion email + mot de passe *(pages `/connexion` `/inscription` scaffoldées, provider en attente — Clerk vs Firebase non tranché)*
- [ ] 🟢 Mot de passe oublié
- [ ] 🟢 Mon compte — abonnement actif, échéance, historique de paiement
- [ ] 🟡 Connexion Google *(demandée — dépend du choix de provider ci-dessus)*
- [ ] 🟡 Upgrade de forfait au prorata
- [ ] 🟡 Suppression de compte / export de données

## C · Contenu pédagogique (CE / CO / EE / EO)
- [ ] 🟢 Modules méthodologie (texte/vidéo par épreuve)
- [ ] 🟢 Séries QCM (CE/CO) — 3 gratuites, suite premium
- [ ] 🟢 Correction QCM automatique — score sur /699
- [ ] 🟢 Lecteur audio CO — accents variés, lecture unique
- [ ] 🟢 Banque de sujets d'actualité (EE/EO) — organisée par mois
- [ ] 🟢 Déblocage premium par série
- [ ] 🟢 Process de publication mensuelle du contenu

## D · Simulateurs & correction IA
- [ ] 🟢 Simulateur EE — éditeur chronométré, 3 tâches, 60 min
- [ ] 🟡 Correction IA du texte — grille TCF (tâche, lexique, grammaire, cohérence)
- [ ] 🟡 Simulateur EO — enregistrement micro/vidéo, 3 tâches, 12 min
- [ ] 🟡 Historique des soumissions
- [ ] 🟡 Recharge de crédits simulateur à l'unité
- [ ] 🟣 File de révision humaine des corrections IA à faible confiance

## E · Examen blanc complet
- [ ] 🟡 Parcours combiné CO+CE+EE en conditions réelles
- [ ] 🟡 Score global + niveaux NCLC par compétence
- [ ] 🟡 Attestation PDF téléchargeable
- [ ] 🟡 Accès illimité inclus dans tous les packs

## F · Examen oral avec examinateur humain
- [ ] 🟡 Profil examinateur (bio, habilitation)
- [ ] 🟣 Calendrier de réservation de créneau
- [ ] 🟣 Création automatique du lien visio (Zoom)
- [ ] 🟡 Paiement à l'unité
- [ ] 🟣 Rapport d'évaluation détaillé post-séance
- [ ] 🟣 Gestion multi-examinateurs

## G · Calculateur NCLC (outil gratuit)
- [ ] 🟡 Formulaire de saisie des 4 scores
- [ ] 🟡 Conversion instantanée en niveaux NCLC
- [ ] 🟡 Tableau d'équivalence officiel affiché

## H · Tableau de bord & progression
- [ ] 🟡 Suivi des scores par épreuve dans le temps
- [ ] 🟡 Historique complet des tentatives
- [ ] 🟣 Repérage automatique des points faibles

## I · Paiement & abonnements
- [ ] 🟢 Carte bancaire (Stripe)
- [ ] 🟢 Abonnement à durée fixe, non reconduit automatiquement
- [ ] 🟡 PayPal
- [ ] 🟡 Mobile money par pays (Algérie, Cameroun, Côte d'Ivoire…)
- [ ] 🟡 Codes promo
- [ ] 🟡 Génération de factures

## J · Back-office & admin
- [ ] 🟢 CMS interne pour publier les sujets mensuels sans déploiement
- [ ] 🟢 Gestion des utilisateurs et abonnements
- [ ] 🟡 Tableau de bord business (conversion, churn, CA)
- [ ] 🟣 Gestion des créneaux de l'examinateur
- [ ] 🟣 File de modération des corrections IA

## K · Communication
- [ ] 🟢 Bouton WhatsApp flottant
- [ ] 🟢 Emails transactionnels (achat, résultats, rappel d'expiration)
- [ ] 🟡 Notification nouveaux sujets du mois

---

## Infrastructure (hors liste produit, mais bloquant)
- [x] Dépôt Git initialisé et connecté à GitHub (`Ingoupayoumah/Nansah_Simulateur_TCF`)
- [x] Scaffold Next.js + TypeScript + Tailwind + Prisma (schéma complet) + Clerk (inactif)
- [x] Palette et typographie verrouillées, branchées en tokens Tailwind
- [x] Garde-fous de sécurité (`CLAUDE.md` + skill `security-audit`)
- [ ] Choix définitif Clerk vs Firebase pour l'auth
- [ ] Base Neon connectée (`DATABASE_URL` renseignée)
- [ ] Compte fournisseur d'auth créé et clés renseignées
