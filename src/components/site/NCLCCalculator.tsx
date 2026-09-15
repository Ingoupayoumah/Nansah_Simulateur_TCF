"use client";

import { useMemo, useState } from "react";
import {
  HeadphonesIcon,
  BookOpenIcon,
  MicIcon,
  PencilIcon,
  CheckCircleIcon,
  CertificateIcon,
  LightbulbIcon,
} from "@/components/icons";

// Calculateur 100% front-end — aucune requête réseau, aucune base de données.
// Le barème utilisé est le même que celui du tableau d'équivalence NCLC plus haut
// (donné à titre indicatif, à valider avec le barème officiel en vigueur).
const LEVELS: { level: string; rank: number; ce: [number, number]; ee: [number, number]; co: [number, number]; eo: [number, number] }[] = [
  { level: "10+", rank: 10, ce: [549, 699], ee: [16, 20], co: [549, 699], eo: [16, 20] },
  { level: "9", rank: 9, ce: [524, 548], ee: [14, 15], co: [523, 548], eo: [14, 15] },
  { level: "8", rank: 8, ce: [499, 523], ee: [12, 13], co: [503, 522], eo: [12, 13] },
  { level: "7", rank: 7, ce: [453, 498], ee: [10, 11], co: [458, 502], eo: [10, 11] },
  { level: "6", rank: 6, ce: [406, 452], ee: [7, 9], co: [398, 457], eo: [7, 9] },
  { level: "5", rank: 5, ce: [375, 405], ee: [6, 6], co: [369, 397], eo: [6, 6] },
  { level: "4", rank: 4, ce: [342, 374], ee: [4, 5], co: [331, 368], eo: [4, 5] },
];

type Skill = "co" | "ce" | "eo" | "ee";

function levelFor(score: number, skill: Skill): { level: string; rank: number } {
  for (const row of LEVELS) {
    const [min, max] = row[skill];
    if (score >= min && score <= max) return { level: row.level, rank: row.rank };
  }
  return { level: "< 4", rank: 3 };
}

const skillMeta: Record<Skill, { label: string; Icon: typeof HeadphonesIcon; placeholder: string; max: number }> = {
  co: { label: "Compréhension Orale", Icon: HeadphonesIcon, placeholder: "331-699", max: 699 },
  ce: { label: "Compréhension Écrite", Icon: BookOpenIcon, placeholder: "342-699", max: 699 },
  eo: { label: "Expression Orale", Icon: MicIcon, placeholder: "4-20", max: 20 },
  ee: { label: "Expression Écrite", Icon: PencilIcon, placeholder: "4-20", max: 20 },
};

const tips: Record<Skill, string> = {
  ce: "Travaillez la compréhension écrite : repérez d'abord le type de texte pour anticiper le vocabulaire attendu.",
  co: "Travaillez la compréhension orale : à l'examen, l'enregistrement n'est joué qu'une seule fois — entraînez-vous dans ces conditions.",
  ee: "Travaillez l'expression écrite : structurez chaque tâche selon son barème avant de rédiger.",
  eo: "Travaillez l'expression orale : structurez votre avis en 2 ou 3 arguments illustrés d'exemples concrets.",
};

function toneFor(rank: number) {
  if (rank >= 9) return "bg-green-deco text-white";
  if (rank >= 7) return "bg-blue text-white";
  if (rank >= 4) return "bg-ink-fixed text-ink";
  return "bg-line text-ink";
}

export function NCLCCalculator() {
  const [scores, setScores] = useState<Record<Skill, string>>({
    co: "",
    ce: "",
    eo: "",
    ee: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    const entries = (Object.keys(skillMeta) as Skill[]).map((skill) => {
      const raw = Number(scores[skill]);
      const valid = scores[skill] !== "" && !Number.isNaN(raw) && raw >= 0;
      const clamped = valid ? Math.min(raw, skillMeta[skill].max) : 0;
      const { level, rank } = valid ? levelFor(clamped, skill) : { level: "—", rank: 0 };
      return { skill, level, rank, valid };
    });
    return entries;
  }, [scores]);

  const allValid = results.every((r) => r.valid);
  const weakestRank = allValid ? Math.min(...results.map((r) => r.rank)) : null;
  const weakest = allValid ? results.filter((r) => r.rank === weakestRank) : [];

  function handleChange(skill: Skill, value: string) {
    setScores((s) => ({ ...s, [skill]: value }));
    setSubmitted(false);
  }

  return (
    <section className="max-w-[1180px] mx-auto px-8 py-20">
      <div className="text-center max-w-[60ch] mx-auto mb-10">
        <span className="inline-flex items-center gap-2 bg-bg-deep text-ink-soft text-xs font-bold uppercase px-3 py-1.5 rounded-full mb-4">
          <CertificateIcon className="w-3.5 h-3.5" />
          Outil gratuit
        </span>
        <h2 className="text-3xl font-extrabold">Calculer votre niveau NCLC</h2>
        <p className="mt-3 text-ink-soft">
          Entrez vos scores TCF Canada pour connaître instantanément votre niveau NCLC par
          compétence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-3xl border border-line bg-surface p-6 sm:p-7"
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            {(Object.keys(skillMeta) as Skill[]).map((skill) => {
              const meta = skillMeta[skill];
              return (
                <div key={skill} className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm font-bold" htmlFor={`nclc-${skill}`}>
                    <meta.Icon className="w-4 h-4 text-blue" />
                    {meta.label}
                  </label>
                  <input
                    id={`nclc-${skill}`}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder={meta.placeholder}
                    value={scores[skill]}
                    onChange={(e) =>
                      handleChange(skill, e.target.value.replace(/[^0-9]/g, ""))
                    }
                    className="rounded-xl border border-line bg-bg-deep px-4 py-3 text-sm font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue text-white font-bold text-sm px-5 py-3.5 hover:bg-blue-dark transition-colors"
          >
            <CheckCircleIcon className="w-4 h-4" />
            Calculer mon niveau
          </button>
        </form>

        <div className="rounded-3xl border border-line bg-bg-deep p-6 sm:p-7 min-h-[280px] flex flex-col justify-center">
          {!submitted || !allValid ? (
            <div className="text-center text-ink-faint text-sm font-semibold flex flex-col items-center gap-3">
              <CertificateIcon className="w-8 h-8" />
              {submitted && !allValid
                ? "Remplissez les 4 scores pour voir vos niveaux NCLC."
                : "Entrez vos scores pour voir vos niveaux NCLC."}
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {results.map((r) => (
                  <div key={r.skill} className="rounded-xl bg-surface p-3.5 flex items-center justify-between">
                    <span className="text-xs font-bold text-ink-soft">
                      {skillMeta[r.skill].label}
                    </span>
                    <span
                      className={`text-xs font-extrabold rounded-lg px-2.5 py-1 shrink-0 ${toneFor(r.rank)}`}
                    >
                      NCLC {r.level}
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-surface p-4 mb-4">
                <p className="text-xs font-bold uppercase tracking-wide text-ink-faint mb-1">
                  Niveau global retenu (le plus bas des 4 compétences)
                </p>
                <p className="text-lg font-extrabold text-blue">
                  NCLC {weakest[0]?.level}
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                {weakest.map((w) => (
                  <p
                    key={w.skill}
                    className="flex gap-2 text-sm text-ink-soft font-medium leading-relaxed"
                  >
                    <LightbulbIcon className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    {tips[w.skill]}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
