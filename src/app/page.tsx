import Link from "next/link";
import { HeroRotator } from "@/components/site/HeroRotator";
import { TipsTicker } from "@/components/site/TipsTicker";
import { WhyChooseCarousel } from "@/components/site/WhyChooseCarousel";
import { PackCard, type PackFeature } from "@/components/site/PackCard";
import { TestimonialsMarquee } from "@/components/site/TestimonialsMarquee";
import { NCLCCalculator } from "@/components/site/NCLCCalculator";
import {
  CheckIcon,
  ArrowRightIcon,
  PlayIcon,
  GraduationCapIcon,
  CheckCircleIcon,
  PencilIcon,
  MicIcon,
  BookOpenIcon,
  HeadphonesIcon,
  CertificateIcon,
  CalendarIcon,
  InfinityIcon,
  MedalIcon,
  UsersIcon,
  TrendingUpIcon,
  CpuIcon,
  InfoCircleIcon,
} from "@/components/icons";

const epreuves = [
  {
    slug: "comprehension-orale",
    Icon: HeadphonesIcon,
    solid: "bg-blue",
    nom: "Compréhension Orale",
    desc: "Écoutez des enregistrements variés et répondez aux questions posées.",
    chips: ["39 questions", "35 minutes"],
  },
  {
    slug: "comprehension-ecrite",
    Icon: BookOpenIcon,
    solid: "bg-green-deco",
    nom: "Compréhension Écrite",
    desc: "Lisez des textes variés et répondez aux questions de compréhension.",
    chips: ["39 questions", "60 minutes"],
  },
  {
    slug: "expression-orale",
    Icon: MicIcon,
    solid: "bg-fuchsia",
    nom: "Expression Orale",
    desc: "Exprimez-vous à l'oral sur différentes mises en situation, comme à l'examen.",
    chips: ["3 tâches", "12 minutes"],
  },
  {
    slug: "expression-ecrite",
    Icon: PencilIcon,
    solid: "bg-blue",
    nom: "Expression Écrite",
    desc: "Rédigez des textes de différents types, du message court à l'argumentation.",
    chips: ["3 tâches", "60 minutes"],
  },
];

const featuresPlateforme: PackFeature[] = [
  { text: "Compréhension Écrite : tests d'entraînement en conditions réelles" },
  { text: "Compréhension Orale : tests d'entraînement en conditions réelles" },
  { text: "Expression Orale : sujets d'actualité et corrections" },
  { text: "Expression Écrite : sujets d'actualité et corrections" },
  { text: "Contenus conformes à la version 2026 de l'examen" },
  { text: "Bonus : accès illimité au simulateur d'expression écrite", kind: "bonus" },
  {
    text: "Nouveau : examen blanc illimité, toutes séries, avec attestation de niveau",
    kind: "new",
  },
];

const packsPlateforme = [
  {
    nom: "Bronze",
    duree: "Accès 1 semaine",
    Icon: MedalIcon,
    accent: "bg-green-deco",
    prix: "15",
    populaire: false,
    features: featuresPlateforme,
  },
  {
    nom: "Silver",
    duree: "Accès 1 mois",
    Icon: MedalIcon,
    accent: "bg-blue",
    prix: "25",
    populaire: true,
    features: featuresPlateforme,
  },
  {
    nom: "Gold",
    duree: "Accès 2 mois",
    Icon: MedalIcon,
    accent: "bg-fuchsia",
    prix: "39",
    populaire: false,
    features: featuresPlateforme,
  },
];

const featuresCoaching: PackFeature[] = [
  { text: "Réservation de créneau avec un préparateur" },
  { text: "Accès complet à la plateforme" },
  { text: "Suivi personnalisé" },
];

const packsCoaching = [
  {
    nom: "Essentiel",
    duree: "Accompagnement 2 semaines",
    Icon: UsersIcon,
    accent: "bg-ink-fixed",
    prix: "50",
    populaire: false,
    features: featuresCoaching,
  },
  {
    nom: "Intensif",
    duree: "Accompagnement 1 mois",
    Icon: UsersIcon,
    accent: "bg-blue-dark",
    prix: "80",
    populaire: true,
    features: featuresCoaching,
  },
  {
    nom: "Premium",
    duree: "Accompagnement 6 semaines",
    Icon: UsersIcon,
    accent: "bg-fuchsia",
    prix: "220",
    populaire: false,
    features: featuresCoaching,
  },
];

const trustStrip = [
  { Icon: BookOpenIcon, label: "Sujets officiels 2026" },
  { Icon: GraduationCapIcon, label: "Formateurs experts" },
  { Icon: CalendarIcon, label: "Programme flexible" },
  { Icon: InfinityIcon, label: "Accès à vie" },
  { Icon: CertificateIcon, label: "Attestation fournie" },
];

// Barème indicatif — à valider avec le barème officiel en vigueur avant publication.
const nclcTable = [
  { nclc: "10+", ce: "549-699", ee: "16-20", co: "549-699", eo: "16-20", tone: "bg-green-deco" },
  { nclc: "9", ce: "524-548", ee: "14-15", co: "523-548", eo: "14-15", tone: "bg-green-deco" },
  { nclc: "8", ce: "499-523", ee: "12-13", co: "503-522", eo: "12-13", tone: "bg-blue" },
  { nclc: "7", ce: "453-498", ee: "10-11", co: "458-502", eo: "10-11", tone: "bg-blue" },
  { nclc: "6", ce: "406-452", ee: "7-9", co: "398-457", eo: "7-9", tone: "bg-ink-fixed" },
  { nclc: "5", ce: "375-405", ee: "6", co: "369-397", eo: "6", tone: "bg-ink-fixed" },
  { nclc: "4", ce: "342-374", ee: "4-5", co: "331-368", eo: "4-5", tone: "bg-ink-fixed" },
];

const avantages = [
  {
    Icon: TrendingUpIcon,
    nom: "Suivi des progrès",
    desc: "Visualisez votre évolution et repérez immédiatement vos points à travailler.",
  },
  {
    Icon: CpuIcon,
    nom: "Correction par IA",
    desc: "L'intelligence artificielle évalue vos productions écrites et vous renvoie un retour détaillé.",
  },
  {
    Icon: CalendarIcon,
    nom: "Contenu 2026",
    desc: "Toutes nos ressources suivent les dernières évolutions de l'examen officiel.",
  },
  {
    Icon: UsersIcon,
    nom: "Suivi personnalisé",
    desc: "Des formateurs expérimentés vous accompagnent tout au long de votre préparation.",
  },
  {
    Icon: CertificateIcon,
    nom: "Fidèle à l'examen",
    desc: "Chaque simulation respecte le format, le temps et le barème du TCF officiel.",
  },
  {
    Icon: InfinityIcon,
    nom: "Disponible 24/7",
    desc: "Entraînez-vous quand vous voulez, où que vous soyez, à votre rythme.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-10">
        <div
          aria-hidden
          className="absolute -inset-x-[10%] -top-[20%] h-[120%] blur-[64px] opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(34% 44% at 8% 22%, #3346E0, transparent 72%), radial-gradient(38% 46% at 92% 10%, #FF7AAC, transparent 72%), radial-gradient(42% 50% at 55% 95%, #3DDABE, transparent 72%)",
          }}
        />
        <div className="relative max-w-[1180px] mx-auto px-8 grid md:grid-cols-[1.05fr_.95fr] gap-13 items-center">
          <div>
            <HeroRotator />
            <div className="flex flex-wrap gap-5 mt-6 text-sm font-semibold text-ink-soft">
              {["Formateurs certifiés", "Contenu conforme 2026", "Accès 24/7"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-2">
                    <CheckIcon className="text-green shrink-0" />
                    {t}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <Link
                href="/inscription"
                className="inline-flex items-center gap-2 rounded-full bg-blue text-white font-bold text-sm px-6 py-3.5 shadow-md hover:bg-blue-dark hover:-translate-y-0.5 transition"
              >
                Commencer gratuitement <ArrowRightIcon />
              </Link>
              <a
                href="#epreuves"
                className="inline-flex items-center gap-2 rounded-full bg-surface border border-line text-ink font-bold text-sm px-6 py-3.5 hover:border-ink-faint hover:-translate-y-0.5 transition"
              >
                <PlayIcon /> Voir une simulation
              </a>
            </div>
          </div>

          <div className="relative h-[360px] hidden sm:block">
            <div className="anim-hero-ring absolute top-0 right-5 w-[250px] h-[250px] rounded-full border-2 border-blue opacity-25" />
            <div className="anim-hero-card absolute top-4 left-2 w-[250px] rounded-2xl bg-surface shadow-lg p-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-2xl font-extrabold">
                  512<span className="text-sm text-ink-faint font-semibold"> /699</span>
                </span>
                <span className="text-xs font-bold text-blue bg-blue-tint px-2.5 py-1 rounded-full">
                  NCLC 9
                </span>
              </div>
              <p className="text-xs text-ink-faint font-semibold mb-2.5">
                Compréhension orale
              </p>
              <div className="h-1.5 rounded-full bg-line overflow-hidden">
                <div className="h-full w-[73%] rounded-full bg-green-deco" />
              </div>
            </div>
            <div className="anim-hero-timer absolute top-[200px] left-16 bg-surface rounded-2xl px-5 py-4 shadow-lg text-center">
              <div className="text-2xl font-extrabold text-blue">04:52</div>
              <div className="text-[10px] text-ink-faint uppercase tracking-wide font-bold mt-1">
                Temps restant
              </div>
            </div>
            <div className="anim-hero-badge-a absolute rounded-full bg-surface shadow-lg pl-3 pr-4.5 py-2.5 flex items-center gap-2.5 top-0.5 right-[-8px]">
              <span className="w-8 h-8 rounded-full bg-green-deco flex items-center justify-center text-white shrink-0">
                <GraduationCapIcon className="w-4.5 h-4.5" />
              </span>
              <div>
                <div className="font-extrabold text-sm leading-tight">25 000+</div>
                <div className="text-[11px] text-ink-faint font-semibold">Candidats</div>
              </div>
            </div>
            <div className="anim-hero-badge-b absolute rounded-full bg-surface shadow-lg pl-3 pr-4.5 py-2.5 flex items-center gap-2.5 bottom-3.5 right-6">
              <span className="w-8 h-8 rounded-full bg-green-deco flex items-center justify-center text-white shrink-0">
                <CheckCircleIcon className="w-4.5 h-4.5" />
              </span>
              <div>
                <div className="font-extrabold text-sm leading-tight">95%</div>
                <div className="text-[11px] text-ink-faint font-semibold">Réussite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-t border-b border-line py-8">
        <div className="max-w-[1180px] mx-auto px-8 flex flex-wrap justify-between gap-5">
          {trustStrip.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-tint text-blue flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <span className="font-bold text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LES 4 EPREUVES */}
      <section id="epreuves" className="max-w-[1180px] mx-auto px-8 py-20">
        <div className="text-center max-w-[60ch] mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-blue mb-2">
            Ce que vous allez maîtriser
          </p>
          <h2 className="text-3xl font-extrabold">Les 4 épreuves du TCF Canada</h2>
          <p className="mt-3 text-ink-soft">
            Un entraînement dédié pour chaque compétence, dans les mêmes
            conditions que l&apos;examen officiel.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {epreuves.map((e) => (
            <Link
              key={e.slug}
              href={`/epreuve/${e.slug}`}
              className="group rounded-2xl overflow-hidden bg-surface border border-line hover:-translate-y-1 hover:shadow-lg transition flex flex-col"
            >
              <div className={`p-5 pb-6 ${e.solid}`}>
                <span className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                  <e.Icon className="w-5 h-5" />
                </span>
                <h3 className="text-white font-extrabold text-xl leading-snug">{e.nom}</h3>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-sm text-ink-soft mb-4">{e.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {e.chips.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-semibold text-ink-soft bg-bg-deep px-2.5 py-1 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-blue font-bold text-sm">
                  Commencer
                  <ArrowRightIcon className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <TipsTicker />
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-[1180px] mx-auto px-8 py-16 grid md:grid-cols-2 gap-14 items-stretch">
        <WhyChooseCarousel />
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue mb-2">
            Pourquoi nous choisir
          </p>
          <h2 className="text-3xl font-extrabold max-w-[14ch]">
            Entraînez-vous exactement comme le jour J
          </h2>
          <p className="mt-4 text-ink-soft max-w-[44ch]">
            Notre plateforme reproduit le timing, le barème et
            l&apos;enchaînement réels des 4 épreuves du TCF Canada — pour que
            le jour de l&apos;examen, rien ne soit une surprise.
          </p>
          <ul className="flex flex-col gap-3 mt-5">
            {[
              "Simulateurs en conditions réelles, chronométrés",
              "Correction assistée par IA pour l'expression écrite",
              "Sujets d'actualité renouvelés chaque mois",
            ].map((t) => (
              <li key={t} className="flex gap-2.5 font-semibold text-sm items-start">
                <CheckIcon className="text-green shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            href="#epreuves"
            className="inline-flex items-center gap-2 mt-7 rounded-full bg-blue text-white font-bold text-sm px-6 py-3.5 hover:bg-blue-dark transition"
          >
            Découvrir les épreuves <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* NOS OFFRES */}
      <section id="offres" className="bg-bg-deep py-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center max-w-[60ch] mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-blue mb-2">
              Nos offres
            </p>
            <h2 className="text-3xl font-extrabold">
              Choisissez votre rythme de préparation
            </h2>
          </div>

          <div className="mb-16">
            <div className="mb-6">
              <h3 className="text-lg font-extrabold">Auto-formation</h3>
              <p className="text-sm text-ink-faint font-semibold mt-1">
                Accès à la plateforme et aux simulateurs, en autonomie.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {packsPlateforme.map((p) => (
                <PackCard key={p.nom} {...p} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-lg font-extrabold">Coaching avec préparateur</h3>
              <p className="text-sm text-ink-faint font-semibold mt-1">
                Le même accès plateforme, accompagné de créneaux réservés avec un préparateur TCF.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {packsCoaching.map((p) => (
                <PackCard key={p.nom} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TABLEAU NCLC */}
      <section className="max-w-[1180px] mx-auto px-8 py-20">
        <div className="rounded-3xl overflow-hidden border border-line shadow-lg">
          <div className="bg-blue text-white text-center px-8 py-8">
            <div className="flex items-center justify-center gap-2 text-xl font-extrabold">
              <InfoCircleIcon />
              Tableau d&apos;équivalence NCLC
            </div>
            <p className="text-white/85 text-sm mt-2">
              Convertissez vos scores TCF Canada en niveau NCLC grâce à ce barème de référence.
            </p>
          </div>
          <div className="overflow-x-auto bg-surface">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-bg-deep text-left">
                  <th className="px-6 py-3.5 font-bold">NCLC</th>
                  <th className="px-6 py-3.5 font-bold">Comp. Écrite</th>
                  <th className="px-6 py-3.5 font-bold">Exp. Écrite</th>
                  <th className="px-6 py-3.5 font-bold">Comp. Orale</th>
                  <th className="px-6 py-3.5 font-bold">Exp. Orale</th>
                </tr>
              </thead>
              <tbody>
                {nclcTable.map((row) => (
                  <tr key={row.nclc} className="border-t border-line">
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-block text-white text-xs font-extrabold rounded-lg px-2.5 py-1 ${row.tone}`}
                      >
                        {row.nclc}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-ink-soft font-semibold">{row.ce}</td>
                    <td className="px-6 py-3.5 text-ink-soft font-semibold">{row.ee}</td>
                    <td className="px-6 py-3.5 text-ink-soft font-semibold">{row.co}</td>
                    <td className="px-6 py-3.5 text-ink-soft font-semibold">{row.eo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="bg-surface px-6 pb-6 text-xs text-ink-faint">
            Barème donné à titre indicatif — vérifiez toujours vos résultats avec le barème
            officiel en vigueur le jour de votre examen.
          </p>
        </div>
      </section>

      {/* CALCULATEUR NCLC */}
      <NCLCCalculator />

      {/* NOS AVANTAGES */}
      <section className="max-w-[1180px] mx-auto px-8 py-20">
        <div className="text-center max-w-[60ch] mx-auto mb-12">
          <h2 className="text-3xl font-extrabold">Nos avantages</h2>
          <p className="mt-3 text-ink-soft">
            Tout ce qu&apos;il faut pour aborder votre TCF Canada avec confiance.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {avantages.map((a) => (
            <div key={a.nom} className="rounded-2xl bg-bg-deep p-6">
              <span className="w-12 h-12 rounded-full bg-blue flex items-center justify-center text-white mb-4">
                <a.Icon className="w-5 h-5" />
              </span>
              <h3 className="font-extrabold mb-1.5">{a.nom}</h3>
              <p className="text-sm text-ink-soft">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREUVE SOCIALE */}
      <TestimonialsMarquee />

      {/* CTA BANNER */}
      <section className="max-w-[1180px] mx-auto px-8 pb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-ink-fixed text-white p-10 md:p-14 grid md:grid-cols-[1fr_.8fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold max-w-[15ch] text-white">
              Prêt à passer votre TCF avec confiance ?
            </h2>
            <p className="mt-3.5 text-ink-soft-fixed max-w-[40ch] text-[15px]">
              Rejoignez des milliers de candidats qui se préparent chaque
              mois avec des sujets à jour et des simulations fidèles à
              l&apos;examen officiel.
            </p>
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-blue text-white font-bold text-sm px-6 py-3.5 hover:bg-blue-dark transition"
            >
              Commencer maintenant <ArrowRightIcon />
            </Link>
          </div>
          <div className="relative h-[200px] hidden md:block">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
                background: "linear-gradient(135deg, #3346E0, #FF7AAC)",
              }}
            />
            <div className="absolute top-7 right-2.5 bg-surface text-ink rounded-2xl px-4.5 py-3.5 shadow-lg flex items-center gap-2.5">
              <span className="w-8.5 h-8.5 rounded-lg bg-fuchsia-tint text-fuchsia-ink flex items-center justify-center shrink-0">
                <MicIcon className="w-4.5 h-4.5" />
              </span>
              <div>
                <div className="text-xs font-bold">Expression Orale</div>
                <div className="text-[11px] text-ink-faint font-semibold">
                  3 tâches · 12 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
