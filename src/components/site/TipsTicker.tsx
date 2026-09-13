"use client";

import { useEffect, useState } from "react";
import { LightbulbIcon } from "@/components/icons";

const tips = [
  "Expression Écrite — Tâche 3 : résumez toujours les deux documents avant de donner votre avis personnel.",
  "Expression Orale — Tâche 2 : posez au moins 3 questions différentes pendant le dialogue.",
  "Compréhension Orale : l'enregistrement n'est joué qu'une seule fois — lisez les questions avant qu'il démarre.",
  "Compréhension Écrite : repérez d'abord le type de texte pour anticiper le vocabulaire attendu.",
  "Expression Orale — Tâche 3 : structurez votre avis en 2 ou 3 arguments, chacun illustré par un exemple.",
  "Expression Écrite — Tâche 2 : c'est de la narration, pas une opinion — racontez, ne justifiez pas.",
];

const INTERVAL_MS = 4500;

export function TipsTicker() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % tips.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line bg-bg-deep px-5 py-4">
      <span className="w-9 h-9 rounded-full bg-blue-tint text-blue flex items-center justify-center shrink-0">
        <LightbulbIcon className="w-4.5 h-4.5" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-ink-faint mb-1">
          Astuce
        </p>
        <div className="grid">
          {tips.map((tip, i) => (
            <p
              key={i}
              aria-hidden={i !== active}
              className={`[grid-area:1/1] text-sm font-semibold text-ink motion-safe:transition-all motion-safe:duration-500 ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-1.5 pointer-events-none"
              }`}
            >
              {tip}
            </p>
          ))}
        </div>
      </div>
      <div className="hidden sm:flex gap-1.5 shrink-0" role="presentation">
        {tips.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full motion-safe:transition-all motion-safe:duration-500 ${
              i === active ? "w-5 bg-blue" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
