import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nansah",
  description:
    "Nansah — la plateforme poussée par IA qui vous aide à mieux préparer votre examen TCF. Simulateurs en conditions réelles, correction assistée et sujets renouvelés chaque mois.",
};

// Clerk n'est pas encore configuré (pas de clés .env) — on ne l'active
// que lorsque NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY est renseigné, pour que le
// reste de l'app reste consultable en local sans compte Clerk.
const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default function RootLayout({ children }: LayoutProps<"/">) {
  const body = (
    <html lang="fr" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );

  return clerkEnabled ? <ClerkProvider>{body}</ClerkProvider> : body;
}
