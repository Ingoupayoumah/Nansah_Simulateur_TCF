"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

async function openSession(idToken: string) {
  const res = await fetch("/api/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken }),
  });
  if (!res.ok) throw new Error("Impossible d'ouvrir la session.");
}

export function AuthForm({ mode }: { mode: "connexion" | "inscription" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function afterAuth(user: { getIdToken: () => Promise<string> }) {
    const idToken = await user.getIdToken();
    await openSession(idToken);
    router.push("/mon-compte");
    router.refresh();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!auth) return;
    setLoading(true);
    setError(null);
    try {
      const cred =
        mode === "inscription"
          ? await createUserWithEmailAndPassword(auth, email, password)
          : await signInWithEmailAndPassword(auth, email, password);
      await afterAuth(cred.user);
    } catch {
      setError(
        mode === "inscription"
          ? "Impossible de créer le compte — vérifiez l'email et le mot de passe (6 caractères minimum)."
          : "Email ou mot de passe incorrect."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    if (!auth) return;
    setLoading(true);
    setError(null);
    try {
      const cred = await signInWithPopup(auth, new GoogleAuthProvider());
      await afterAuth(cred.user);
    } catch {
      setError("La connexion avec Google a échoué. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-[400px] rounded-3xl border border-line bg-surface p-7 sm:p-8">
      <h1 className="text-xl font-extrabold mb-1">
        {mode === "inscription" ? "Créer un compte" : "Se connecter"}
      </h1>
      <p className="text-ink-soft text-sm mb-6">
        {mode === "inscription"
          ? "Accédez à vos simulateurs et à votre progression."
          : "Retrouvez vos simulateurs et votre progression."}
      </p>

      <button
        onClick={handleGoogle}
        disabled={loading}
        type="button"
        className="w-full flex items-center justify-center gap-2 rounded-full border border-line font-bold text-sm px-5 py-3 hover:bg-bg-deep transition disabled:opacity-50 mb-5"
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z" />
          <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.4 7.4 24 12 24z" />
          <path fill="#FBBC05" d="M5.4 14.4c-.2-.7-.4-1.4-.4-2.4s.1-1.6.4-2.4V6.5H1.4C.5 8.2 0 10.1 0 12s.5 3.8 1.4 5.5l4-3.1z" />
          <path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.7l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.6 1.4 6.5l4 3.1c.9-2.8 3.5-4.8 6.6-4.8z" />
        </svg>
        Continuer avec Google
      </button>

      <div className="flex items-center gap-3 mb-5">
        <span className="h-px flex-1 bg-line" />
        <span className="text-xs text-ink-faint font-semibold">ou</span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-line bg-bg-deep px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold" htmlFor="password">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border border-line bg-bg-deep px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>

        {error && <p className="text-sm text-fuchsia-ink font-semibold">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-blue text-white font-bold text-sm px-5 py-3 hover:bg-blue-dark transition disabled:opacity-50"
        >
          {loading
            ? "Un instant..."
            : mode === "inscription"
              ? "Créer mon compte"
              : "Se connecter"}
        </button>
      </form>

      <p className="text-sm text-ink-soft text-center mt-6">
        {mode === "inscription" ? (
          <>
            Déjà un compte ?{" "}
            <Link href="/connexion" className="text-blue font-bold">
              Se connecter
            </Link>
          </>
        ) : (
          <>
            Pas encore de compte ?{" "}
            <Link href="/inscription" className="text-blue font-bold">
              S&apos;inscrire
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
