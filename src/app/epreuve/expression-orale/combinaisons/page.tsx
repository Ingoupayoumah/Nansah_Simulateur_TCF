import Link from "next/link";
import { LayersIcon, StarIcon } from "@/components/icons";
import { AnneeMoisSelector } from "@/components/site/AnneeMoisSelector";
import { prisma } from "@/lib/prisma";
import { pairEOCombinaisons } from "@/lib/eoCombinaisons";

// Idem : contenu issu de Postgres, jamais figé au build.
export const dynamic = "force-dynamic";

const taches = [
  { numero: 1, titre: "Tâche 1", detail: "Entretien dirigé (2 min)", tone: "bg-blue" },
  { numero: 2, titre: "Tâche 2", detail: "Interaction préparée (5 min 30)", tone: "bg-green" },
  { numero: 3, titre: "Tâche 3", detail: "Expression spontanée (4 min 30)", tone: "bg-fuchsia" },
];

export default async function CombinaisonsExpressionOralePage() {
  const sujets = await prisma.sujet.findMany({
    where: { epreuve: "EO", status: "publie", tacheNumber: { in: [2, 3] } },
    orderBy: [{ year: "asc" }, { month: "asc" }, { partieNumber: "asc" }, { order: "asc" }],
    select: {
      id: true,
      year: true,
      month: true,
      partieNumber: true,
      tacheNumber: true,
      order: true,
      consigne: true,
      reponseModele: true,
    },
  });
  const byMonth = new Map<string, typeof sujets>();
  for (const s of sujets) {
    const key = `${s.year}-${s.month}`;
    if (!byMonth.has(key)) byMonth.set(key, []);
    byMonth.get(key)!.push(s);
  }
  const data = Array.from(byMonth.entries()).map(([key, rows]) => {
    const [year, month] = key.split("-").map(Number);
    return { year, month, count: pairEOCombinaisons(rows).length };
  });

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue to-blue-dark">
        <div className="max-w-[860px] mx-auto px-8 py-14 text-center">
          <Link
            href="/epreuve/expression-orale"
            className="flex items-center justify-center gap-1.5 text-white/80 text-sm font-semibold mb-5 hover:text-white transition"
          >
            ← Retour à l&apos;Expression Orale
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white text-sm font-bold px-4 py-2 mb-5">
            <LayersIcon className="w-4 h-4" />
            Expression Orale
          </span>
          <h1 className="text-white font-extrabold text-4xl leading-tight">
            Combinaisons d&apos;Entraînement
          </h1>
          <p className="text-white/85 mt-4 max-w-[58ch] mx-auto">
            Chaque combinaison regroupe les 3 tâches complètes de l&apos;expression
            orale : entretien dirigé, interaction avec préparation et expression
            spontanée.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-fuchsia text-white font-bold text-sm px-6 py-3 mt-7 hover:opacity-90 transition"
          >
            <StarIcon className="w-4 h-4" />
            Mes Favoris
          </button>
        </div>
      </section>

      {/* QU'EST-CE QU'UNE COMBINAISON */}
      <section className="max-w-[860px] mx-auto px-8 -mt-px">
        <div className="rounded-3xl bg-blue-tint p-6 sm:p-7 -translate-y-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <LayersIcon className="w-4.5 h-4.5 text-blue" />
            <h2 className="font-extrabold">Qu&apos;est-ce qu&apos;une combinaison ?</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {taches.map((t) => (
              <div
                key={t.numero}
                className="flex items-center gap-3 rounded-2xl bg-surface border border-line p-3.5"
              >
                <span
                  className={`w-7 h-7 rounded-full ${t.tone} text-white flex items-center justify-center font-extrabold text-xs shrink-0`}
                >
                  {t.numero}
                </span>
                <div>
                  <p className="font-bold text-sm leading-tight">{t.titre}</p>
                  <p className="text-ink-faint text-xs font-semibold">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTION ANNEE + GRILLE DES MOIS */}
      <AnneeMoisSelector
        basePath="/epreuve/expression-orale/combinaisons"
        data={data}
        unitLabel="combinaisons"
      />
    </>
  );
}
