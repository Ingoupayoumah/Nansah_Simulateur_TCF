"use client";

import { useState } from "react";
import Link from "next/link";
import { LayersIcon, PlayIcon, ChevronDownIcon, EyeIcon } from "@/components/icons";
import { ReadAloudButton } from "@/components/site/ReadAloudButton";

export type Tache = {
  numero: 1 | 2 | 3;
  titreInterne: string;
  consigne: string;
  documentsJson: { doc1: string; doc2: string } | null;
  reponseModele: string | null;
  longueurMin: number | null;
  longueurMax: number | null;
};

const TACHE_META: Record<number, { tone: string; tint: string; duree: string }> = {
  1: { tone: "bg-blue", tint: "bg-blue-tint", duree: "10-15 min" },
  2: { tone: "bg-green", tint: "bg-green-tint", duree: "15-20 min" },
  3: { tone: "bg-fuchsia", tint: "bg-fuchsia-tint", duree: "20-30 min" },
};

function TacheBloc({ tache }: { tache: Tache }) {
  const [open, setOpen] = useState(false);
  const meta = TACHE_META[tache.numero];
  const mots =
    tache.longueurMin && tache.longueurMax
      ? `${tache.longueurMin}-${tache.longueurMax} mots`
      : null;

  return (
    <div className={`rounded-2xl border border-line ${meta.tint} p-5 sm:p-6`}>
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`w-8 h-8 rounded-full ${meta.tone} text-white flex items-center justify-center font-extrabold text-sm shrink-0`}
        >
          {tache.numero}
        </span>
        <div>
          <h3 className="font-extrabold leading-tight">
            Tâche {tache.numero}{" "}
            <span className="text-ink-faint font-semibold">· {tache.titreInterne}</span>
          </h3>
          <div className="flex gap-2 mt-1.5">
            {mots && (
              <span className="text-xs font-semibold text-ink-soft bg-surface px-2.5 py-1 rounded-full">
                {mots}
              </span>
            )}
            <span className="text-xs font-semibold text-ink-soft bg-surface px-2.5 py-1 rounded-full">
              {meta.duree}
            </span>
          </div>
        </div>
      </div>

      {tache.documentsJson ? (
        <div>
          <p className="font-extrabold text-blue mb-3">{tache.consigne}</p>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-surface border border-line p-4">
              <p className="text-ink-soft leading-relaxed whitespace-pre-line">
                {tache.documentsJson.doc1}
              </p>
            </div>
            <div className="rounded-xl bg-surface border border-line p-4">
              <p className="text-ink-soft leading-relaxed whitespace-pre-line">
                {tache.documentsJson.doc2}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-ink-soft leading-relaxed whitespace-pre-line">{tache.consigne}</p>
      )}

      {tache.reponseModele && (
        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-green text-white font-bold text-sm px-4 py-2 hover:opacity-90 transition"
        >
          <EyeIcon className="w-4 h-4" />
          {open ? "Masquer la correction" : "Voir la correction"}
        </button>
      )}

      {open && tache.reponseModele && (
        <div className="mt-4 rounded-xl bg-surface border border-line p-4">
          <div className="flex justify-end mb-3">
            <ReadAloudButton text={tache.reponseModele} />
          </div>
          <p className="text-ink-soft leading-relaxed whitespace-pre-line">
            {tache.reponseModele}
          </p>
        </div>
      )}
    </div>
  );
}

export function CombinaisonCard({ numero, taches }: { numero: number; taches: Tache[] }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="rounded-3xl border border-line overflow-hidden bg-surface">
      <div className="bg-gradient-to-r from-blue to-blue-dark px-6 py-5 flex items-center gap-4">
        <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
          <LayersIcon className="w-5 h-5" />
        </span>
        <h2 className="text-white font-extrabold text-lg flex-1">Combinaison {numero}</h2>
        <Link
          href="/examen-blanc"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-blue-dark font-bold text-sm px-4 py-2 hover:opacity-90 transition"
        >
          <PlayIcon className="w-3.5 h-3.5" />
          Simulateur
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-label={expanded ? "Réduire la combinaison" : "Développer la combinaison"}
          className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition shrink-0"
        >
          <ChevronDownIcon className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>

      {expanded && (
        <div className="p-5 sm:p-6 flex flex-col gap-4">
          {taches.map((t) => (
            <TacheBloc key={t.numero} tache={t} />
          ))}
        </div>
      )}
    </div>
  );
}
