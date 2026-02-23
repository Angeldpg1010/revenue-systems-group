import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://domiarevenuesystems.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Automatización Comercial para Equipos de Ventas | Domia Revenue Systems",
  description:
    "Implementamos sistemas CRM y automatización para que ningún lead se pierda y vuestro equipo comercial cierre más ventas.",
  openGraph: {
    title: "Automatización Comercial para Equipos de Ventas | Domia Revenue Systems",
    description:
      "Implementamos sistemas CRM y automatización para que ningún lead se pierda y vuestro equipo comercial cierre más ventas.",
    url: siteUrl,
    siteName: "Domia Revenue Systems",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización Comercial para Equipos de Ventas | Domia Revenue Systems",
    description:
      "Implementamos sistemas CRM y automatización para que ningún lead se pierda y vuestro equipo comercial cierre más ventas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Domia Revenue Systems",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [],
    description:
      "Implementamos sistemas CRM y automatización para que ningún lead se pierda y vuestro equipo comercial cierre más ventas.",
  };

  const analyticsHelper = `
    (function () {
      window.trackEvent = function (eventName, params) {
        if (typeof window.gtag === "function") {
          window.gtag("event", eventName, params || {});
        }
      };

      document.addEventListener("click", function (event) {
        var target = event.target;
        if (!(target instanceof Element)) return;

        var element = target.closest("a,button");
        if (!element) return;

        var text = (element.textContent || "").trim();
        if (text !== "Reservar diagnóstico gratuito") return;

        var location = "final";
        var section = element.closest("section");
        if (section) {
          var heading = section.querySelector("h1, h2");
          var headingText = heading ? (heading.textContent || "").trim() : "";
          if (headingText.indexOf("Aumentamos las ventas") === 0) location = "hero";
          if (headingText.indexOf("Qué incluye el Sistema Comercial Automatizado") === 0) location = "mid";
          if (section.id === "diagnostico") location = "final";
        }

        window.trackEvent("cta_click", { location: location });
      });
    })();
  `;

  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased pb-24 md:pb-0">
        {children}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script id="analytics-helper" strategy="afterInteractive">
          {analyticsHelper}
        </Script>
      </body>
    </html>
  );
}
