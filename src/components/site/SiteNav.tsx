import Link from "next/link";
import { SearchIcon } from "@/components/icons";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/#epreuves", label: "Épreuves" },
  { href: "/#offres", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <div className="sticky top-0 z-20 bg-bg/90 backdrop-blur border-b border-line">
      <div className="max-w-[1180px] mx-auto px-8 py-4 flex items-center gap-9">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg shrink-0">
          <span className="w-[30px] h-[30px] rounded-[9px] bg-gradient-to-br from-blue to-fuchsia text-white flex items-center justify-center text-sm font-extrabold">
            N
          </span>
          Nansah
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-ink-soft flex-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          <span className="w-9 h-9 rounded-full flex items-center justify-center text-ink-soft hover:bg-surface hover:text-ink">
            <SearchIcon />
          </span>
          <Link href="/connexion" className="text-sm font-semibold text-ink-soft hover:text-ink">
            Connexion
          </Link>
          <Link
            href="/inscription"
            className="rounded-full bg-blue text-white font-bold text-sm px-5 py-2.5 hover:bg-blue-dark transition-colors"
          >
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}
