import Link from "next/link";
import { CheckIcon, CheckCircleIcon, StarIcon } from "@/components/icons";

export type PackFeature = {
  text: string;
  kind?: "check" | "bonus" | "new";
};

type PackCardProps = {
  nom: string;
  duree: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;
  prix: string;
  populaire?: boolean;
  features: PackFeature[];
};

function FeatureIcon({ kind }: { kind: PackFeature["kind"] }) {
  if (kind === "bonus") return <CheckCircleIcon className="text-blue shrink-0 mt-0.5" />;
  if (kind === "new") return <StarIcon className="text-fuchsia shrink-0 mt-1" />;
  return <CheckIcon className="text-green shrink-0 mt-0.5" />;
}

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
    <div className="group rounded-2xl overflow-hidden bg-surface border border-line hover:-translate-y-1 hover:shadow-lg transition flex flex-col">
      <div className={`relative p-5 pb-6 ${accent}`}>
        {populaire && (
          <span className="absolute top-4 right-4 bg-white/25 text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full">
            Populaire
          </span>
        )}
        <span className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
          <Icon className="w-5 h-5" />
        </span>
        <h3 className="text-white font-extrabold text-xl leading-snug">{nom}</h3>
        <p className="text-white/80 text-xs font-semibold mt-1">{duree}</p>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <ul className="flex flex-col gap-2.5 mb-5 text-sm text-ink-soft font-medium">
          {features.map((f) => (
            <li key={f.text} className="flex gap-2.5 items-start">
              <FeatureIcon kind={f.kind} />
              {f.text}
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
