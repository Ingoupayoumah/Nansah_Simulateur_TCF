import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  InfoCircleIcon,
  SearchIcon,
  BookOpenIcon,
} from "@/components/icons";
import { AnimatedNumber } from "@/components/site/AnimatedNumber";

const pieges = [
  {
    titre: "La reformulation trompeuse",
    desc: "Une réponse reprend les mots du texte mais en change discrètement le sens.",
  },
  {
    titre: "La vérité partielle",
    desc: "Une réponse mélange une information exacte et un détail faux — tout doit être vrai pour être correct.",
  },
  {
    titre: "La négation cachée",
    desc: "Un simple « ne... pas » ou « aucun » peut inverser complètement le sens d'une phrase.",
  },
  {
    titre: "La déduction abusive",
    desc: "Une réponse semble logique mais n'est confirmée par aucune phrase du texte — méfiez-vous des suppositions.",
  },
];

const phases = [
  {
    titre: "Premier passage",
    duree: "~25 min",
    desc: "Répondez aux questions qui vous semblent évidentes et marquez celles qui posent problème, sans vous y attarder.",
  },
  {
    titre: "Deuxième passage",
    duree: "~25 min",
    desc: "Revenez sur les questions plus difficiles avec le recul du premier passage — souvent, une autre question du texte vous aide à y voir plus clair.",
  },
  {
    titre: "Relecture finale",
    duree: "~10 min",
    desc: "Vérifiez qu'aucune question n'est restée sans réponse et relisez vos choix les plus incertains.",
  },
];

export default function MethodologieComprehensionEcritePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue to-blue-dark">
        <div className="max-w-[860px] mx-auto px-8 py-14">
          <Link
            href="/epreuve/comprehension-ecrite"
            className="inline-flex items-center gap-1.5 text-white/80 text-sm font-semibold mb-5 hover:text-white transition"
          >
            ← Retour à la Compréhension Écrite
          </Link>
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">
            Méthodologie et astuces
          </p>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight">
            Réussir la Compréhension Écrite du TCF Canada
          </h1>
          <p className="text-white/85 mt-4 max-w-[58ch]">
            Comprenez le format de l&apos;épreuve, les stratégies de lecture efficaces
            et les pièges classiques avant de vous entraîner sur nos séries.
          </p>
          <div className="flex gap-8 mt-8">
            {[
              { value: 39, label: "Questions" },
              { value: 60, label: "Minutes" },
              { value: 699, label: "Points" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-white font-extrabold text-3xl">
                  <AnimatedNumber value={s.value} duration={900} delay={200} />
                </div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-wide mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[860px] mx-auto px-8 py-14 flex flex-col gap-12">
        {/* FORMAT */}
        <section className="anim-fade-up-1 rounded-3xl bg-bg-deep p-6 sm:p-8">
          <h2 className="font-extrabold text-lg mb-2">Format de l&apos;épreuve</h2>
          <p className="text-ink-soft leading-relaxed">
            39 questions à choix multiples (4 propositions, une seule bonne réponse),
            à traiter en 60 minutes. Les questions suivent une difficulté croissante :
            les premières sont généralement les plus accessibles. Vous pouvez revenir
            en arrière à tout moment pour revoir ou corriger une réponse — rien n&apos;est
            figé avant la fin du temps imparti.
          </p>
        </section>

        {/* DEUX FACONS DE LIRE */}
        <section className="anim-fade-up-2 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-full bg-blue text-white flex items-center justify-center shrink-0">
              <SearchIcon className="w-4 h-4" />
            </span>
            <h2 className="font-extrabold text-xl">Adaptez votre lecture à chaque question</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-bg-deep p-5">
              <p className="font-bold mb-1.5">Lecture ciblée</p>
              <p className="text-sm text-ink-soft leading-relaxed">
                Pour une information précise — une date, un chiffre, un nom, un fait
                isolé. Repérez les mots-clés de la question et parcourez le texte sans
                tout lire.
              </p>
            </div>
            <div className="rounded-2xl bg-bg-deep p-5">
              <p className="font-bold mb-1.5">Lecture approfondie</p>
              <p className="text-sm text-ink-soft leading-relaxed">
                Pour l&apos;idée générale, le ton ou l&apos;opinion de l&apos;auteur.
                Là, une lecture complète du texte est nécessaire pour saisir les
                nuances.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl bg-blue-tint p-4 mt-4">
            <InfoCircleIcon className="w-5 h-5 text-blue shrink-0 mt-0.5" />
            <p className="text-sm text-ink font-medium leading-relaxed">
              Un bon réflexe : lisez la question avant le texte. Vous saurez tout de
              suite quel type de lecture adopter.
            </p>
          </div>
        </section>

        {/* PIEGES */}
        <section className="anim-fade-up-3 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="font-extrabold text-xl mb-6">Les pièges classiques à repérer</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {pieges.map((p) => (
              <div key={p.titre} className="rounded-2xl bg-bg-deep p-4">
                <p className="font-bold text-sm mb-1.5">{p.titre}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GESTION DU TEMPS */}
        <section className="anim-fade-up-4 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="font-extrabold text-xl mb-2">Gérer ses 60 minutes</h2>
          <p className="text-ink-soft text-sm mb-6">
            Avec un peu plus d&apos;une minute par question en moyenne, une stratégie
            en plusieurs passages évite de rester bloqué sur une question difficile.
          </p>
          <div className="flex flex-col gap-3">
            {phases.map((ph, idx) => (
              <div key={ph.titre} className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-bg-deep text-ink-soft text-xs font-extrabold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm text-ink-soft">
                  <span className="font-bold text-ink">
                    {ph.titre} ({ph.duree}).
                  </span>{" "}
                  {ph.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONSEILS */}
        <section className="anim-fade-up-5">
          <h2 className="font-extrabold text-xl mb-5">Conseils pratiques</h2>
          <ul className="flex flex-col gap-2.5">
            {[
              "Ne cherchez pas la réponse « idéale » — cherchez la seule confirmée par le texte.",
              "Une question sans réponse compte comme une erreur : misez plutôt sur votre meilleure hypothèse.",
              "Le vocabulaire inconnu ne bloque pas tout : le sens général se devine souvent grâce au contexte.",
              "Plus votre score est élevé, plus le niveau NCLC associé à cette épreuve est élevé.",
            ].map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-ink-soft items-start">
                <CheckIcon className="text-green shrink-0 mt-0.5" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-ink-fixed text-ink p-8 text-center">
          <div className="flex justify-center mb-3">
            <BookOpenIcon className="w-8 h-8 text-blue" />
          </div>
          <h2 className="font-extrabold text-xl mb-2">Prêt à vous entraîner ?</h2>
          <p className="text-ink-soft-fixed text-sm mb-6 max-w-[46ch] mx-auto">
            Mettez ces stratégies en pratique avec nos séries de compréhension écrite.
          </p>
          <Link
            href="/epreuve/comprehension-ecrite#series"
            className="inline-flex items-center gap-2 rounded-full bg-blue text-white font-bold text-sm px-6 py-3 hover:bg-blue-dark transition"
          >
            Voir les séries d&apos;entraînement
            <ArrowRightIcon />
          </Link>
        </section>
      </div>
    </div>
  );
}
