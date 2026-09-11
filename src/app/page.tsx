export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue to-fuchsia text-white font-extrabold text-sm mb-6">
          T
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink mb-4">
          Nansah — projet initialisé
        </h1>
        <p className="text-ink-soft text-base leading-relaxed">
          Next.js, TypeScript, Tailwind, Prisma et Clerk sont installés. La
          palette (noir / bleu / fuchsia / vert) et la police Plus Jakarta
          Sans sont branchées comme tokens Tailwind — prêts pour construire
          les premiers écrans réels.
        </p>
      </div>
    </main>
  );
}
