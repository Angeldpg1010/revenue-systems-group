import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revenue Systems Group",
  description:
    "B2B consulting landing for companies in Spain that want to close more sales with CRM and lead automation.",
  openGraph: {
    title: "Revenue Systems Group",
    description:
      "Close more sales by automating lead management with CRM and workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
