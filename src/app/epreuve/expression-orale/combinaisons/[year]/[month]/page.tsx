import Link from "next/link";

export default async function CombinaisonsMoisPage({
  params,
}: {
  params: Promise<{ year: string; month: string }>;
}) {
  const { year, month } = await params;
  const moisLabel = month.charAt(0).toUpperCase() + month.slice(1);

  return (
    <section className="max-w-[860px] mx-auto px-8 py-14 text-center">
      <Link
        href="/epreuve/expression-orale/combinaisons"
        className="inline-flex items-center gap-1.5 text-blue text-sm font-semibold mb-5 hover:underline"
      >
        ← Toutes les années
      </Link>
      <h1 className="font-extrabold text-3xl mb-2">
        Combinaisons — {moisLabel} {year}
      </h1>
      <p className="text-ink-soft">
        La liste des combinaisons de ce mois arrive bientôt.
      </p>
    </section>
  );
}
