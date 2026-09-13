"use client";

import { useEffect, useState } from "react";

export function AnimatedNumber({
  value,
  duration = 1300,
  delay = 500,
}: {
  value: number;
  duration?: number;
  delay?: number;
}) {
  // Rendu initial = valeur finale (SSR + utilisateurs sans JS voient le bon chiffre).
  // L'effet ne fait que l'animer visuellement après le montage.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setDisplay(0);
    let raf: number;
    const start = performance.now() + delay;

    function tick(now: number) {
      const t = Math.min(Math.max((now - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, delay]);

  return <>{display}</>;
}
