import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { WhatsappButton } from "@/components/whatsapp-button";
import { siteContent, siteCopy, siteThemeCssVariables } from "@/content";
import { getOgImage, getSiteUrl, resolveSeoMeta } from "@/lib/seo";
import { Afacad, Fraunces } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";

const afacad = Afacad({
  variable: "--font-source-body",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-source-display",
  subsets: ["latin"],
  display: "swap",
});

const defaultSeo = resolveSeoMeta(siteContent.seoDefaults);

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: defaultSeo.title,
    template: `%s | ${siteContent.identity.name}`,
  },
  description: defaultSeo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    siteName: siteContent.identity.name,
    images: [
      {
        url: getOgImage(siteContent.seoDefaults),
        alt: defaultSeo.title,
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [getOgImage(siteContent.seoDefaults)],
  },
  icons: {
    icon: siteContent.identity.favicon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${afacad.variable} ${fraunces.variable} h-full scroll-smooth antialiased motion-reduce:scroll-auto`}
      style={siteThemeCssVariables as CSSProperties}
    >
      <body className="min-h-full">
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <a
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-brand-primary focus:shadow-xl focus:outline focus:outline-2 focus:outline-brand-accent"
            href="#conteudo"
          >
            {siteCopy.layout.skipLink}
          </a>
          <SiteHeader />
          <main className="flex-1 pb-20 sm:pb-0" id="conteudo" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
          <WhatsappButton />
          <StructuredData />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
