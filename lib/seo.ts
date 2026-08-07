import type { Metadata } from "next";
import { interpolateContentTemplate, legalPages, siteContent } from "@/content";
import type { SeoMeta } from "@/content/site";

const FALLBACK_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL;

  try {
    return new URL(rawUrl);
  } catch {
    return new URL(FALLBACK_SITE_URL);
  }
}

export function absoluteUrl(pathname: string) {
  return new URL(pathname, getSiteUrl()).toString();
}

export function getOgImage(seo?: SeoMeta) {
  return seo?.ogImage || siteContent.seoDefaults.ogImage || siteContent.identity.logoDark;
}

export function resolveSeoMeta(seo: SeoMeta): SeoMeta {
  const values = { companyName: siteContent.identity.name };

  return {
    ...seo,
    title: interpolateContentTemplate(seo.title, values),
    description: interpolateContentTemplate(seo.description, values),
  };
}

export function buildPageMetadata(
  seo: SeoMeta,
  canonical?: string,
): Metadata {
  const resolvedSeo = resolveSeoMeta(seo);
  const defaults = resolveSeoMeta(siteContent.seoDefaults);
  const title = resolvedSeo.title || defaults.title;
  const description = resolvedSeo.description || defaults.description;
  const image = getOgImage(seo);

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      ...(canonical ? { url: canonical } : {}),
      siteName: siteContent.identity.name,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
      locale: "pt_PT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function getPublicRoutes() {
  const routes = [
    ...siteContent.nav.links.map((link) => link.href),
    legalPages.privacy.href,
    legalPages.terms.href,
  ];

  return Array.from(new Set(routes));
}
