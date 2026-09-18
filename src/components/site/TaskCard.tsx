"use client";

import { useState } from "react";
import { ChevronDownIcon, CheckCircleIcon } from "@/components/icons";
import { ReadAloudButton } from "@/components/site/ReadAloudButton";

export function TaskCard({
  numero,
  titre,
  type,
  mots,
  duree,
  consigne,
  correction,
}: {
  numero: number;
  titre: string;
  type: string;
  mots: string;
  duree: string;
  consigne: string;
  correction: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-line bg-surface overflow-hidden">
      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-full bg-blue text-white flex items-center justify-center font-extrabold text-sm shrink-0">
            {numero}
          </span>
          <div>
            <h3 className="font-extrabold text-lg leading-tight">
              {titre} <span className="text-ink-faint font-semibold">· {type}</span>
            </h3>
            <div className="flex gap-2 mt-1.5">
              <span className="text-xs font-semibold text-ink-soft bg-bg-deep px-2.5 py-1 rounded-full">
                {mots}
              </span>
              <span className="text-xs font-semibold text-ink-soft bg-bg-deep px-2.5 py-1 rounded-full">
                {duree}
              </span>
            </div>
          </div>
        </div>

        <p className="text-ink-soft leading-relaxed whitespace-pre-line">{consigne}</p>

        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-5 inline-flex items-center gap-2 text-blue font-bold text-sm"
        >
          {open ? "Masquer la correction" : "Voir la correction"}
          <ChevronDownIcon
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="bg-green-tint border-t border-line px-6 sm:px-7 py-6">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-green font-bold text-xs uppercase tracking-wide">
              <CheckCircleIcon className="w-4 h-4" />
              Correction proposée
            </div>
            <ReadAloudButton text={correction} />
          </div>
          <p className="text-ink-soft leading-relaxed whitespace-pre-line">{correction}</p>
        </div>
      )}
    </div>
  );
}
