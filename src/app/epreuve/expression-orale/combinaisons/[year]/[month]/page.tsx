import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CombinaisonCard, type Tache } from "@/components/site/CombinaisonCard";
import { pairEOCombinaisons } from "@/lib/eoCombinaisons";
import { InfoCircleIcon } from "@/components/icons";

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

const EO_TACHE_META: Record<2 | 3, { typeLabel: string; duree: string }> = {
  2: { typeLabel: "Interaction préparée", duree: "5 min 30 (avec préparation)" },
  3: { typeLabel: "Expression spontanée", duree: "4 min 30 (sans préparation)" },
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

  const sujets = monthNum
    ? await prisma.sujet.findMany({
        where: {
          epreuve: "EO",
          status: "publie",
          year: yearNum,
          month: monthNum,
          tacheNumber: { in: [2, 3] },
        },
        orderBy: [{ partieNumber: "asc" }, { order: "asc" }],
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
      })
    : [];

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
        <p className="text-ink-soft">Aucune combinaison disponible pour ce mois pour le moment.</p>
      </section>
    );
  }

  const combinaisons = pairEOCombinaisons(sujets).map((c) => {
    const taches: Tache[] = [];
    if (c.tache2) {
      taches.push({
        numero: 2,
        ...EO_TACHE_META[2],
        consigne: c.tache2.consigne,
        documentsJson: null,
        reponseModele: c.tache2.reponseModele,
        longueurMin: null,
        longueurMax: null,
      });
    }
    if (c.tache3) {
      taches.push({
        numero: 3,
        ...EO_TACHE_META[3],
        consigne: c.tache3.consigne,
        documentsJson: null,
        reponseModele: c.tache3.reponseModele,
        longueurMin: null,
        longueurMax: null,
      });
    }
    return { numero: c.numero, taches };
  });

  return (
    <div className="max-w-[860px] mx-auto px-8 py-14">
      <Link
        href="/epreuve/expression-orale/combinaisons"
        className="inline-flex items-center gap-1.5 text-blue text-sm font-semibold mb-5 hover:underline"
      >
        ← Toutes les années
      </Link>
      <h1 className="font-extrabold text-3xl mb-2">
        Combinaisons — {moisLabel} {year}
      </h1>
      <p className="text-ink-soft mb-6">
        {combinaisons.length} combinaisons pour vous entraîner en conditions réelles.
      </p>

      <div className="rounded-2xl bg-blue-tint border border-line p-4 flex items-start gap-3 mb-8">
        <InfoCircleIcon className="w-5 h-5 text-blue shrink-0 mt-0.5" />
        <p className="text-ink-soft text-sm leading-relaxed">
          <strong className="text-ink">Tâche 1 — rien à préparer :</strong> l&apos;examinateur
          vous pose directement des questions personnelles, sans document ni préparation. Voir la{" "}
          <Link href="/epreuve/expression-orale/methodologie" className="text-blue font-bold hover:underline">
            méthodologie
          </Link>{" "}
          pour vous entraîner sur ce format.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {combinaisons.map((c) => (
          <CombinaisonCard key={c.numero} numero={c.numero} taches={c.taches} defaultExpanded={false} />
        ))}
      </div>
    </div>
  );
}
