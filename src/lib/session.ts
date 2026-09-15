import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase-admin";

const SESSION_COOKIE = "__session";

export async function getSession() {
  if (!adminAuth) return null;
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionCookie) return null;
  try {
    return await adminAuth.verifySessionCookie(sessionCookie, true);
  } catch {
    return null;
  }
}
