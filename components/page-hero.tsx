import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <Section className="border-b border-brand-primary/8 bg-brand-surface py-14 sm:py-18 lg:py-22">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-brand-accent">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-primary text-balance sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-primary/72 sm:text-xl">
            {subtitle}
          </p>
        </div>
      </Container>
    </Section>
  );
}
