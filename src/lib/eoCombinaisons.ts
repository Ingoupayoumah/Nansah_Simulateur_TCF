// L'Expression Orale n'a pas de vraie Tâche 1 (voir la note affichée sur la
// page mois) et ses données réelles sont regroupées en "Parties" contenant
// chacune plusieurs sujets de Tâche 2 et de Tâche 3, pas nécessairement en
// nombre égal. Pour afficher la même organisation "Combinaison N" que
// l'Expression Écrite sans jamais inventer de contenu, on apparie les
// sujets de Tâche 2 et de Tâche 3 par position au sein de chaque partie
// (numérotation continue sur le mois) ; quand une partie a plus de sujets
// d'une tâche que de l'autre, les sujets en surplus forment une
// combinaison partielle plutôt que d'être perdus.
export type EOSujetRow = {
  id: string;
  year: number;
  month: number;
  partieNumber: number | null;
  tacheNumber: number;
  order: number;
  consigne: string;
  reponseModele: string | null;
};

export type EOCombinaison = {
  numero: number;
  tache2: EOSujetRow | null;
  tache3: EOSujetRow | null;
};

export function pairEOCombinaisons(sujets: EOSujetRow[]): EOCombinaison[] {
  const parties = new Map<number, { t2: EOSujetRow[]; t3: EOSujetRow[] }>();
  for (const s of sujets) {
    const p = s.partieNumber ?? 0;
    if (!parties.has(p)) parties.set(p, { t2: [], t3: [] });
    const g = parties.get(p)!;
    if (s.tacheNumber === 2) g.t2.push(s);
    else if (s.tacheNumber === 3) g.t3.push(s);
  }
  for (const g of parties.values()) {
    g.t2.sort((a, b) => a.order - b.order);
    g.t3.sort((a, b) => a.order - b.order);
  }

  const partieNumbers = Array.from(parties.keys()).sort((a, b) => a - b);
  const combinaisons: EOCombinaison[] = [];
  let numero = 1;
  for (const p of partieNumbers) {
    const { t2, t3 } = parties.get(p)!;
    const max = Math.max(t2.length, t3.length);
    for (let i = 0; i < max; i++) {
      combinaisons.push({ numero: numero++, tache2: t2[i] ?? null, tache3: t3[i] ?? null });
    }
  }
  return combinaisons;
}
