import Link from "next/link";

export default async function CombinaisonsAnneePage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  return (
    <section className="max-w-[860px] mx-auto px-8 py-14 text-center">
      <Link
        href="/epreuve/expression-ecrite/combinaisons"
        className="inline-flex items-center gap-1.5 text-blue text-sm font-semibold mb-5 hover:underline"
      >
        ← Toutes les années
      </Link>
      <h1 className="font-extrabold text-3xl mb-2">Combinaisons {year}</h1>
      <p className="text-ink-soft">
        La liste des combinaisons pour {year} arrive bientôt.
      </p>
    </section>
  );
}
