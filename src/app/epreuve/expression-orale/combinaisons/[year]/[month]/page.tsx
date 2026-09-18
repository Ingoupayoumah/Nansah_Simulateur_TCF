import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { EOPartieBrowser, type Partie } from "@/components/site/EOPartieBrowser";

const MOIS_NOMS: Record<string, number> = {
  janvier: 1,
  février: 2,
  mars: 3,
  avril: 4,
  mai: 5,
  juin: 6,
  juillet: 7,
  août: 8,
  septembre: 9,
  octobre: 10,
  novembre: 11,
  décembre: 12,
};

export default async function CombinaisonsMoisPage({
  params,
}: {
  params: Promise<{ year: string; month: string }>;
}) {
  const { year, month } = await params;
  const monthNum = MOIS_NOMS[month.toLowerCase()];
  const yearNum = parseInt(year, 10);
  const moisLabel = month.charAt(0).toUpperCase() + month.slice(1);

  if (!monthNum || Number.isNaN(yearNum)) notFound();

  const sujets = await prisma.sujet.findMany({
    where: { epreuve: "EO", status: "publie", year: yearNum, month: monthNum },
    orderBy: [{ partieNumber: "asc" }, { tacheNumber: "asc" }, { order: "asc" }],
  });

  if (sujets.length === 0) {
    return (
      <section className="max-w-[860px] mx-auto px-8 py-14 text-center">
        <Link
          href="/epreuve/expression-orale/combinaisons"
          className="inline-flex items-center gap-1.5 text-blue text-sm font-semibold mb-5 hover:underline"
        >
          ← Toutes les années
        </Link>
        <h1 className="font-extrabold text-3xl mb-2">
          {moisLabel} {year}
        </h1>
        <p className="text-ink-soft">Aucun sujet disponible pour ce mois pour le moment.</p>
      </section>
    );
  }

  const partiesMap = new Map<number, Partie>();
  for (const s of sujets) {
    const num = s.partieNumber ?? 0;
    if (!partiesMap.has(num)) {
      partiesMap.set(num, { numero: num, taches: { 2: [], 3: [] } });
    }
    const partie = partiesMap.get(num)!;
    if (s.tacheNumber === 2 || s.tacheNumber === 3) {
      partie.taches[s.tacheNumber].push({
        id: s.id,
        consigne: s.consigne,
        reponseModele: s.reponseModele,
      });
    }
  }
  const parties = Array.from(partiesMap.values()).sort((a, b) => a.numero - b.numero);
  const totalSujets = sujets.length;

  return (
    <>
      <section className="bg-gradient-to-br from-blue to-blue-dark">
        <div className="max-w-[1180px] mx-auto px-8 py-14 text-center">
          <Link
            href="/epreuve/expression-orale/combinaisons"
            className="flex items-center justify-center gap-1.5 text-white/80 text-sm font-semibold mb-5 hover:text-white transition"
          >
            ← Toutes les années
          </Link>
          <h1 className="text-white font-extrabold text-4xl leading-tight">
            {moisLabel} {year}
          </h1>
          <p className="text-white/85 mt-3 max-w-[58ch] mx-auto">
            Découvrez les sujets organisés par <strong>parties</strong> — {parties.length}{" "}
            parties, {totalSujets} sujets au total, pour vous entraîner efficacement.
          </p>
        </div>
      </section>

      <div className="max-w-[1180px] mx-auto px-8 py-10">
        <EOPartieBrowser parties={parties} />
      </div>
    </>
  );
}
