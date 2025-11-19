import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcus Gide TEMGOUA KIADJEU | Développeur Frontend",
  description: "Portfolio de Marcus Gide TEMGOUA KIADJEU, Développeur Frontend & Web Designer spécialisé en React, Next.js et Tailwind CSS.",
};

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import ThemeLanguageControls from "@/components/ThemeLanguageControls";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
            <ThemeLanguageControls />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
