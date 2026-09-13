"use client";

import { useEffect, useState } from "react";

type Variant = {
  eyebrow: string;
  line1: string;
  line2: string;
  sub: string;
};

// Trois angles de vente pour le même produit — inspirer, résoudre une peur,
// vendre la technologie. On alterne pour tester ce qui accroche le plus
// selon le visiteur, sans jamais changer les CTA en dessous.
const variants: Variant[] = [
  {
    eyebrow: "+25 000 candidats déjà entraînés",
    line1: "Le score que vous visez",
    line2: "est à portée de préparation.",
    sub: "Chaque simulation vous rapproche un peu plus du niveau que vous devez atteindre au TCF.",
  },
  {
    eyebrow: "Fini les surprises le jour J",
    line1: "Vous ne savez pas",
    line2: "à quoi ressemble vraiment l’épreuve ?",
    sub: "Nos simulateurs reproduisent le timing et le barème exacts du TCF officiel — pour ne plus jamais être pris au dépourvu.",
  },
  {
    eyebrow: "Correction assistée par IA",
    line1: "Une IA qui évalue votre français",
    line2: "comme un examinateur officiel.",
    sub: "Nos simulateurs analysent votre expression écrite et orale en temps réel, avec un retour détaillé après chaque tentative.",
  },
];

const INTERVAL_MS = 5500;

export function HeroRotator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % variants.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="grid">
        {variants.map((v, i) => (
          <div
            key={i}
            aria-hidden={i !== active}
            className={`[grid-area:1/1] motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-[cubic-bezier(.16,1,.3,1)] ${
              i === active
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-blue mb-4">
              {v.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.04]">
              <span className="block">{v.line1}</span>
              <span className="block text-blue">{v.line2}</span>
            </h1>
            <p className="mt-4 max-w-[46ch] text-ink-soft text-base">{v.sub}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-6" role="presentation">
        {variants.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full motion-safe:transition-all motion-safe:duration-500 ${
              i === active ? "w-6 bg-blue" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
