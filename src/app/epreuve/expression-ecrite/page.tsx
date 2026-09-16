import Link from "next/link";
import { PencilIcon, BookOpenIcon, CalendarIcon, TrendingUpIcon } from "@/components/icons";
import { TaskCard } from "@/components/site/TaskCard";

// Contenu de démonstration pour la Combinaison 1 — à confirmer/remplacer par du
// contenu original avant publication (voir la discussion sur la provenance).
const taches = [
  {
    numero: 1,
    titre: "Tâche 1",
    type: "Message court",
    mots: "60-120 mots",
    duree: "10 min",
    consigne:
      "Vous avez publié une annonce pour la location de votre appartement. Rédigez un courriel à une personne intéressée en lui fournissant des informations sur l'appartement ainsi que sur le quartier.",
    correction: `Objet : Informations complémentaires sur la location de l'appartement

Bonjour,

Merci pour votre intérêt concernant la location de mon appartement. Je suis ravi de vous donner plus de détails.

L'appartement est un deux-pièces de 60 m², situé au troisième étage avec ascenseur. Il est composé d'une chambre spacieuse, d'un salon lumineux avec balcon, d'une cuisine entièrement équipée, et d'une salle de bain moderne avec douche. Le logement est très bien entretenu et meublé avec goût.

Le quartier est calme et agréable, avec toutes les commodités à proximité : supermarchés, boulangeries, et plusieurs restaurants. Le parc voisin est idéal pour les promenades. De plus, les transports en commun sont facilement accessibles, avec une station de métro à 5 minutes à pied.

N'hésitez pas à me contacter si vous souhaitez visiter l'appartement ou si vous avez d'autres questions.

Cordialement,
Karim`,
  },
  {
    numero: 2,
    titre: "Tâche 2",
    type: "Narration",
    mots: "120-150 mots",
    duree: "20 min",
    consigne:
      "Vous venez de commencer les cours à l'université à Montréal. Écrivez un message à votre ami pour lui raconter votre première semaine à l'université.",
    correction: `Ma première semaine à l'université de Montréal a été une véritable immersion.

Commencer l'université, c'est comme embarquer dans une nouvelle aventure. À Montréal, cette expérience est encore plus unique, marquée par des découvertes excitantes et des rencontres inoubliables.

La diversité culturelle sur le campus est impressionnante, et les cours sont stimulants. J'ai aussi participé à des activités de bienvenue, ce qui m'a permis de me faire rapidement des amis venant des quatre coins du monde. Les cafés étudiants sont devenus mes nouveaux repères, parfaits pour étudier et socialiser.

Je te recommande vivement, quand ce sera ton tour, de profiter pleinement de cette première semaine. Plonge dans chaque activité, explore la ville, et garde l'esprit ouvert. C'est une expérience qui pose les bases d'une vie universitaire réussie.`,
  },
  {
    numero: 3,
    titre: "Tâche 3",
    type: "Argumentation",
    mots: "120-180 mots",
    duree: "30 min",
    consigne: `Les animaux de compagnie pour les enfants

Offrir un animal de compagnie à un enfant présente de nombreux avantages, comme le soulignent beaucoup de psychologues. Pour des enfants qui n'ont pas de frères et/ou de sœurs, l'animal est un compagnon qui leur évitera la solitude. Grâce à lui, un enfant prendra confiance en lui et il apprendra vite qu'un animal est un être vivant qui a besoin d'attention et de respect. En sa présence, l'enfant se sentira en sécurité et pourra agir de manière autonome, sans l'aide de ses parents.

Beaucoup d'enfants demandent, un jour ou l'autre, un animal à leurs parents, le plus souvent un chien ou un chat. Mais même si vous avez envie de faire plaisir à votre enfant, il vaut mieux réfléchir sérieusement avant d'acheter un animal domestique. L'animal devient un nouveau membre de la famille et représente un engagement sur de nombreuses années. Or, avoir un animal coûte souvent très cher, et c'est une grande responsabilité. On ne peut pas le traiter comme un jouet que l'on met à la poubelle quand l'enfant s'en désintéresse.`,
    correction: `Faut-il offrir un animal de compagnie à un enfant ?

Dans le débat sur les animaux de compagnie pour les enfants, deux points de vue s'opposent. Le Document 1 met en avant les bénéfices psychologiques et affectifs d'un animal, tandis que le Document 2 insiste sur la responsabilité et les coûts à long terme que cela implique.

À mon avis, un animal de compagnie peut apporter de nombreux bienfaits à un enfant, notamment en termes de compagnie et de développement personnel. Cependant, le Document 2 rappelle à juste titre que l'adoption d'un animal n'est pas une décision à prendre à la légère. Cela nécessite un engagement durable et une responsabilité financière non négligeable. Plutôt que de céder impulsivement à la demande d'un enfant, il est essentiel d'évaluer soigneusement les capacités de la famille à assumer cet engagement. Une réflexion approfondie permettrait de garantir que l'animal sera traité avec le respect et l'attention qu'il mérite, tout en offrant à l'enfant une expérience enrichissante et équilibrée.`,
  },
];

export default function ExpressionEcritePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue to-blue-dark">
        <div className="max-w-[1180px] mx-auto px-8 py-14 grid lg:grid-cols-[1fr_320px] gap-10 items-center">
          <div>
            <h1 className="text-white font-extrabold text-4xl leading-tight">
              Expression Écrite
              <br />
              TCF Canada
            </h1>
            <p className="text-white/85 mt-4 max-w-[54ch]">
              Entraînez-vous sur des sujets réels, revoyez la méthodologie de chaque
              tâche et suivez votre progression pour maîtriser les 3 exercices de
              l&apos;épreuve.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/epreuve/expression-ecrite/methodologie"
                className="inline-flex items-center gap-2 rounded-full bg-white text-blue-dark font-bold text-sm px-5 py-3 hover:bg-white/90 transition"
              >
                <BookOpenIcon className="w-4 h-4" />
                Méthodologie et Astuces
              </Link>
              <Link
                href="/epreuve/expression-ecrite/combinaisons"
                className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white font-bold text-sm px-5 py-3 hover:bg-white/30 transition"
              >
                <CalendarIcon className="w-4 h-4" />
                Sujets d&apos;Actualité
              </Link>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-5 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-blue-tint text-blue flex items-center justify-center shrink-0">
                <TrendingUpIcon className="w-4.5 h-4.5" />
              </span>
              <span className="font-extrabold text-sm">Tableau de bord</span>
            </div>
            <div className="flex justify-between text-sm mb-2.5">
              <span className="text-ink-faint font-semibold">Tentatives</span>
              <span className="font-extrabold">0</span>
            </div>
            <div className="flex justify-between text-sm mb-5">
              <span className="text-ink-faint font-semibold">Dernier score</span>
              <span className="font-extrabold">— /20</span>
            </div>
            <Link
              href="/mon-compte"
              className="block text-center rounded-full bg-bg-deep text-ink font-bold text-sm px-4 py-2.5 hover:bg-line transition"
            >
              Voir mon détail
            </Link>
          </div>
        </div>
      </section>

      {/* SUJETS */}
      <section id="sujets" className="max-w-[860px] mx-auto px-8 pt-14 pb-16 scroll-mt-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-xl bg-blue flex items-center justify-center text-white shrink-0">
            <PencilIcon className="w-5 h-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue">
              Sujets d&apos;actualité
            </p>
            <h2 className="text-2xl font-extrabold">Combinaison 1</h2>
          </div>
        </div>
        <p className="text-ink-soft mb-10">
          Lisez chaque consigne comme le jour de l&apos;examen. Une fois votre réponse
          préparée, consultez la correction proposée pour comparer votre approche.
        </p>

        <div className="flex flex-col gap-5">
          {taches.map((t) => (
            <TaskCard key={t.numero} {...t} />
          ))}
        </div>
      </section>
    </>
  );
}
