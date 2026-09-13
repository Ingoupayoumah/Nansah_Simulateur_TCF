"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/etude-notes-laptop.jpg",
    alt: "Candidat prenant des notes tout en s'entraînant sur ordinateur",
    caption: "Préparez chaque épreuve avec méthode.",
  },
  {
    src: "/images/redaction-carnet.jpg",
    alt: "Candidat concentré en train d'écrire dans un carnet",
    caption: "Un entraînement quotidien, comme à l'examen.",
  },
  {
    src: "/images/concentration-ecran.jpg",
    alt: "Candidate concentrée devant son écran pendant une simulation",
    caption: "Concentration totale, résultats réels.",
  },
];

const INTERVAL_MS = 5000;

export function WhyChooseCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden shadow-lg">
      <div className="grid h-full">
        {slides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== active}
            className={`[grid-area:1/1] relative h-full motion-safe:transition-opacity motion-safe:duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="grid">
          {slides.map((s, i) => (
            <p
              key={s.src}
              aria-hidden={i !== active}
              className={`[grid-area:1/1] text-white font-extrabold text-xl leading-snug motion-safe:transition-all motion-safe:duration-500 ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1.5 pointer-events-none"
              }`}
            >
              {s.caption}
            </p>
          ))}
        </div>
        <div className="flex gap-1.5 mt-3" role="presentation">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full motion-safe:transition-all motion-safe:duration-500 ${
                i === active ? "w-6 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
