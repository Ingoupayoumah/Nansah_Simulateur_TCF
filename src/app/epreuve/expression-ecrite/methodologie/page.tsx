import Link from "next/link";
import {
  BookOpenIcon,
  CheckIcon,
  InfoCircleIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { AnimatedNumber } from "@/components/site/AnimatedNumber";

const repartition = [
  { duree: 10, label: "Tâche 1 — Message" },
  { duree: 20, label: "Tâche 2 — Narration" },
  { duree: 30, label: "Tâche 3 — Argumentation" },
];

const taches = [
  {
    numero: 1,
    titre: "Tâche 1 : Message court",
    meta: "60-120 mots · 10 minutes · Niveau A2-B1",
    format:
      "La tâche la plus accessible de l'épreuve, généralement de niveau A2 à B1. Vous devez rédiger un message court ancré dans une situation du quotidien : message à un proche, email professionnel, note explicative ou invitation.",
    structure: [
      { titre: "Ouverture", desc: "Une salutation adaptée au destinataire." },
      { titre: "Corps du message", desc: "L'objet, les détails utiles, votre demande ou proposition." },
      { titre: "Fermeture", desc: "Une formule de politesse cohérente avec le registre choisi." },
    ],
    conseils: [
      "Visez 80 à 100 mots pour rester confortablement dans la fourchette demandée.",
      "Choisissez le bon registre : tutoiement entre amis, vouvoiement en contexte professionnel.",
      "Restez direct — une idée par phrase, sans détour inutile.",
      "Gardez une minute pour relire l'orthographe et la cohérence avant de rendre.",
    ],
    callout: null as string | null,
  },
  {
    numero: 2,
    titre: "Tâche 2 : Narration",
    meta: "120-150 mots · 20 minutes · Niveau B1 avancé - B2",
    callout:
      "Point important : cette tâche demande de raconter, pas de donner votre avis. Aucune argumentation n'est attendue ici — seulement un récit.",
    format:
      "Le plus souvent, il s'agit de rédiger un court article de blog ou un message racontant une expérience personnelle, un souvenir ou un événement vécu.",
    structure: [
      { titre: "Introduction", desc: "Le contexte de l'expérience : quand, où, pourquoi." },
      { titre: "Développement", desc: "Le récit détaillé, avec actions et ressenti." },
      { titre: "Conclusion", desc: "Ce que vous en retenez, avec un peu de recul." },
    ],
    conseils: [
      "Privilégiez les temps du passé (passé composé, imparfait) pour installer le récit.",
      "Ajoutez des détails concrets : ce que vous avez vu, entendu, ressenti sur le moment.",
      "Enchaînez vos idées avec des connecteurs temporels : d'abord, ensuite, plus tard, finalement.",
      "Nommez vos émotions clairement : j'étais surpris, ravi, déçu...",
    ],
  },
  {
    numero: 3,
    titre: "Tâche 3 : Texte argumentatif",
    meta: "120-180 mots, en 2 parties · 30 minutes · Niveau C1-C2",
    format:
      "La tâche la plus exigeante de l'épreuve. On vous soumet une question accompagnée de deux documents défendant des positions opposées, et vous devez construire un texte structuré en deux parties, avec un titre.",
    structure: [
      { titre: "Partie 1 — 40 à 60 mots", desc: "Résumé neutre des deux documents, relié par un connecteur d'opposition qui met en évidence leur désaccord." },
      { titre: "Partie 2 — 80 à 120 mots", desc: "Votre position personnelle, justifiée par des arguments, avec une conclusion." },
    ],
    conseils: [
      "Identifiez clairement la position de chaque document avant d'écrire.",
      "Donnez un titre qui reflète le débat.",
      "Restez neutre dans la partie 1 — votre avis n'a pas sa place avant la partie 2.",
      "Appuyez votre position sur un exemple concret, pas seulement une affirmation.",
    ],
    callout: null as string | null,
    connecteurs: {
      opposition: "Cependant, néanmoins, toutefois, en revanche, par contre, alors que, tandis que",
      opinion: "À mon avis, selon moi, je pense que, il me semble que, je suis convaincu(e) que",
    },
  },
];

const criteres = [
  { titre: "Cohérence", desc: "Organisation logique des idées et fluidité des transitions." },
  { titre: "Vocabulaire", desc: "Richesse et précision lexicale, peu de répétitions." },
  { titre: "Grammaire", desc: "Correction grammaticale et variété des structures." },
  { titre: "Respect de la consigne", desc: "Nombre de mots, format demandé, sujet traité en entier." },
];

export default function MethodologieExpressionEcritePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue to-blue-dark">
        <div className="max-w-[860px] mx-auto px-8 py-14">
          <Link
            href="/epreuve/expression-ecrite"
            className="inline-flex items-center gap-1.5 text-white/80 text-sm font-semibold mb-5 hover:text-white transition"
          >
            ← Retour à l&apos;Expression Écrite
          </Link>
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">
            Méthodologie et astuces
          </p>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight">
            Réussir l&apos;Expression Écrite du TCF Canada
          </h1>
          <p className="text-white/85 mt-4 max-w-[58ch]">
            Comprenez le format de chaque tâche, la structure attendue et les critères
            de correction avant de vous entraîner sur de vrais sujets.
          </p>
          <div className="flex gap-8 mt-8">
            {[
              { value: 3, label: "Tâches" },
              { value: 60, label: "Minutes" },
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
            Aucune minuterie stricte n&apos;impose une limite par tâche, mais respecter
            cette répartition est fortement conseillé pour terminer les 3 tâches dans
            le temps global imparti.
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

            {t.connecteurs && (
              <>
                <h3 className="font-bold text-sm uppercase tracking-wide text-ink-faint mb-3">
                  Connecteurs utiles
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-2xl bg-bg-deep p-4">
                    <p className="text-xs font-extrabold text-blue uppercase tracking-wide mb-1.5">
                      Opposition
                    </p>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {t.connecteurs.opposition}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-bg-deep p-4">
                    <p className="text-xs font-extrabold text-blue uppercase tracking-wide mb-1.5">
                      Opinion
                    </p>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {t.connecteurs.opinion}
                    </p>
                  </div>
                </div>
              </>
            )}

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
        <section className="rounded-3xl bg-ink-fixed text-white p-8 text-center">
          <div className="flex justify-center mb-3">
            <BookOpenIcon className="w-8 h-8 text-blue" />
          </div>
          <h2 className="font-extrabold text-xl mb-2">Prêt à vous entraîner ?</h2>
          <p className="text-ink-soft-fixed text-sm mb-6 max-w-[46ch] mx-auto">
            Mettez ces conseils en pratique avec nos combinaisons de sujets basées sur
            des situations réelles.
          </p>
          <Link
            href="/epreuve/expression-ecrite#sujets"
            className="inline-flex items-center gap-2 rounded-full bg-blue text-white font-bold text-sm px-6 py-3 hover:bg-blue-dark transition"
          >
            Voir les sujets d&apos;actualité
            <ArrowRightIcon />
          </Link>
        </section>
      </div>
    </>
  );
}
