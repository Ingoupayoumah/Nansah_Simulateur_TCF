import Link from "next/link";
import { MicIcon, BookOpenIcon, CalendarIcon, TrendingUpIcon } from "@/components/icons";
import { TaskCard } from "@/components/site/TaskCard";

// Contenu de démonstration pour la Combinaison 1 — exemples originaux à
// confirmer/remplacer par du contenu définitif avant publication.
const taches = [
  {
    numero: 1,
    titre: "Tâche 1",
    type: "Entretien dirigé",
    mots: "4-6 questions",
    duree: "2 min",
    consigne:
      "Vous voulez louer un vélo pour la journée dans une ville touristique. Posez au moins quatre questions à l'employé du magasin de location pour obtenir toutes les informations nécessaires (tarifs, horaires, équipement, conditions).",
    correction: `Bonjour, je voudrais louer un vélo pour la journée, est-ce que c'est possible ?

Quel est le tarif pour une journée complète ?

Est-ce que le casque est inclus dans la location ?

Jusqu'à quelle heure dois-je rapporter le vélo ce soir ?

Est-ce qu'il y a une caution à payer au départ ?

Merci beaucoup, je vais réfléchir et je reviens vous voir.`,
  },
  {
    numero: 2,
    titre: "Tâche 2",
    type: "Discussion suivie",
    mots: "Avis + exemples",
    duree: "3 min",
    consigne:
      "Certaines personnes préfèrent travailler à distance, d'autres préfèrent aller au bureau tous les jours. Qu'en pensez-vous ? Présentez votre opinion et justifiez-la avec des exemples.",
    correction: `Personnellement, je pense que le télétravail présente de vrais avantages, surtout pour l'équilibre entre vie professionnelle et vie personnelle. Par exemple, quand je travaillais à distance, je gagnais presque une heure par jour en évitant les transports, ce qui me permettait de mieux dormir et d'être plus concentré.

Cela dit, je comprends aussi que certaines personnes aient besoin du contact direct avec leurs collègues pour rester motivées. À mon avis, l'idéal serait une formule hybride, avec deux ou trois jours au bureau et le reste à la maison. Ça permettrait de profiter des deux avantages à la fois.`,
  },
  {
    numero: 3,
    titre: "Tâche 3",
    type: "Débat argumenté",
    mots: "2 arguments min.",
    duree: "7 min",
    consigne:
      "Certains pensent que les réseaux sociaux devraient être interdits aux moins de 16 ans. Défendez votre position face à l'examinateur, qui vous présentera des arguments contraires.",
    correction: `À mon avis, une interdiction avant 16 ans est justifiée, car les jeunes adolescents sont particulièrement vulnérables à la comparaison sociale et au harcèlement en ligne, ce qui peut avoir un impact réel sur leur santé mentale.

Certes, les réseaux sociaux permettent de rester en contact avec ses amis, mais il existe d'autres moyens de communiquer, comme la messagerie instantanée classique, qui posent moins de risques d'exposition publique. Je pense donc qu'un encadrement strict, voire une interdiction temporaire, reste la solution la plus responsable, même si cela demande un effort d'adaptation de la part des familles.`,
  },
];

export default function ExpressionOralePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue to-blue-dark">
        <div className="max-w-[1180px] mx-auto px-8 py-14 grid lg:grid-cols-[1fr_320px] gap-10 items-center">
          <div>
            <h1 className="text-white font-extrabold text-4xl leading-tight">
              Expression Orale
              <br />
              TCF Canada
            </h1>
            <p className="text-white/85 mt-4 max-w-[54ch]">
              Entraînez-vous à l&apos;entretien dirigé, à la discussion suivie et au
              débat argumenté pour maîtriser les 3 tâches de l&apos;épreuve, comme le
              jour de l&apos;examen.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/epreuve/expression-orale/methodologie"
                className="inline-flex items-center gap-2 rounded-full bg-white text-blue-dark font-bold text-sm px-5 py-3 hover:bg-white/90 transition"
              >
                <BookOpenIcon className="w-4 h-4" />
                Méthodologie et Astuces
              </Link>
              <Link
                href="/epreuve/expression-orale/combinaisons"
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
            <MicIcon className="w-5 h-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue">
              Sujets d&apos;actualité
            </p>
            <h2 className="text-2xl font-extrabold">Combinaison 1</h2>
          </div>
        </div>
        <p className="text-ink-soft mb-10">
          Préparez votre réponse à l&apos;oral comme le jour de l&apos;examen, minutée
          si possible. Une fois votre réponse formulée, consultez l&apos;exemple
          proposé pour comparer votre approche.
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
