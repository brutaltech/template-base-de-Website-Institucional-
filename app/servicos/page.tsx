import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteContent, siteCopy } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return buildPageMetadata(siteContent.pages.services.seo, "/servicos");
}

export default function ServicesPage() {
  const { services } = siteContent.pages;

  return (
    <>
      <PageHero
        eyebrow={siteCopy.pageEyebrows.services}
        subtitle={services.hero.subtitle}
        title={services.hero.title}
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.items.map((service, index) => (
              <Card
                className="relative min-h-[23rem] overflow-hidden"
                key={service.id}
              >
                  <div
                    aria-hidden="true"
                    className="perspective-corner absolute right-0 top-0 h-24 w-28"
                />
                <p className="text-sm font-semibold text-brand-primary/45">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-md bg-brand-primary text-white">
                  <ServiceIcon name={service.icon} />
                </div>
                <h2 className="mt-7 text-2xl font-semibold leading-tight text-brand-primary">
                  {service.title}
                </h2>
                <p className="mt-3 leading-7 text-brand-primary/68">
                  {service.description}
                </p>
                <p className="mt-5 leading-7 text-brand-primary/76">
                  {service.detail}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-semibold leading-tight text-brand-primary sm:text-5xl">
                {siteCopy.servicesPage.ctaTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-primary/72">
                {siteCopy.servicesPage.ctaText}
              </p>
            </div>
            <Button href="/contacto">
              {siteCopy.servicesPage.ctaLabel}
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
