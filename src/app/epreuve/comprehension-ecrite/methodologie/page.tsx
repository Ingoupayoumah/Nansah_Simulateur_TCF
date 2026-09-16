import Link from "next/link";

export default function MethodologieComprehensionEcritePage() {
  return (
    <section className="max-w-[860px] mx-auto px-8 py-14 text-center">
      <Link
        href="/epreuve/comprehension-ecrite"
        className="inline-flex items-center gap-1.5 text-blue text-sm font-semibold mb-5 hover:underline"
      >
        ← Retour à la Compréhension Écrite
      </Link>
      <h1 className="font-extrabold text-3xl mb-2">
        Méthodologie et Astuces — Compréhension Écrite
      </h1>
      <p className="text-ink-soft">
        Cette page arrive bientôt — on veut vérifier le déroulement exact de
        l&apos;épreuve avant de la rédiger.
      </p>
    </section>
  );
}
