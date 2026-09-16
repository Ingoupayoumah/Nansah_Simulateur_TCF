"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarIcon, TagIcon, ChevronRightIcon } from "@/components/icons";

const ANNEES = [2026, 2025, 2024];

const MOIS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

// Nombre de combinaisons par mois — placeholder en attendant le vrai contenu.
function combinaisonsPlaceholder(index: number) {
  return 4 + ((index * 7) % 12);
}

export function CombinaisonsAnneeSelector() {
  const [annee, setAnnee] = useState(ANNEES[0]);

  return (
    <section className="bg-bg-deep -mt-8 pt-10 pb-16">
      <div className="max-w-[860px] mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <CalendarIcon className="w-5 h-5 text-blue" />
          <h2 className="font-extrabold text-xl">Sélectionnez une année</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {ANNEES.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAnnee(a)}
              className={`rounded-2xl font-extrabold text-lg px-10 py-5 transition ${
                a === annee
                  ? "bg-blue text-white hover:bg-blue-dark"
                  : "bg-surface border border-line text-ink hover:border-blue hover:text-blue"
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MOIS.map((mois, i) => (
            <Link
              key={mois}
              href={`/epreuve/expression-ecrite/combinaisons/${annee}/${mois.toLowerCase()}`}
              className="group text-left rounded-2xl border border-line bg-surface p-5 hover:border-blue hover:shadow-md transition"
            >
              <span className="w-11 h-11 rounded-xl bg-blue flex items-center justify-center text-white mb-4">
                <CalendarIcon className="w-5 h-5" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-tint text-green text-xs font-bold px-2.5 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green" />
                DISPONIBLE
              </span>
              <h3 className="font-extrabold text-lg group-hover:text-blue transition-colors">
                {mois} {annee}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="inline-flex items-center gap-1.5 text-ink-faint text-sm font-semibold">
                  <TagIcon className="w-4 h-4" />
                  {combinaisonsPlaceholder(i)} combinaisons
                </span>
                <ChevronRightIcon className="w-4 h-4 text-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
