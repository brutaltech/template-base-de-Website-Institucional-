import Image from "next/image";
import { ImageIcon, Layers3 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteContent, siteCopy } from "@/content";
import type { PortfolioItem } from "@/content/site";
import { publicAssetExists } from "@/lib/public-assets";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return buildPageMetadata(siteContent.pages.portfolio.seo, "/portfolio");
}

function PortfolioFallback({ item }: { item: PortfolioItem }) {
  return (
    <div className="flex h-full min-h-64 flex-col justify-between bg-brand-surface p-6">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0"
      />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-md bg-brand-primary text-white">
        <ImageIcon aria-hidden="true" size={24} strokeWidth={1.8} />
      </div>
      <p className="relative max-w-[14rem] text-sm font-semibold uppercase leading-5 text-brand-primary/68">
        {item.category}
      </p>
    </div>
  );
}

export default function PortfolioPage() {
  const { portfolio } = siteContent.pages;

  return (
    <>
      <PageHero
        eyebrow={siteCopy.pageEyebrows.portfolio}
        subtitle={portfolio.hero.subtitle}
        title={portfolio.hero.title}
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.items.map((item) => {
              const hasImage = publicAssetExists(item.image);

              return (
                <Card className="overflow-hidden p-0" key={item.id}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {hasImage && item.image ? (
                      <Image
                        alt={item.title}
                        className="h-full w-full object-cover"
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        src={item.image}
                      />
                    ) : (
                      <PortfolioFallback item={item} />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-brand-surface px-3 py-1 text-xs font-semibold uppercase text-brand-secondary">
                      <Layers3 aria-hidden="true" size={14} strokeWidth={1.8} />
                      {item.category}
                    </div>
                    <h2 className="text-2xl font-semibold leading-tight text-brand-primary">
                      {item.title}
                    </h2>
                    <p className="mt-4 leading-7 text-brand-primary/68">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
