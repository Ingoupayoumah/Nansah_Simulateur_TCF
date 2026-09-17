import Link from "next/link";
import { TaskCard } from "@/components/site/TaskCard";

// Contenu de démonstration — sujets originaux (jamais copiés d'un site tiers,
// voir .claude/skills/tcf-content-generator/SKILL.md pour la méthode de
// génération). À valider avant publication définitive.
const combinaisons = [
  {
    numero: 1,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Vous avez visité un appartement qui vous intéresse. Rédigez un message au propriétaire pour confirmer votre intérêt, poser une question sur les charges incluses et proposer une date pour la signature du bail.",
        correction: `Bonjour Monsieur,

Suite à la visite de votre appartement hier, je souhaite vous confirmer mon intérêt pour la location. Le logement correspond exactement à ce que je recherchais.

Avant de finaliser, pourriez-vous me préciser si les charges de copropriété sont incluses dans le loyer annoncé ?

Si tout convient, seriez-vous disponible la semaine prochaine pour signer le bail ? Je reste flexible sur l'horaire.

Cordialement,
Karim`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Vous venez d'emménager seul(e) dans une nouvelle ville pour poursuivre vos études. Écrivez un message à un(e) ami(e) resté(e) dans votre ville d'origine : racontez votre installation et dites-lui ce que vous appréciez ou redoutez dans ce changement.",
        correction: `Salut !

Ça y est, je suis enfin installé dans mon nouvel appartement, même si tout n'est pas encore déballé. Les premiers jours ont été un peu chaotiques : je ne connaissais personne et j'ai dû tout organiser seul, du compte bancaire à l'inscription à l'université.

Ce que j'apprécie le plus, c'est cette sensation de liberté totale — je gère mon emploi du temps comme je veux. Par contre, les soirées sont parfois longues sans repères familiers autour de moi.

Je pense que ça va me forcer à sortir de ma zone de confort, et ça, c'est plutôt excitant.`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `Faut-il autoriser les outils d'intelligence artificielle générative pour faire les devoirs scolaires ?

Document 1 : Ces outils démocratisent l'accès à l'aide aux devoirs, réduisent le stress des élèves en difficulté et les préparent aux outils qu'ils utiliseront au travail plus tard.

Document 2 : Leur usage affaiblit la capacité de réflexion autonome, encourage une dépendance précoce et rend l'évaluation des compétences réelles de l'élève impossible.`,
        correction: `L'IA générative dans les devoirs : outil d'aide ou frein à l'apprentissage ?

D'un côté, le premier document présente l'IA comme un outil démocratisant l'aide aux devoirs et préparant les élèves aux outils professionnels de demain. À l'inverse, le second document alerte sur l'affaiblissement de la réflexion autonome et l'impossibilité d'évaluer les compétences réelles.

À mon avis, l'IA ne devrait pas être interdite, mais encadrée. Utilisée pour comprendre une notion ou vérifier un raisonnement, elle reste bénéfique. En revanche, si elle remplace entièrement le travail de réflexion, elle prive l'élève d'un apprentissage essentiel. La solution se trouve donc dans l'éducation à un usage raisonné plutôt que dans l'interdiction pure et simple.`,
      },
    ],
  },
  {
    numero: 2,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Vous devez vous absenter de votre travail la semaine prochaine pour un rendez-vous médical. Rédigez un message à votre responsable pour l'informer de votre absence, proposer une solution pour la continuité de vos tâches et vous excuser du délai de prévenance.",
        correction: `Bonjour,

Je dois m'absenter mardi prochain toute la matinée pour un rendez-vous médical que je n'ai pas pu programmer plus tôt. Je suis désolé du délai un peu court pour vous prévenir.

Pour assurer la continuité de mes dossiers en cours, je propose de transmettre les urgences à Sophie avant mon départ, et je resterai joignable par téléphone en cas de besoin.

Merci de votre compréhension.

Cordialement,
Amadou`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Vous avez commencé récemment un nouvel emploi dans une entreprise très différente de vos expériences précédentes. Rédigez un article pour le blog interne de l'entreprise racontant votre première semaine et donnez votre impression sur l'accueil réservé aux nouveaux employés.",
        correction: `Ma première semaine chez nous : entre découvertes et adaptation

Après plusieurs années dans un environnement plus traditionnel, intégrer une entreprise aussi dynamique a été un vrai changement de rythme. Dès le premier jour, un parcours d'intégration complet m'attendait : présentation des équipes, formation aux outils internes, et un déjeuner organisé avec mon nouveau service.

Ce qui m'a le plus marqué, c'est la disponibilité de mes collègues pour répondre à mes questions, même les plus basiques. J'ai trouvé cet accueil rassurant et propice à une intégration rapide.

Si je devais résumer cette semaine en un mot : bienveillance.`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `L'école devrait-elle remplacer les notes chiffrées par une évaluation par compétences ?

Document 1 : Un système par compétences réduit la pression liée aux classements, valorise la progression individuelle et limite le décrochage lié à l'échec répété.

Document 2 : Supprimer les notes chiffrées prive les familles d'un repère clair et lisible, complique les comparaisons entre établissements et retarde la préparation des élèves aux exigences du monde professionnel.`,
        correction: `Notes ou compétences : quelle évaluation pour demain ?

Le premier document soutient qu'un système par compétences réduit la pression du classement et valorise la progression individuelle. Le second, à l'inverse, souligne que la suppression des notes chiffrées prive les familles d'un repère clair et complique la préparation au monde professionnel.

Je pense que les deux approches pourraient coexister. Les compétences permettent de mieux cerner les progrès réels d'un élève, mais un repère chiffré reste utile pour se situer plus largement. Un bulletin combinant les deux offrirait probablement la lisibilité recherchée par les familles, sans sacrifier la bienveillance pédagogique.`,
      },
    ],
  },
  {
    numero: 3,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Vous partez en voyage avec un ami la semaine prochaine, mais l'horaire de votre vol vient de changer. Rédigez-lui un message pour l'informer du changement, lui proposer un nouveau point de rendez-vous et lui demander de confirmer sa disponibilité.",
        correction: `Salut,

Petit changement de programme : notre vol a été avancé de deux heures, départ prévu à 6h du matin au lieu de 8h.

Je propose qu'on se retrouve directement à l'aéroport vers 4h30 pour avoir de la marge à l'enregistrement.

Est-ce que cet horaire te convient toujours ? Dis-moi vite si besoin d'ajuster.

À bientôt !`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Lors d'un trajet en train, vous avez fait une rencontre qui vous a marqué(e). Écrivez un message à un(e) proche pour raconter cette rencontre et expliquez en quoi elle a changé votre regard sur quelque chose.",
        correction: `Coucou,

Il m'est arrivé quelque chose d'inattendu dans le train hier. Une dame âgée assise à côté de moi m'a raconté qu'elle avait immigré seule à 20 ans, sans connaître personne ni parler la langue.

Son récit m'a bouleversé, parce que je me plains parfois de petites difficultés qui semblent dérisoires en comparaison. Ça m'a rappelé à quel point le courage silencieux de certaines personnes passe inaperçu.

Je crois que cette rencontre va me rendre plus patient avec mes propres galères.`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `Faut-il instaurer un quota annuel de vols en avion par personne ?

Document 1 : Un quota individuel responsabilise chaque citoyen face à l'urgence climatique et incite au développement d'alternatives comme le train longue distance.

Document 2 : Une telle mesure pénaliserait surtout les classes moyennes et les familles éloignées, alors que l'essentiel des émissions provient du fret et de l'aviation d'affaires.`,
        correction: `Voyager en avion : faut-il fixer une limite ?

Le premier document défend l'idée qu'un quota individuel responsabiliserait chaque citoyen face à l'urgence climatique. Le second rappelle que l'essentiel des émissions provient du fret et de l'aviation d'affaires, et qu'une telle mesure pénaliserait surtout les classes moyennes.

À mon sens, cibler les voyageurs individuels sans s'attaquer aux plus gros émetteurs serait injuste. Il me semble plus cohérent de renforcer d'abord la réglementation sur le fret et les vols professionnels avant d'imposer des contraintes aux particuliers, qui n'ont souvent pas d'alternative pour les longs trajets.`,
      },
    ],
  },
  {
    numero: 4,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Vous êtes membre d'un club de lecture de votre quartier. Rédigez un message à l'organisateur pour proposer un livre pour la prochaine séance et expliquer pourquoi ce choix vous semble intéressant.",
        correction: `Bonjour,

Je voulais proposer un titre pour notre prochaine rencontre : un roman qui aborde le thème de l'exil à travers plusieurs générations d'une même famille.

Je pense que ce livre pourrait susciter de belles discussions, notamment sur la question de la transmission et de l'identité, des sujets qui touchent plusieurs membres du groupe.

Dites-moi si ça vous tente pour le mois prochain !

Bien à vous`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Vous revenez d'un voyage organisé en dernière minute, sans grande préparation. Rédigez un article pour un magazine de voyage en ligne racontant cette expérience et donnez votre avis sur les voyages improvisés.",
        correction: `Partir sans plan : le pari d'un voyage improvisé

Réserver un billet trois jours avant le départ n'était pas prévu, mais une opportunité inattendue m'a poussé à sauter le pas. Sans itinéraire précis, j'ai découvert des lieux que je n'aurais probablement jamais cherchés en préparant un voyage classique.

Cette absence de planification a eu son lot de stress, notamment pour trouver un hébergement à la dernière minute. Mais elle a aussi laissé place à une liberté rare, celle de changer de plan au gré des rencontres.

Je recommande cette expérience à qui accepte un peu d'incertitude en échange d'authenticité.`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `La semaine de quatre jours doit-elle devenir la norme dans les entreprises ?

Document 1 : Réduire le temps de travail hebdomadaire améliore la santé mentale des salariés, sans perte de productivité selon plusieurs expérimentations récentes.

Document 2 : Ce modèle est difficilement applicable aux petites structures et aux métiers de service, et risque de créer une inégalité entre salariés selon leur secteur.`,
        correction: `La semaine de quatre jours : une évolution nécessaire ?

Selon le premier document, réduire le temps de travail hebdomadaire améliorerait la santé mentale des salariés sans nuire à la productivité. Le second document nuance ce constat en soulignant la difficulté d'application pour les petites structures et les métiers de service.

Je pense que ce modèle mérite d'être généralisé progressivement, en tenant compte des réalités sectorielles. Une transition accompagnée, plutôt qu'une norme unique imposée à tous les secteurs, permettrait de préserver l'équité entre salariés tout en profitant des bénéfices démontrés sur le bien-être.`,
      },
    ],
  },
  {
    numero: 5,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Vous avez reçu une facture d'électricité qui vous semble anormalement élevée. Rédigez un message au service client de votre fournisseur pour signaler le problème, demander une vérification et proposer un échéancier de paiement en attendant.",
        correction: `Bonjour,

Je vous contacte au sujet de ma dernière facture d'électricité, dont le montant me semble anormalement élevé par rapport à ma consommation habituelle.

Pourriez-vous vérifier si une erreur de relevé a pu se produire ?

En attendant votre réponse, je souhaiterais mettre en place un échelonnement du paiement sur deux mois, le temps que la situation soit clarifiée.

Merci de votre retour rapide.

Cordialement`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Votre famille s'est réunie pour la première fois depuis plusieurs années à l'occasion d'un anniversaire. Écrivez une lettre à un(e) cousin(e) qui n'a pas pu venir pour lui raconter les retrouvailles et lui dire ce que cela vous a apporté.",
        correction: `Chère Amina,

Tu nous as vraiment manqué dimanche ! Toute la famille s'est enfin réunie, certains ne s'étaient pas revus depuis presque cinq ans.

L'ambiance était chaleureuse, entre fous rires et souvenirs racontés autour du repas. J'ai réalisé à quel point ces moments deviennent rares avec le temps qui passe et les distances qui nous séparent tous.

Cette journée m'a rappelé l'importance de garder ces liens vivants, malgré nos emplois du temps chargés. On organisera sûrement quelque chose bientôt pour que tu puisses te joindre à nous.`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `Les grandes enseignes devraient-elles être obligées de proposer une part de produits reconditionnés ou d'occasion ?

Document 1 : Imposer un quota d'occasion prolonge la durée de vie des objets, réduit le gaspillage de ressources et rend la seconde main plus accessible et plus visible.

Document 2 : Une obligation légale complexifie la gestion des enseignes, ne garantit pas une réelle demande des consommateurs et pourrait faire grimper artificiellement les prix des produits neufs pour compenser.`,
        correction: `Occasion en magasin : une obligation justifiée ?

Le premier document avance qu'un quota de produits reconditionnés prolongerait la durée de vie des objets et rendrait la seconde main plus visible. Le second document objecte qu'une telle obligation compliquerait la gestion des enseignes et pourrait faire grimper le prix du neuf.

À mon avis, imposer un quota strict semble prématuré, mais encourager les enseignes par des incitations fiscales produirait des effets similaires sans les contraintes évoquées. Cela laisserait aux commerces la liberté d'adapter leur offre tout en avançant vers une consommation plus responsable.`,
      },
    ],
  },
  {
    numero: 6,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Votre cousin(e) vient d'emménager dans votre ville. Rédigez-lui un message pour lui souhaiter la bienvenue, lui proposer de l'aider à s'installer et lui suggérer une sortie pour découvrir le quartier.",
        correction: `Salut !

Bienvenue dans le quartier, ça va être génial de t'avoir enfin près de chez moi !

Si tu as besoin d'un coup de main pour monter les meubles ou déballer les cartons ce week-end, je suis totalement disponible.

Une fois installé, on pourrait aller découvrir le petit marché du samedi matin, il y a plein de bons produits locaux. Dis-moi ce qui te tente !

À très vite`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Vous avez participé pour la première fois à une activité de bénévolat dans votre quartier. Rédigez un article pour le journal associatif de votre ville racontant cette journée et exprimez ce que cette expérience vous a appris.",
        correction: `Une première journée de bénévolat qui change une perspective

Distribuer des repas dans le cadre d'une collecte solidaire n'était pas une évidence pour moi au départ. Pourtant, cette journée m'a permis de rencontrer des bénévoles engagés depuis des années et des personnes reconnaissantes pour ce simple geste.

J'ai été surpris par la diversité des profils impliqués, venant d'horizons très différents mais unis par une même envie d'aider. Cette expérience m'a appris que le bénévolat ne demande pas forcément beaucoup de temps pour avoir un impact réel.

Je compte bien renouveler l'expérience régulièrement.`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `La téléconsultation médicale doit-elle remplacer la majorité des rendez-vous chez le médecin généraliste ?

Document 1 : La téléconsultation réduit les délais d'attente, facilite l'accès aux soins dans les zones rurales et fait gagner du temps aux patients comme aux praticiens.

Document 2 : L'examen physique reste irremplaçable pour un diagnostic fiable, et la généralisation de la téléconsultation risque de déshumaniser la relation entre patient et médecin.`,
        correction: `Téléconsultation : une solution d'avenir ou un pis-aller ?

D'après le premier document, la téléconsultation réduit les délais d'attente et facilite l'accès aux soins dans les zones rurales. Le second document insiste sur l'importance de l'examen physique pour un diagnostic fiable et redoute une déshumanisation de la relation médecin-patient.

Je pense que la téléconsultation est un complément précieux, notamment pour les suivis simples ou les zones sous-dotées en médecins, mais elle ne devrait pas remplacer systématiquement les consultations physiques, indispensables pour certains diagnostics. Un équilibre entre les deux formats semble la solution la plus raisonnable.`,
      },
    ],
  },
  {
    numero: 7,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Vous suivez un cours du soir et devrez manquer la prochaine séance. Rédigez un message à votre formateur/formatrice pour expliquer la raison de votre absence, demander le support de cours manqué et proposer un moment de rattrapage.",
        correction: `Bonjour,

Je serai malheureusement absent(e) au prochain cours en raison d'un déplacement professionnel imprévu.

Serait-il possible d'obtenir le support utilisé pendant la séance, afin de ne pas prendre de retard sur le programme ?

Je suis également disponible pour un rattrapage la semaine suivante si cela vous convient.

Merci d'avance pour votre compréhension.

Cordialement`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Après plusieurs années dans le même métier, vous avez décidé de vous reconvertir dans un domaine totalement différent. Écrivez un message à un(e) ancien(ne) collègue pour lui raconter les débuts de cette reconversion et lui donner votre sentiment sur ce changement.",
        correction: `Salut,

Ça fait maintenant un mois que j'ai commencé ma reconversion, et je voulais te donner des nouvelles ! Les débuts ont été plus difficiles que prévu, entre les nouvelles méthodes à apprendre et le sentiment de repartir de zéro.

Malgré tout, je ressens une motivation que je n'avais plus depuis longtemps dans mon ancien poste. Ce changement radical me confronte à mes limites, mais aussi à des capacités que je ne soupçonnais pas.

Avec le recul, je pense que j'aurais dû sauter le pas bien plus tôt.`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `Les plateformes doivent-elles rendre publics les critères de leurs algorithmes de recommandation ?

Document 1 : La transparence des algorithmes permettrait de comprendre pourquoi certains contenus deviennent viraux et de limiter la désinformation ou l'addiction qu'ils favorisent.

Document 2 : Dévoiler ces critères profiterait surtout à des acteurs malveillants cherchant à manipuler le système, sans réel bénéfice pour l'utilisateur moyen.`,
        correction: `Algorithmes de recommandation : vers plus de transparence ?

Selon le premier document, révéler les critères des algorithmes permettrait de comprendre la viralité de certains contenus et de limiter la désinformation. Le second document estime que cette transparence profiterait surtout à des acteurs malveillants cherchant à manipuler le système.

À mon avis, une transparence partielle, limitée aux grandes lignes de fonctionnement sans divulguer tous les détails techniques, permettrait de répondre aux préoccupations légitimes des utilisateurs sans faciliter les abus. Un contrôle indépendant pourrait compléter ce dispositif.`,
      },
    ],
  },
  {
    numero: 8,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Vous covoiturez régulièrement avec un collègue pour aller au travail, mais vous devez changer l'heure de départ cette semaine. Rédigez-lui un message pour expliquer la raison du changement et proposer un nouvel horaire.",
        correction: `Salut,

J'ai un rendez-vous en début de matinée cette semaine, donc je devrai partir un peu plus tôt que d'habitude, vers 7h15 au lieu de 7h45.

Est-ce que cet horaire te convient, ou préfères-tu qu'on s'organise autrement pour ces quelques jours ?

Dis-moi ce qui t'arrange le mieux.

À demain !`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Vous avez assisté à un festival ou un événement culturel local pour la première fois. Rédigez un billet pour le site touristique de votre région racontant votre expérience et recommandez (ou non) cet événement aux visiteurs.",
        correction: `Un festival local à ne pas manquer

Ma première participation au festival de musique de la région restera un excellent souvenir. L'ambiance conviviale, les artistes locaux mis en valeur et la diversité des stands m'ont agréablement surpris.

Seul bémol : l'affluence rend parfois l'accès aux différentes scènes compliqué en fin de journée. Il vaut mieux arriver tôt pour profiter pleinement de la programmation.

Je recommande vivement cet événement à toute personne de passage dans la région à cette période de l'année.`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `Le télétravail généralisé est-il une solution durable pour désengorger les transports urbains ?

Document 1 : Un télétravail généralisé réduit la fréquentation aux heures de pointe, diminue la fatigue liée aux trajets et libère du temps pour la vie personnelle.

Document 2 : À long terme, il fragilise la cohésion d'équipe, complique l'intégration des nouveaux employés et déplace la congestion vers les horaires de loisirs plutôt que de la supprimer.`,
        correction: `Télétravail et transports urbains : une fausse bonne solution ?

Le premier document met en avant la réduction de la fréquentation aux heures de pointe et le gain de temps personnel qu'apporte le télétravail généralisé. Le second document souligne qu'il fragilise la cohésion d'équipe et déplace simplement la congestion vers d'autres horaires.

Je pense que le télétravail reste utile pour désengorger ponctuellement les transports, mais qu'il ne suffit pas à lui seul à résoudre le problème. Investir dans des infrastructures de transport plus efficaces demeure indispensable, en complément d'une organisation du travail plus flexible.`,
      },
    ],
  },
  {
    numero: 9,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Vous devez annuler un rendez-vous chez le dentiste prévu la semaine prochaine. Rédigez un message au secrétariat du cabinet pour annuler le rendez-vous, présenter vos excuses pour le délai court et demander une nouvelle date.",
        correction: `Bonjour,

Je vous contacte pour annuler mon rendez-vous prévu mardi prochain, en raison d'un empêchement de dernière minute.

Je suis désolé(e) de vous prévenir aussi tardivement et j'espère que cela ne pose pas trop de difficultés d'organisation.

Serait-il possible de reprogrammer un rendez-vous dans les semaines suivantes, à votre convenance ?

Merci beaucoup et encore désolé(e) pour la gêne occasionnée.

Cordialement`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Vous avez relevé un défi physique personnel (course, randonnée en montagne, premier marathon). Écrivez un message à un(e) ami(e) pour raconter cette expérience et lui expliquer ce que ce défi vous a appris sur vous-même.",
        correction: `Salut,

Je l'ai fait : j'ai terminé mon premier semi-marathon dimanche dernier ! Les derniers kilomètres ont été extrêmement difficiles, à un moment j'ai vraiment cru que je n'y arriverais pas.

Franchir la ligne d'arrivée m'a procuré une fierté que je n'attendais pas à ce point. Ce défi m'a appris que je suis capable de dépasser des limites que je pensais infranchissables, à condition de tenir bon dans les moments de doute.

Je pense sérieusement à m'inscrire à un marathon complet maintenant !`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `La viande cultivée en laboratoire devrait-elle être encouragée comme alternative à l'élevage traditionnel ?

Document 1 : Cette technologie permettrait de réduire l'empreinte environnementale de la production de viande et d'éviter la souffrance animale liée à l'élevage intensif.

Document 2 : Le manque de recul sur les effets à long terme sur la santé et la disparition programmée d'un savoir-faire agricole traditionnel rendent cette voie risquée et prématurée.`,
        correction: `Viande de laboratoire : une alternative d'avenir ?

Le premier document présente la viande cultivée comme une solution pour réduire l'empreinte environnementale et éviter la souffrance animale liée à l'élevage intensif. Le second document met en garde contre le manque de recul sur ses effets sanitaires et la disparition d'un savoir-faire agricole traditionnel.

Je pense que cette technologie mérite d'être développée en parallèle de l'élevage traditionnel plutôt qu'à sa place. Un soutien à la recherche, accompagné d'études sanitaires rigoureuses, permettrait d'évaluer sereinement son potentiel sans sacrifier un patrimoine agricole qui reste précieux.`,
      },
    ],
  },
  {
    numero: 10,
    taches: [
      {
        numero: 1,
        titre: "Tâche 1",
        type: "Message court",
        mots: "60-120 mots",
        duree: "10-15 min",
        consigne:
          "Vous êtes inscrit(e) à un cours de sport en groupe (yoga, natation, etc.) et souhaitez inviter un(e) ami(e) à vous accompagner. Rédigez-lui un message pour présenter l'activité, expliquer pourquoi elle pourrait lui plaire et lui proposer de s'inscrire avec vous.",
        correction: `Coucou,

Je voulais te parler du cours de yoga auquel je participe depuis un mois, le mardi soir. L'ambiance est vraiment détendue et le professeur adapte les postures à tous les niveaux.

Je pense que ça te plairait, surtout que tu cherches justement un moyen de décompresser après le travail.

Ça te dirait de venir essayer une séance avec moi la semaine prochaine ? On pourrait s'inscrire ensemble si ça te convainc.

Dis-moi vite !`,
      },
      {
        numero: 2,
        titre: "Tâche 2",
        type: "Narration",
        mots: "120-150 mots",
        duree: "15-20 min",
        consigne:
          "Vous avez appris à jouer d'un instrument de musique en autodidacte grâce à des vidéos en ligne. Écrivez un billet pour un forum de musiciens amateurs racontant votre apprentissage et partagez votre sentiment sur cette méthode.",
        correction: `Apprendre la guitare seul grâce aux vidéos : mon expérience

Sans jamais avoir pris de cours, j'ai appris les bases de la guitare uniquement à partir de tutoriels trouvés en ligne. Les premiers mois ont demandé beaucoup de discipline personnelle, sans professeur pour corriger mes erreurs directement.

Ce qui m'a le plus aidé, c'est de pouvoir avancer à mon propre rythme et de revoir une explication autant de fois que nécessaire. Cependant, je pense qu'un accompagnement ponctuel par un professeur reste utile pour progresser sur le long terme.

Cette méthode convient parfaitement pour débuter, mais elle a ses limites.`,
      },
      {
        numero: 3,
        titre: "Tâche 3",
        type: "Argumentation",
        mots: "120-180 mots",
        duree: "20-30 min",
        consigne: `Les centres-villes doivent-ils devenir totalement interdits aux voitures particulières ?

Document 1 : Bannir les voitures du centre réduit la pollution sonore et atmosphérique, redonne de l'espace aux piétons et dynamise les commerces de proximité.

Document 2 : Cette interdiction pénalise les habitants des zones périurbaines mal desservies par les transports en commun et fragilise les commerces dépendant d'une clientèle motorisée.`,
        correction: `Centres-villes sans voitures : une mesure d'avenir ?

Le premier document affirme que bannir les voitures du centre réduirait la pollution et redonnerait de l'espace aux piétons, dynamisant ainsi les commerces de proximité. Le second document objecte que cette interdiction pénaliserait les habitants mal desservis par les transports en commun et fragiliserait les commerces dépendant d'une clientèle motorisée.

Je pense qu'une transition progressive, accompagnée d'un renforcement des transports en commun avant toute interdiction totale, permettrait de concilier les bénéfices environnementaux avec les besoins réels des habitants périphériques.`,
      },
    ],
  },
];

export default function CombinaisonsJanvier2024Page() {
  return (
    <div className="max-w-[860px] mx-auto px-8 py-14">
      <Link
        href="/epreuve/expression-ecrite/combinaisons"
        className="inline-flex items-center gap-1.5 text-blue text-sm font-semibold mb-5 hover:underline"
      >
        ← Toutes les années
      </Link>
      <h1 className="font-extrabold text-3xl mb-2">Combinaisons — Janvier 2024</h1>
      <p className="text-ink-soft mb-10">
        10 combinaisons complètes (3 tâches chacune) pour vous entraîner en
        conditions réelles. Contenu original, à valider avant publication
        définitive.
      </p>

      <div className="flex flex-col gap-14">
        {combinaisons.map((c) => (
          <section key={c.numero}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-full bg-blue text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                {c.numero}
              </span>
              <h2 className="text-xl font-extrabold">Combinaison {c.numero}</h2>
            </div>
            <div className="flex flex-col gap-5">
              {c.taches.map((t) => (
                <TaskCard key={`${c.numero}-${t.numero}`} {...t} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
