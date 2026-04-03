import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CheckField — Checklists de Campo Offline-First",
  description:
    "Plataforma whitelabel offline-first para operações de campo. Checklists inteligentes, sincronização automática, dashboard em tempo real. Confiado por empresas de energia, saneamento e infraestrutura.",
  keywords: [
    "checklist campo",
    "operações campo",
    "offline first",
    "whitelabel",
    "manutenção preventiva",
    "gestão de campo",
  ],
  openGraph: {
    title: "CheckField — Checklists de Campo Offline-First",
    description:
      "Plataforma whitelabel offline-first para operações de campo. Checklists inteligentes, sincronização automática, dashboard em tempo real.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
