"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  PencilIcon,
  MicIcon,
  BookOpenIcon,
  HeadphonesIcon,
  ClipboardCheckIcon,
} from "@/components/icons";

const links = [
  { href: "/", label: "Accueil", Icon: HomeIcon },
  { href: "/epreuve/expression-ecrite", label: "Expression écrite", Icon: PencilIcon },
  { href: "/epreuve/expression-orale", label: "Expression orale", Icon: MicIcon },
  { href: "/epreuve/comprehension-ecrite", label: "Compréhension écrite", Icon: BookOpenIcon },
  { href: "/epreuve/comprehension-orale", label: "Compréhension orale", Icon: HeadphonesIcon },
];

const examenBlanc = { href: "/examen-blanc", label: "Examen blanc", Icon: ClipboardCheckIcon };

export function SecondaryNav() {
  const pathname = usePathname();

  return (
    <div className="border-b border-line bg-surface">
      <div className="max-w-[1180px] mx-auto px-8 flex items-center gap-1.5 overflow-x-auto">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center gap-2 px-4 py-3.5 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${
                active
                  ? "text-blue border-blue bg-blue-tint"
                  : "text-ink-soft border-transparent hover:text-blue hover:bg-blue-tint"
              }`}
            >
              <l.Icon className="w-4 h-4 shrink-0 text-blue" />
              {l.label}
            </Link>
          );
        })}
        <Link
          href={examenBlanc.href}
          className={`ml-auto flex items-center gap-2 px-4 py-3.5 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${
            pathname === examenBlanc.href
              ? "text-fuchsia-ink border-fuchsia bg-fuchsia-tint"
              : "text-fuchsia-ink border-transparent hover:bg-fuchsia-tint"
          }`}
        >
          <examenBlanc.Icon className="w-4 h-4 shrink-0" />
          {examenBlanc.label}
        </Link>
      </div>
    </div>
  );
}
