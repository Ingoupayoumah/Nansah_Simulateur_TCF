import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { LogoutButton } from "@/components/site/LogoutButton";

export default async function MonComptePage() {
  const session = await getSession();
  if (!session) {
    redirect("/connexion");
  }

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center border border-line rounded-2xl p-8 bg-surface">
        <h1 className="text-xl font-extrabold text-ink mb-2">Mon compte</h1>
        <p className="text-ink-soft text-sm mb-6">
          Connecté en tant que{" "}
          <span className="font-semibold text-ink">{session.email}</span>
        </p>
        <LogoutButton />
      </div>
    </div>
  );
}
