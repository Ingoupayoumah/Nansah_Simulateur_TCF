import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteNav } from "@/components/site/SiteNav";
import { SecondaryNav } from "@/components/site/SecondaryNav";
import { SiteFooter } from "@/components/site/SiteFooter";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-theme="light"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteNav />
        <SecondaryNav />
        <main className="flex-1 flex flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
