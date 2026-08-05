import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteContent, siteCopy } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return buildPageMetadata(siteContent.pages.home.seo, "/");
}

export default function Home() {
  const { pages } = siteContent;
  const home = pages.home;
  const services = pages.services.items;

  return (
    <>
        <Section className="relative isolate overflow-hidden border-b border-brand-primary/8 py-0">
          <Image
            alt={home.hero.imageAlt}
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]"
            fill
            priority
            sizes="100vw"
            src={home.hero.image}
          />
          <div
            aria-hidden="true"
            className="hero-image-overlay absolute inset-0 -z-10"
          />
          <Container className="flex min-h-[34rem] items-center py-14 sm:min-h-[39rem] sm:py-18 lg:min-h-[43rem]">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-md border border-brand-accent/30 bg-white/72 px-3 py-1 text-xs font-semibold uppercase text-brand-secondary">
                {siteContent.identity.tagline}
              </p>
              <h1 className="max-w-[10.5ch] font-display text-4xl font-semibold leading-[0.98] text-brand-primary text-balance sm:max-w-none sm:text-6xl lg:text-7xl">
                {home.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-primary/75 sm:text-xl">
                {home.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={home.hero.ctaHref}>
                  {home.hero.ctaLabel}
                  <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
                </Button>
                <Button href="#servicos" variant="secondary">
                  {siteCopy.home.servicesAnchorLabel}
                </Button>
              </div>
              <p className="mt-10 max-w-sm border-l-2 border-brand-accent/50 pl-4 text-sm font-semibold text-brand-primary/72">
                {siteCopy.home.heroNote}
              </p>
            </div>
          </Container>
        </Section>

        <Section className="bg-white" id="servicos">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-brand-accent">
                {siteCopy.home.servicesEyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-primary sm:text-5xl">
                {home.servicesIntro.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-primary/70">
                {home.servicesIntro.subtitle}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Card className="relative overflow-hidden" key={service.id}>
                  <div
                    aria-hidden="true"
                    className="perspective-corner absolute right-0 top-0 h-24 w-28"
                  />
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-md bg-brand-primary text-white">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-brand-primary/68">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-brand-surface">
          <Container>
            <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,12rem),1fr))]">
              {home.stats.map((stat) => (
                <Card className="min-h-44" key={stat.label} variant="stat">
                  <p className="font-display text-5xl font-semibold leading-none text-brand-secondary sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-5 max-w-48 text-base leading-7 text-brand-primary/72">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-white">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
              <div className="h-full rounded-lg border border-brand-primary/10 bg-brand-surface-soft p-6">
                <p className="text-sm font-semibold uppercase text-brand-accent">
                  {siteCopy.home.aboutEyebrow}
                </p>
                <div
                  aria-hidden="true"
                  className="blueprint-sketch mt-8 aspect-[5/3] rounded-md"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight text-brand-primary sm:text-5xl">
                  {home.about.title}
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-primary/72">
                  {home.about.text}
                </p>
                <div className="mt-8">
                  <Button href={home.about.ctaHref} variant="secondary">
                    {home.about.ctaLabel}
                    <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-brand-secondary text-white">
          <Container>
            <Card
              className="relative isolate overflow-hidden p-7 sm:p-10 lg:p-12"
              variant="dark"
            >
              <div
                aria-hidden="true"
                className="dark-perspective-grid absolute inset-0 -z-10 opacity-50"
              />
              <div className="max-w-3xl">
                <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
                  {home.finalCta.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/78">
                  {home.finalCta.subtitle}
                </p>
                <div className="mt-8">
                  <Button href={home.finalCta.ctaHref} variant="primary">
                    {home.finalCta.ctaLabel}
                    <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
                  </Button>
                </div>
              </div>
            </Card>
          </Container>
        </Section>
    </>
  );
}
