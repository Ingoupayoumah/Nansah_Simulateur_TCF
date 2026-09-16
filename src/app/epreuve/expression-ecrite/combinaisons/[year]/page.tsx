import Link from "next/link";
import { CalendarIcon, TagIcon, ChevronRightIcon } from "@/components/icons";

const MOIS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

// Nombre de combinaisons par mois — placeholder en attendant le vrai contenu.
function combinaisonsPlaceholder(index: number) {
  return 4 + ((index * 7) % 12);
}

export default async function CombinaisonsAnneePage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  return (
    <section className="max-w-[1180px] mx-auto px-8 py-14">
      <Link
        href="/epreuve/expression-ecrite/combinaisons"
        className="inline-flex items-center gap-1.5 text-blue text-sm font-semibold mb-6 hover:underline"
      >
        ← Toutes les années
      </Link>
      <h1 className="font-extrabold text-3xl text-center mb-10">
        Combinaisons de {year}
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {MOIS.map((mois, i) => (
          <Link
            key={mois}
            href={`/epreuve/expression-ecrite/combinaisons/${year}/${mois.toLowerCase()}`}
            className="group rounded-2xl border border-line bg-surface p-5 hover:border-blue hover:shadow-md transition"
          >
            <span className="w-11 h-11 rounded-xl bg-blue flex items-center justify-center text-white mb-4">
              <CalendarIcon className="w-5 h-5" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-tint text-green text-xs font-bold px-2.5 py-1 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green" />
              DISPONIBLE
            </span>
            <h2 className="font-extrabold text-lg group-hover:text-blue transition-colors">
              {mois} {year}
            </h2>
            <div className="flex items-center justify-between mt-2">
              <span className="inline-flex items-center gap-1.5 text-ink-faint text-sm font-semibold">
                <TagIcon className="w-4 h-4" />
                {combinaisonsPlaceholder(i)} combinaisons
              </span>
              <ChevronRightIcon className="w-4 h-4 text-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
