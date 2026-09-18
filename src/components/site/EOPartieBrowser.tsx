"use client";

import { useState } from "react";
import { CalendarIcon, MicIcon, ChevronDownIcon, CheckCircleIcon } from "@/components/icons";

type Sujet = { id: string; consigne: string; reponseModele: string | null };
export type Partie = {
  numero: number;
  taches: { 2: Sujet[]; 3: Sujet[] };
};

const TACHES = [
  { numero: 1, label: "Tâche 1", sousTitre: "Entretien dirigé" },
  { numero: 2, label: "Tâche 2", sousTitre: "Interaction préparée" },
  { numero: 3, label: "Tâche 3", sousTitre: "Expression spontanée" },
] as const;

function SujetDetail({ sujet }: { sujet: Sujet }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-line bg-surface overflow-hidden">
      <div className="p-5">
        <p className="text-ink-soft leading-relaxed whitespace-pre-line">{sujet.consigne}</p>
        {sujet.reponseModele && (
          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-4 inline-flex items-center gap-2 text-blue font-bold text-sm"
          >
            {open ? "Masquer l'exemple de réponse" : "Voir un exemple de réponse"}
            <ChevronDownIcon className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {open && sujet.reponseModele && (
        <div className="bg-green-tint border-t border-line px-5 py-5">
          <div className="flex items-center gap-2 text-green font-bold text-xs uppercase tracking-wide mb-3">
            <CheckCircleIcon className="w-4 h-4" />
            Exemple de réponse
          </div>
          <p className="text-ink-soft leading-relaxed whitespace-pre-line">{sujet.reponseModele}</p>
        </div>
      )}
    </div>
  );
}

export function EOPartieBrowser({ parties }: { parties: Partie[] }) {
  const [partieIdx, setPartieIdx] = useState(0);
  const [tache, setTache] = useState<1 | 2 | 3>(2);

  const partie = parties[partieIdx];

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <CalendarIcon className="w-5 h-5 text-blue shrink-0" />
        <h2 className="font-extrabold text-lg shrink-0">Sélectionner une partie</h2>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {parties.map((p, i) => (
            <button
              key={p.numero}
              type="button"
              onClick={() => setPartieIdx(i)}
              className={`shrink-0 rounded-2xl border-2 px-5 py-2.5 text-left transition-colors ${
                i === partieIdx
                  ? "bg-blue-tint border-blue"
                  : "bg-surface border-line hover:border-blue"
              }`}
            >
              <p className="font-extrabold text-sm text-blue">Partie {p.numero}</p>
              <p className="text-ink-faint text-xs font-semibold">
                {p.taches[2].length + p.taches[3].length} sujets
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 rounded-2xl border border-line bg-surface p-1.5 mb-6">
        {TACHES.map((t) => (
          <button
            key={t.numero}
            type="button"
            onClick={() => setTache(t.numero)}
            className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition-colors ${
              tache === t.numero
                ? "bg-blue text-white"
                : "text-ink-soft hover:bg-blue-tint hover:text-blue"
            }`}
          >
            <MicIcon className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">
              {t.label} <span className="font-semibold opacity-80">· {t.sousTitre}</span>
            </span>
            <span className="sm:hidden">{t.label}</span>
          </button>
        ))}
      </div>

      {tache === 1 ? (
        <div className="rounded-2xl bg-blue-tint p-6 text-center">
          <p className="font-bold text-ink mb-1.5">Rien à préparer pour la Tâche 1</p>
          <p className="text-ink-soft text-sm max-w-[46ch] mx-auto">
            L&apos;examinateur vous pose directement des questions personnelles, sans
            document ni préparation — voir la{" "}
            <a href="/epreuve/expression-orale/methodologie" className="text-blue font-bold hover:underline">
              méthodologie
            </a>{" "}
            pour vous entraîner sur ce format.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {partie.taches[tache].map((s) => (
            <SujetDetail key={s.id} sujet={s} />
          ))}
        </div>
      )}
    </div>
  );
}
