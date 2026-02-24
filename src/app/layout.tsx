import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Broker Tecnológico B2B | Título Provisional",
  description:
    "Descripción provisional: dirección estratégica para proyectos tecnológicos B2B.",
  openGraph: {
    title: "Broker Tecnológico B2B | Título Provisional",
    description:
      "Descripción provisional: dirección estratégica para proyectos tecnológicos B2B.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-white text-[#0E2A47] antialiased">{children}</body>
    </html>
  );
}
