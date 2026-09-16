import Link from "next/link";
import {
  BookOpenIcon,
  CheckIcon,
  InfoCircleIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { AnimatedNumber } from "@/components/site/AnimatedNumber";

const repartition = [
  { duree: 2, label: "Tâche 1 — Entretien dirigé" },
  { duree: 3, label: "Tâche 2 — Discussion suivie" },
  { duree: 7, label: "Tâche 3 — Débat argumenté" },
];

const taches = [
  {
    numero: 1,
    titre: "Tâche 1 : Entretien dirigé",
    meta: "Environ 2 minutes · Niveau A2-B1",
    format:
      "La tâche la plus accessible de l'épreuve. À partir d'une mise en situation (une annonce, un document, un contexte donné), vous devez poser des questions pertinentes à l'examinateur pour obtenir des informations, comme dans une vraie conversation.",
    structure: [
      { titre: "Prise de contact", desc: "Saluez et présentez brièvement l'objet de votre demande." },
      { titre: "Questions ciblées", desc: "Posez 4 à 6 questions claires et bien formulées, liées au document." },
      { titre: "Clôture", desc: "Remerciez et concluez poliment l'échange." },
    ],
    conseils: [
      "Adaptez le registre de langue à la situation : plus formel avec un professionnel, plus détendu entre amis.",
      "Variez les formes interrogatives (est-ce que, inversion, intonation) pour montrer votre aisance.",
      "Écoutez la réponse de l'examinateur avant d'enchaîner avec la question suivante.",
      "Évitez les questions fermées répétitives — creusez un sujet avec des questions de relance.",
    ],
    callout: null as string | null,
  },
  {
    numero: 2,
    titre: "Tâche 2 : Discussion suivie",
    meta: "Environ 3 minutes · Niveau B1-B2",
    callout:
      "Point important : on attend ici une vraie conversation avec l'examinateur, pas un monologue appris par cœur — restez naturel et réactif.",
    format:
      "Vous recevez un sujet du quotidien (vos habitudes, vos loisirs, votre travail, un choix de vie) et devez en parler, donner votre avis, puis répondre aux relances de l'examinateur qui approfondit certains points.",
    structure: [
      { titre: "Introduction du sujet", desc: "Présentez votre position ou votre expérience en une ou deux phrases." },
      { titre: "Développement", desc: "Justifiez avec des exemples concrets tirés de votre vécu." },
      { titre: "Échange", desc: "Répondez aux questions de relance avec précision, sans éluder." },
    ],
    conseils: [
      "Préparez des exemples personnels réutilisables sur des thèmes courants (études, travail, voyages, technologies).",
      "Structurez vos réponses avec des connecteurs simples : d'abord, ensuite, par exemple, du coup.",
      "N'ayez pas peur de nuancer votre avis — « d'un côté... de l'autre... » montre une bonne maîtrise.",
      "Gardez un débit naturel, ni trop lent ni précipité.",
    ],
  },
  {
    numero: 3,
    titre: "Tâche 3 : Débat argumenté",
    meta: "Environ 7 minutes · Niveau B2-C2",
    format:
      "La tâche la plus exigeante de l'épreuve. L'examinateur vous soumet une affirmation ou une question de société et joue volontairement l'avocat du diable, pour tester votre capacité à défendre votre position, nuancer et réagir à la contradiction.",
    structure: [
      { titre: "Prise de position", desc: "Annoncez clairement votre opinion dès le début." },
      { titre: "Argumentation", desc: "Développez au moins deux arguments solides, illustrés d'exemples." },
      { titre: "Réfutation", desc: "Répondez aux objections de l'examinateur sans perdre le fil de votre position." },
    ],
    conseils: [
      "Ne changez pas d'avis sous la pression — nuancez plutôt votre position.",
      "Utilisez des connecteurs d'opposition et de concession : certes... mais, bien que, cela dit.",
      "Anticipez les contre-arguments évidents et préparez une réponse.",
      "Gardez un ton respectueux même en désaccord avec l'examinateur.",
    ],
    callout: null as string | null,
  },
];

const criteres = [
  { titre: "Fluidité", desc: "Débit naturel, peu d'hésitations, enchaînement fluide des idées." },
  { titre: "Vocabulaire", desc: "Richesse et précision lexicale, peu de répétitions." },
  { titre: "Grammaire", desc: "Correction grammaticale à l'oral et variété des structures." },
  { titre: "Interaction", desc: "Capacité à réagir aux questions et relances de l'examinateur." },
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
          <h2 className="font-extrabold text-lg mb-2">Gestion du temps recommandée</h2>
          <p className="text-ink-soft text-sm mb-6">
            L&apos;examinateur guide le déroulement de l&apos;épreuve, mais connaître
            cette répartition vous aide à structurer vos réponses et à ne pas être pris
            de court.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {repartition.map((r) => (
              <div key={r.label} className="rounded-2xl bg-surface p-5 text-center">
                <div className="text-blue font-extrabold text-2xl">{r.duree} min</div>
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
