import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type LegalPageProps = {
  children: ReactNode;
  title: string;
};

export function LegalPage({ children, title }: LegalPageProps) {
  return (
    <>
      <Section className="border-b border-brand-primary/8 bg-brand-surface py-14 sm:py-18 lg:py-22">
        <Container>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-brand-primary text-balance sm:text-6xl">
            {title}
          </h1>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <article className="mx-auto max-w-3xl">{children}</article>
        </Container>
      </Section>
    </>
  );
}
