import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return {
    ...buildPageMetadata(siteContent.pages.notFound.seo),
    alternates: {
      canonical: null,
    },
    robots: {
      follow: false,
      index: false,
    },
  };
}

export default function NotFound() {
  const content = siteContent.pages.notFound;

  return (
    <Section className="bg-white">
      <Container>
        <Card className="relative isolate overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="not-found-grid absolute inset-0 -z-10"
          />
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-brand-primary text-balance sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-primary/72">
              {content.message}
            </p>
            <div className="mt-8">
              <Button href="/">
                {content.ctaLabel}
                <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
