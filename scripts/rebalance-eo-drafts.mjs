// Répartit équitablement les sujets EO en brouillon (Juin-Septembre 2026, dont
// le mois d'origine était illisible dans le fichier source) sur ces 4 mois.
// On déplace des parties entières (jamais des sujets isolés) en gardant l'ordre
// du fichier source, puis on les publie. Simulation par défaut : --apply pour écrire.
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const APPLY = process.argv.includes("--apply");
const YEAR = 2026;
const TARGET_MONTHS = [6, 7, 8, 9];

const drafts = await prisma.sujet.findMany({
  where: { epreuve: "EO", status: "brouillon", year: YEAR, month: { in: TARGET_MONTHS } },
  select: { id: true, month: true, partieNumber: true },
  orderBy: [{ month: "asc" }, { partieNumber: "asc" }],
});

const groups = new Map();
for (const s of drafts) {
  const key = `${s.month}-${s.partieNumber}`;
  if (!groups.has(key)) groups.set(key, { month: s.month, partie: s.partieNumber, ids: [] });
  groups.get(key).ids.push(s.id);
}
const ordered = Array.from(groups.values());
const perMonth = Math.ceil(ordered.length / TARGET_MONTHS.length);

console.log(`${drafts.length} sujets en brouillon, ${ordered.length} parties -> ${perMonth} parties par mois`);

const published = await prisma.sujet.findFirst({
  where: { epreuve: "EO", status: "publie" },
  select: { accessLevel: true },
});

const plan = ordered.map((g, i) => ({
  ...g,
  newMonth: TARGET_MONTHS[Math.floor(i / perMonth)],
  newPartie: (i % perMonth) + 1,
}));

const summary = new Map();
for (const p of plan) {
  summary.set(p.newMonth, (summary.get(p.newMonth) ?? 0) + p.ids.length);
}
console.log("Répartition cible (sujets par mois) :", Object.fromEntries(summary));

if (!APPLY) {
  console.log("Simulation seulement. Relancer avec --apply pour écrire.");
  await prisma.$disconnect();
  process.exit(0);
}

for (const p of plan) {
  await prisma.sujet.updateMany({
    where: { id: { in: p.ids } },
    data: {
      month: p.newMonth,
      partieNumber: p.newPartie,
      status: "publie",
      accessLevel: published?.accessLevel ?? "premium",
    },
  });
}
console.log("Appliqué.");
await prisma.$disconnect();
