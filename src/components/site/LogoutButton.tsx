"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/session", { method: "DELETE" });
    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      type="button"
      className="rounded-full border border-line font-bold text-sm px-5 py-3 hover:bg-bg-deep transition"
    >
      Se déconnecter
    </button>
  );
}
