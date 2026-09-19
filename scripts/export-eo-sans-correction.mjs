// Inventaire des sujets d'Expression Orale (Tâche 2 et 3) sans correction/exemple
// de réponse, avec année, mois et numéro de combinaison identiques à ceux affichés
// sur le site (même logique d'appariement : src/lib/eoCombinaisons.ts). Sert de
// base de travail pour un futur agent de rédaction de corrections.
import { mkdirSync, writeFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";
import { pairEOCombinaisons } from "../src/lib/eoCombinaisons.ts";

const prisma = new PrismaClient();
const MOIS = ["", "janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

const sujets = await prisma.sujet.findMany({
  where: { epreuve: "EO", status: "publie", tacheNumber: { in: [2, 3] } },
  orderBy: [{ year: "asc" }, { month: "asc" }, { partieNumber: "asc" }, { order: "asc" }],
  select: { id: true, year: true, month: true, partieNumber: true, tacheNumber: true, order: true, consigne: true, reponseModele: true },
});

const byMonth = new Map();
for (const s of sujets) {
  const key = `${s.year}-${s.month}`;
  if (!byMonth.has(key)) byMonth.set(key, []);
  byMonth.get(key).push(s);
}

const manquants = [];
let totalSujets = 0;
for (const rows of byMonth.values()) {
  const { year, month } = rows[0];
  for (const c of pairEOCombinaisons(rows)) {
    for (const [tache, s] of [[2, c.tache2], [3, c.tache3]]) {
      if (!s) continue;
      totalSujets++;
      if (s.reponseModele && s.reponseModele.trim() !== "") continue;
      manquants.push({
        annee: year,
        mois: MOIS[month],
        moisNumero: month,
        combinaison: c.numero,
        tache,
        sujetId: s.id,
        consigne: s.consigne,
      });
    }
  }
}

mkdirSync("data", { recursive: true });
writeFileSync("data/eo-sujets-sans-correction.json", JSON.stringify(manquants, null, 2), "utf-8");

const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
const csv = [
  "annee,mois,combinaison,tache,sujetId,consigne",
  ...manquants.map((m) => [m.annee, m.mois, m.combinaison, m.tache, m.sujetId, esc(m.consigne)].join(",")),
].join("\n");
writeFileSync("data/eo-sujets-sans-correction.csv", "﻿" + csv, "utf-8");

const parMois = {};
for (const m of manquants) {
  const k = `${m.annee}-${String(m.moisNumero).padStart(2, "0")}`;
  parMois[k] = (parMois[k] ?? 0) + 1;
}
console.log(`Sujets EO (Tâche 2/3) publiés : ${totalSujets}`);
console.log(`Sans correction : ${manquants.length}`);
console.log("Par tâche :", { tache2: manquants.filter((m) => m.tache === 2).length, tache3: manquants.filter((m) => m.tache === 3).length });
console.log("Par mois :", JSON.stringify(parMois));
await prisma.$disconnect();
