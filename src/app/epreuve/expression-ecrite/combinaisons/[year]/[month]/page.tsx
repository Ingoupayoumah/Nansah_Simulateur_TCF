import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CombinaisonCard, type Tache } from "@/components/site/CombinaisonCard";

// Toujours rendue à la demande — le contenu vient de Postgres et change
// indépendamment des déploiements, aucune pré-génération statique possible.
export const dynamic = "force-dynamic";

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

type Combinaison = { numero: number; taches: Tache[] };

export default async function CombinaisonsMoisPage({
  params,
}: {
  params: Promise<{ year: string; month: string }>;
}) {
  const { year, month } = await params;
  const monthNum = MOIS_NOMS[month.toLowerCase()];
  const yearNum = parseInt(year, 10);
  const moisLabel = month.charAt(0).toUpperCase() + month.slice(1);

  const sujets = monthNum
    ? await prisma.sujet.findMany({
        where: { epreuve: "EE", status: "publie", year: yearNum, month: monthNum },
        orderBy: [{ partieNumber: "asc" }, { tacheNumber: "asc" }],
      })
    : [];

  if (sujets.length === 0) {
    return (
      <section className="max-w-[860px] mx-auto px-8 py-14 text-center">
        <Link
          href="/epreuve/expression-ecrite/combinaisons"
          className="inline-flex items-center gap-1.5 text-blue text-sm font-semibold mb-5 hover:underline"
        >
          ← Toutes les années
        </Link>
        <h1 className="font-extrabold text-3xl mb-2">
          {moisLabel} {year}
        </h1>
        <p className="text-ink-soft">Aucune combinaison disponible pour ce mois pour le moment.</p>
      </section>
    );
  }

  const combinaisonsMap = new Map<number, Combinaison>();
  for (const s of sujets) {
    const numero = s.partieNumber ?? 0;
    if (!combinaisonsMap.has(numero)) combinaisonsMap.set(numero, { numero, taches: [] });
    combinaisonsMap.get(numero)!.taches.push({
      numero: s.tacheNumber as 1 | 2 | 3,
      titreInterne: s.titreInterne,
      consigne: s.consigne,
      documentsJson: s.documentsJson as { doc1: string; doc2: string } | null,
      reponseModele: s.reponseModele,
      longueurMin: s.longueurMin,
      longueurMax: s.longueurMax,
    });
  }
  const combinaisons = Array.from(combinaisonsMap.values()).sort((a, b) => a.numero - b.numero);

  return (
    <div className="max-w-[860px] mx-auto px-8 py-14">
      <Link
        href="/epreuve/expression-ecrite/combinaisons"
        className="inline-flex items-center gap-1.5 text-blue text-sm font-semibold mb-5 hover:underline"
      >
        ← Toutes les années
      </Link>
      <h1 className="font-extrabold text-3xl mb-2">
        Combinaisons — {moisLabel} {year}
      </h1>
      <p className="text-ink-soft mb-10">
        {combinaisons.length} combinaisons complètes (3 tâches chacune) pour vous
        entraîner en conditions réelles.
      </p>

      <div className="flex flex-col gap-6">
        {combinaisons.map((c) => (
          <CombinaisonCard key={c.numero} numero={c.numero} taches={c.taches} />
        ))}
      </div>
    </div>
  );
}
