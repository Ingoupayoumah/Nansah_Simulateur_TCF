// Script d'import ponctuel — sujets Expression Orale (Tâche 2 & 3) fournis
// par l'utilisateur (fichier .json personnel, contenu original de l'utilisateur).
// Nettoie les artefacts d'export (résidus de streaming) avant import.
import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

const prisma = new PrismaClient();

const SOURCE = "C:\\Users\\DELL\\Downloads\\sujets_expression_orale_tcf_canada.json";

const MOIS_MAP = {
  janvier: 1, février: 2, fevrier: 2, mars: 3, avril: 4, mai: 5, juin: 6,
  juillet: 7, août: 8, aout: 8, septembre: 9, octobre: 10, novembre: 11, décembre: 12, decembre: 12,
};

function parseMoisLabel(label) {
  const m = label.trim().toLowerCase().match(/^([a-zéû]+)\s+(\d{4})$/i);
  if (!m) return null;
  const moisNum = MOIS_MAP[m[1]];
  if (!moisNum) return null;
  return { month: moisNum, year: parseInt(m[2], 10) };
}

// Corrections manuelles pour les libellés corrompus repérés lors du diagnostic
const MOIS_OVERRIDES = {
  36: { month: 2, year: 2026, ok: true }, // "Partie 1" -> Février 2026 (confirmé via une partie soeur)
  37: { month: 3, year: 2026, ok: true }, // "mars 2026" -> Mars 2026 (juste la casse à corriger)
  // 40-43 : aucune trace récupérable du vrai mois dans les données —
  // hypothèse de continuité séquentielle (Juin/Juillet/Août/Septembre 2026),
  // importés en status "brouillon" (invisibles publiquement) en attendant confirmation.
  40: { month: 6, year: 2026, ok: false },
  41: { month: 7, year: 2026, ok: false },
  42: { month: 8, year: 2026, ok: false },
  43: { month: 9, year: 2026, ok: false },
};

function stripArtifact(text) {
  if (!text) return text;
  const artifactRe = /[0-9a-f]{1,4}:T[0-9a-f]+,/;
  const idx = text.search(artifactRe);
  return idx === -1 ? text.trim() : text.slice(0, idx).trim();
}

function titreFromSujet(sujet) {
  const clean = sujet.replace(/\s+/g, " ").trim();
  return clean.length > 90 ? clean.slice(0, 87) + "..." : clean;
}

async function main() {
  let raw = readFileSync(SOURCE, "utf8");
  // Ligne parasite repérée lors du diagnostic (fragment orphelin, casse le JSON)
  raw = raw
    .split("\n")
    .filter((line) => line.trim() !== '2023",')
    .join("\n");

  const data = JSON.parse(raw);
  console.log("Mois trouvés dans le fichier:", data.mois.length);

  const rows = [];
  let skippedNoMonth = 0;

  data.mois.forEach((moisEntry, idx) => {
    let resolved = parseMoisLabel(moisEntry.mois);
    let ok = true;
    if (!resolved) {
      const override = MOIS_OVERRIDES[idx];
      if (override) {
        resolved = { month: override.month, year: override.year };
        ok = override.ok;
      }
    }
    if (!resolved) {
      console.log(`  [ignoré] index ${idx} "${moisEntry.mois}" — mois non résolu`);
      skippedNoMonth += moisEntry.parties.reduce((n, p) => n + p.sujets.length, 0);
      return;
    }

    moisEntry.parties.forEach((partie) => {
      partie.sujets.forEach((s, order) => {
        const consigne = stripArtifact(s.sujet);
        const correction = stripArtifact(s.correction || "");
        if (!consigne) return;
        rows.push({
          epreuve: "EO",
          tacheNumber: s.tache,
          titreInterne: titreFromSujet(consigne),
          consigne,
          reponseModele: correction || null,
          month: resolved.month,
          year: resolved.year,
          partieNumber: partie.jour ?? null,
          status: ok ? "publie" : "brouillon",
          accessLevel: resolved.year === 2023 && resolved.month === 1 ? "free" : "premium",
          order,
        });
      });
    });
  });

  console.log("Lignes prêtes à insérer:", rows.length);
  console.log("Sujets ignorés (mois non résolu):", skippedNoMonth);

  const BATCH = 500;
  let inserted = 0;
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH);
    const res = await prisma.sujet.createMany({ data: batch });
    inserted += res.count;
    console.log(`  ...${inserted}/${rows.length}`);
  }

  console.log("Import terminé. Total inséré:", inserted);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
