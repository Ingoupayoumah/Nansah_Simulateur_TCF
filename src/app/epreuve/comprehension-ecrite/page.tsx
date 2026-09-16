import Link from "next/link";
import {
  BookOpenIcon,
  LightbulbIcon,
  TrendingUpIcon,
  ClipboardCheckIcon,
  GraduationCapIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { AnimatedNumber } from "@/components/site/AnimatedNumber";

// Séries de démonstration — nombre et accès à confirmer une fois le vrai
// contenu chargé en base (voir modèle Serie).
const series = [
  { numero: 1, questions: 39, accessLevel: "free" as const },
  { numero: 2, questions: 39, accessLevel: "premium" as const },
  { numero: 3, questions: 39, accessLevel: "premium" as const },
  { numero: 4, questions: 39, accessLevel: "premium" as const },
  { numero: 5, questions: 39, accessLevel: "premium" as const },
  { numero: 6, questions: 39, accessLevel: "premium" as const },
];

const atouts = [
  {
    Icon: BookOpenIcon,
    titre: "Des textes variés",
    desc: "Annonces, courriels, articles et extraits littéraires, du niveau A1 au niveau C2.",
  },
  {
    Icon: LightbulbIcon,
    titre: "Des réflexes de lecture",
    desc: "Repérez rapidement l'information utile sans tout relire à chaque question.",
  },
  {
    Icon: GraduationCapIcon,
    titre: "Du vocabulaire en situation",
    desc: "Élargissez votre lexique directement à partir de textes authentiques, pas de listes hors contexte.",
  },
  {
    Icon: ClipboardCheckIcon,
    titre: "Des conditions d'examen",
    desc: "Des séries chronométrées, avec une difficulté croissante comme le jour J.",
  },
];

export default function ComprehensionEcritePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue to-blue-dark">
        <div className="max-w-[1180px] mx-auto px-8 py-14 grid lg:grid-cols-[1fr_320px] gap-10 items-center">
          <div>
            <h1 className="text-white font-extrabold text-4xl leading-tight">
              Compréhension Écrite
              <br />
              TCF Canada
            </h1>
            <p className="text-white/85 mt-4 max-w-[54ch]">
              Décryptez des textes de tous horizons et répondez avec précision aux 39
              questions à choix multiple de l&apos;épreuve, dans le temps imparti.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/epreuve/comprehension-ecrite/methodologie"
                className="inline-flex items-center gap-2 rounded-full bg-white text-blue-dark font-bold text-sm px-5 py-3 hover:bg-white/90 transition"
              >
                <LightbulbIcon className="w-4 h-4" />
                Méthodologie et Astuces
              </Link>
              <Link
                href="#series"
                className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white font-bold text-sm px-5 py-3 hover:bg-white/30 transition"
              >
                <BookOpenIcon className="w-4 h-4" />
                Nos séries d&apos;entraînement
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
              <span className="font-extrabold">— /699</span>
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

      {/* SERIES */}
      <section id="series" className="max-w-[1180px] mx-auto px-8 pt-14 pb-4 scroll-mt-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-11 h-11 rounded-xl bg-blue flex items-center justify-center text-white shrink-0">
            <BookOpenIcon className="w-5 h-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue">
              Entraînement
            </p>
            <h2 className="text-2xl font-extrabold">Nos séries de compréhension écrite</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {series.map((s) => (
            <div
              key={s.numero}
              className="rounded-2xl border border-line bg-surface p-5 hover:border-blue hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="w-11 h-11 rounded-xl bg-blue flex items-center justify-center text-white">
                  <BookOpenIcon className="w-5 h-5" />
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    s.accessLevel === "free"
                      ? "bg-green-tint text-green"
                      : "bg-blue-tint text-blue"
                  }`}
                >
                  {s.accessLevel === "free" ? "Gratuit" : "Premium"}
                </span>
              </div>
              <h3 className="font-extrabold text-lg">Série {s.numero}</h3>
              <p className="text-ink-faint text-sm font-semibold mt-1">
                {s.questions} questions · 60 min
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CE QUE VOUS ALLEZ MAITRISER */}
      <section className="max-w-[1180px] mx-auto px-8 py-14">
        <h2 className="text-2xl font-extrabold text-center mb-10">
          Ce que vous allez maîtriser
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {atouts.map((a) => (
            <div key={a.titre} className="flex gap-4 rounded-2xl border border-line bg-surface p-5">
              <span className="w-11 h-11 rounded-xl bg-blue-tint text-blue flex items-center justify-center shrink-0">
                <a.Icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-extrabold mb-1">{a.titre}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMAT DE L'EPREUVE */}
      <section className="bg-bg-deep py-14">
        <div className="max-w-[860px] mx-auto px-8 text-center">
          <h2 className="text-2xl font-extrabold mb-8">Format de l&apos;épreuve</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { value: 60, suffix: " min", label: "Durée" },
              { value: 39, suffix: "", label: "Questions" },
              { value: 699, suffix: "", label: "Points max" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-surface p-6">
                <div className="text-blue font-extrabold text-3xl">
                  <AnimatedNumber value={s.value} duration={900} delay={200} />
                  {s.suffix}
                </div>
                <div className="text-ink-soft text-sm font-semibold mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue to-blue-dark py-16 text-center">
        <div className="max-w-[600px] mx-auto px-8">
          <h2 className="text-white font-extrabold text-2xl mb-3">
            Prêt à progresser en compréhension écrite ?
          </h2>
          <p className="text-white/85 mb-7">
            Accédez à toutes nos séries et suivez votre évolution avec un abonnement
            Nansah.
          </p>
          <Link
            href="/#offres"
            className="inline-flex items-center gap-2 rounded-full bg-white text-blue-dark font-bold text-sm px-6 py-3 hover:bg-white/90 transition"
          >
            Voir les formules d&apos;abonnement
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
