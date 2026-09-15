export function AuthNotConfigured() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-24">
      <div className="max-w-md text-center border border-line rounded-2xl p-8 bg-surface">
        <h1 className="text-xl font-extrabold text-ink mb-3">
          Authentification pas encore configurée
        </h1>
        <p className="text-ink-soft text-sm leading-relaxed">
          Ajoute les variables <code className="font-mono">NEXT_PUBLIC_FIREBASE_*</code>{" "}
          dans <code className="font-mono">.env.local</code> (voir{" "}
          <code className="font-mono">.env.example</code>) pour activer la
          connexion.
        </p>
      </div>
    </div>
  );
}
