import Link from "next/link";
import { CheckIcon } from "@/components/icons";

type PackCardProps = {
  nom: string;
  duree: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;
  prix: string;
  populaire?: boolean;
  features: string[];
};

export function PackCard({
  nom,
  duree,
  Icon,
  accent,
  prix,
  populaire,
  features,
}: PackCardProps) {
  return (
    <div
      className={`rounded-3xl bg-surface shadow-md overflow-hidden flex flex-col border transition hover:-translate-y-1 hover:shadow-lg ${
        populaire ? "border-blue ring-1 ring-blue" : "border-line"
      }`}
    >
      <div className="p-6 pb-5">
        <div className="flex items-start justify-between mb-8">
          <span
            className={`w-11 h-11 rounded-xl flex items-center justify-center text-white ${accent}`}
          >
            <Icon className="w-5 h-5" />
          </span>
          {populaire && (
            <span className="bg-blue text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full mt-1">
              Populaire
            </span>
          )}
        </div>
        <h4 className="text-lg font-extrabold">{nom}</h4>
        <p className="text-xs text-ink-faint font-semibold mt-0.5">{duree}</p>
      </div>
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <ul className="flex flex-col gap-2 mb-5 text-sm text-ink-soft font-semibold">
          {features.map((f) => (
            <li key={f} className="flex gap-2 items-start">
              <CheckIcon className="text-green shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-baseline gap-1 mb-4">
          <span className="text-2xl font-extrabold">{prix}</span>
          <span className="text-xs text-ink-faint font-bold">USD</span>
        </div>
        <Link
          href={`/tarification#${nom.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-center rounded-full font-bold text-sm px-5 py-2.5 bg-ink-fixed text-white transition-colors duration-300 hover:bg-blue"
        >
          S&apos;abonner
        </Link>
      </div>
    </div>
  );
}
