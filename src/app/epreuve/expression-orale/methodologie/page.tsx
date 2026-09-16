import Link from "next/link";
import {
  BookOpenIcon,
  CheckIcon,
  InfoCircleIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { AnimatedNumber } from "@/components/site/AnimatedNumber";

const repartition = [
  { temps: "2 min", label: "Tâche 1 — Entretien dirigé" },
  { temps: "5 min 30", label: "Tâche 2 — Interaction avec préparation" },
  { temps: "4 min 30", label: "Tâche 3 — Expression spontanée" },
];

const taches = [
  {
    numero: 1,
    titre: "Tâche 1 : Entretien dirigé",
    meta: "2 minutes · Sans préparation · Niveau A1-A2",
    format:
      "La tâche la plus accessible de l'épreuve. C'est l'examinateur qui vous pose des questions simples sur vous — vos goûts, vos habitudes, votre parcours — comme dans une première rencontre. Vous n'avez rien à préparer, il suffit de répondre naturellement.",
    structure: [
      { titre: "Écoute", desc: "Laissez l'examinateur poser sa question en entier avant de répondre." },
      { titre: "Réponse développée", desc: "Répondez par une phrase complète, jamais par un simple oui/non." },
      { titre: "Précision", desc: "Ajoutez un détail ou une justification à chaque réponse." },
    ],
    conseils: [
      "Ne mémorisez pas de réponses toutes faites — l'examinateur adapte ses questions à vous.",
      "Développez toujours un peu votre réponse (« j'aime le cinéma, surtout les comédies, parce que... »).",
      "Restez calme, c'est la tâche la plus accessible de l'épreuve.",
      "Articulez clairement : la prononciation est déjà évaluée dès cette première tâche.",
    ],
    callout: null as string | null,
  },
  {
    numero: 2,
    titre: "Tâche 2 : Interaction avec préparation",
    meta: "5 minutes 30 · Avec préparation · Niveau B1-B2",
    callout:
      "Ici, les rôles s'inversent : c'est vous qui menez l'échange. L'examinateur incarne un rôle précis (agent, responsable, particulier) et attend vos questions.",
    format:
      "Vous recevez un thème de la vie quotidienne et un temps de préparation pour noter vos questions. Vous devez ensuite interroger l'examinateur, qui joue un rôle (par exemple un loueur de vélos ou un gardien d'animaux), pour obtenir des informations concrètes.",
    structure: [
      { titre: "Préparation", desc: "Notez 4 à 6 questions précises et variées pendant le temps imparti." },
      { titre: "Ouverture", desc: "Saluez et introduisez clairement l'objet de votre demande." },
      { titre: "Questions", desc: "Posez vos questions dans un ordre logique, en réagissant aux réponses." },
    ],
    conseils: [
      "Profitez pleinement du temps de préparation pour structurer vos questions à l'avance.",
      "Variez les formes interrogatives (est-ce que, inversion, mots interrogatifs).",
      "Enchaînez avec une question de relance selon la réponse de l'examinateur.",
      "Adaptez le registre de langue au rôle joué par l'examinateur.",
    ],
  },
  {
    numero: 3,
    titre: "Tâche 3 : Expression spontanée",
    meta: "4 minutes 30 · Sans préparation · Niveau B2-C2",
    callout:
      "Contrairement à une idée reçue, ce n'est pas un débat : l'examinateur ne vous interrompt pas et ne vous contredit pas. Vous développez votre point de vue seul, en continu.",
    format:
      "L'examinateur vous pose une question ouverte de société, sans préparation possible. Vous devez développer un point de vue argumenté et structuré, seul, pendant environ 4 minutes 30, sans interaction avec l'examinateur pendant votre prise de parole.",
    structure: [
      { titre: "Introduction", desc: "Reformulez le sujet et annoncez votre position en quelques secondes." },
      { titre: "Développement", desc: "Exposez 2 à 3 arguments illustrés d'exemples concrets." },
      { titre: "Conclusion", desc: "Résumez votre position en une phrase de synthèse." },
    ],
    conseils: [
      "Prenez quelques secondes pour organiser vos idées avant de commencer à parler.",
      "Structurez avec des connecteurs logiques : d'abord, de plus, cependant, enfin.",
      "Illustrez chaque argument par un exemple concret ou personnel.",
      "Gérez votre temps — ne vous arrêtez pas trop tôt, mais ne vous répétez pas non plus.",
    ],
  },
];

const criteres = [
  { titre: "Fluidité", desc: "Débit naturel, peu d'hésitations, enchaînement fluide des idées." },
  { titre: "Vocabulaire", desc: "Richesse et précision lexicale, peu de répétitions." },
  { titre: "Grammaire", desc: "Correction grammaticale à l'oral et variété des structures." },
  { titre: "Adéquation à la tâche", desc: "Capacité à s'adapter à chaque exercice : répondre, interroger, puis argumenter seul." },
];

export default function MethodologieExpressionOralePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue to-blue-dark">
        <div className="max-w-[860px] mx-auto px-8 py-14">
          <Link
            href="/epreuve/expression-orale"
            className="inline-flex items-center gap-1.5 text-white/80 text-sm font-semibold mb-5 hover:text-white transition"
          >
            ← Retour à l&apos;Expression Orale
          </Link>
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">
            Méthodologie et astuces
          </p>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight">
            Réussir l&apos;Expression Orale du TCF Canada
          </h1>
          <p className="text-white/85 mt-4 max-w-[58ch]">
            Comprenez le format de chaque tâche, la structure attendue et les critères
            de correction avant de vous entraîner sur de vrais sujets.
          </p>
          <div className="flex gap-8 mt-8">
            {[
              { value: 3, label: "Tâches" },
              { value: 12, label: "Minutes" },
              { value: 20, label: "Points" },
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
        {/* GESTION DU TEMPS */}
        <section className="anim-fade-up-1 rounded-3xl bg-bg-deep p-6 sm:p-8">
          <h2 className="font-extrabold text-lg mb-2">Répartition officielle du temps</h2>
          <p className="text-ink-soft text-sm mb-6">
            Contrairement à l&apos;expression écrite, ces durées sont fixes et gérées
            par l&apos;examinateur — vous n&apos;avez pas à surveiller le temps
            vous-même, mais les connaître aide à ne pas être pris de court.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {repartition.map((r) => (
              <div key={r.label} className="rounded-2xl bg-surface p-5 text-center">
                <div className="text-blue font-extrabold text-2xl">{r.temps}</div>
                <div className="text-ink-soft text-sm font-semibold mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TACHES */}
        {taches.map((t, i) => (
          <section
            key={t.numero}
            className={`anim-fade-up-${Math.min(i + 2, 5)} rounded-3xl border border-line bg-surface p-6 sm:p-8`}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="w-9 h-9 rounded-full bg-blue text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                {t.numero}
              </span>
              <h2 className="font-extrabold text-xl">{t.titre}</h2>
            </div>
            <p className="text-ink-faint text-sm font-semibold ml-12 mb-6">{t.meta}</p>

            {t.callout && (
              <div className="flex gap-3 rounded-2xl bg-blue-tint p-4 mb-6">
                <InfoCircleIcon className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                <p className="text-sm text-ink font-medium leading-relaxed">{t.callout}</p>
              </div>
            )}

            <h3 className="font-bold text-sm uppercase tracking-wide text-ink-faint mb-2">
              Format de la tâche
            </h3>
            <p className="text-ink-soft leading-relaxed mb-6">{t.format}</p>

            <h3 className="font-bold text-sm uppercase tracking-wide text-ink-faint mb-3">
              Structure recommandée
            </h3>
            <div className="flex flex-col gap-3 mb-6">
              {t.structure.map((s, idx) => (
                <div key={s.titre} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-bg-deep text-ink-soft text-xs font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-ink-soft">
                    <span className="font-bold text-ink">{s.titre}.</span> {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-sm uppercase tracking-wide text-ink-faint mb-3">
              Conseils pratiques
            </h3>
            <ul className="flex flex-col gap-2.5">
              {t.conseils.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-ink-soft items-start">
                  <CheckIcon className="text-green shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* CRITERES */}
        <section className="anim-fade-up-5">
          <h2 className="font-extrabold text-xl mb-5">Critères d&apos;évaluation</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {criteres.map((c) => (
              <div key={c.titre} className="rounded-2xl bg-bg-deep p-5">
                <h3 className="font-bold mb-1">{c.titre}</h3>
                <p className="text-sm text-ink-soft">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-ink-fixed text-ink p-8 text-center">
          <div className="flex justify-center mb-3">
            <BookOpenIcon className="w-8 h-8 text-blue" />
          </div>
          <h2 className="font-extrabold text-xl mb-2">Prêt à vous entraîner ?</h2>
          <p className="text-ink-soft-fixed text-sm mb-6 max-w-[46ch] mx-auto">
            Mettez ces conseils en pratique avec nos combinaisons de sujets basées sur
            des situations réelles.
          </p>
          <Link
            href="/epreuve/expression-orale/combinaisons"
            className="inline-flex items-center gap-2 rounded-full bg-blue text-white font-bold text-sm px-6 py-3 hover:bg-blue-dark transition"
          >
            Voir les sujets d&apos;actualité
            <ArrowRightIcon />
          </Link>
        </section>
      </div>
    </div>
  );
}
