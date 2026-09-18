// Migration ponctuelle : bascule les 10 combinaisons de Janvier 2024
// (jusque-là codées en dur dans la page) vers Postgres, avec le même
// modèle Sujet que l'Expression Orale (partieNumber = numéro de combinaison).
import { readFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SOURCE_PATH =
  "C:\\Users\\DELL\\AppData\\Local\\Temp\\claude\\D--Project\\f5815c8c-b87e-4b0a-b9ff-f980c1029d92\\scratchpad\\old_janvier_page.tsx";

const raw = readFileSync(SOURCE_PATH, "utf-8");
const start = raw.indexOf("const combinaisons = [");
const end = raw.indexOf("\n];", start) + 3;
const arraySource = raw.slice(start, end).replace("const combinaisons = ", "");
// eslint-disable-next-line no-eval
const combinaisons = eval(arraySource);

if (!Array.isArray(combinaisons) || combinaisons.length !== 10) {
  throw new Error(`Extraction inattendue : ${combinaisons?.length} combinaisons trouvées (10 attendues)`);
}

function parseMots(mots) {
  const m = mots.match(/(\d+)-(\d+)/);
  return m ? { min: parseInt(m[1], 10), max: parseInt(m[2], 10) } : { min: null, max: null };
}

const rows = [];
for (const c of combinaisons) {
  for (const t of c.taches) {
    const { min, max } = parseMots(t.mots);
    let consigne = t.consigne;
    let documentsJson = null;

    if (t.numero === 3) {
      const doc1Idx = t.consigne.indexOf("\n\nDocument 1 : ");
      const doc2Idx = t.consigne.indexOf("\n\nDocument 2 : ");
      if (doc1Idx === -1 || doc2Idx === -1) {
        throw new Error(`Combinaison ${c.numero} Tâche 3 : format Document 1/2 introuvable`);
      }
      consigne = t.consigne.slice(0, doc1Idx).trim();
      const doc1 = t.consigne.slice(doc1Idx + "\n\nDocument 1 : ".length, doc2Idx).trim();
      const doc2 = t.consigne.slice(doc2Idx + "\n\nDocument 2 : ".length).trim();
      documentsJson = { doc1, doc2 };
    }

    rows.push({
      epreuve: "EE",
      tacheNumber: t.numero,
      titreInterne: t.type,
      consigne,
      documentsJson,
      longueurMin: min,
      longueurMax: max,
      reponseModele: t.correction,
      month: 1,
      year: 2024,
      partieNumber: c.numero,
      status: "publie",
      accessLevel: "free",
      order: t.numero,
    });
  }
}

console.log(`${rows.length} sujets à insérer (attendu : 30)`);

await prisma.sujet.deleteMany({ where: { epreuve: "EE", year: 2024, month: 1 } });
await prisma.sujet.createMany({ data: rows });

const count = await prisma.sujet.count({ where: { epreuve: "EE", year: 2024, month: 1 } });
console.log(`Vérification en base : ${count} sujets EE pour janvier 2024`);

await prisma.$disconnect();
