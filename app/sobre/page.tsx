import Image from "next/image";
import { CheckCircle2, Sparkles, Target, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteContent, siteCopy } from "@/content";
import { publicAssetExists } from "@/lib/public-assets";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return buildPageMetadata(siteContent.pages.about.seo, "/sobre");
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  const { about } = siteContent.pages;

  return (
    <>
      <PageHero
        eyebrow={siteCopy.pageEyebrows.about}
        subtitle={about.hero.subtitle}
        title={about.hero.title}
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card className="relative overflow-hidden p-7 sm:p-8">
              <div
                aria-hidden="true"
                className="perspective-corner absolute right-0 top-0 h-28 w-32"
              />
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-brand-primary text-white">
                <Sparkles aria-hidden="true" size={22} strokeWidth={1.8} />
              </div>
              <h2 className="font-display text-3xl font-semibold text-brand-primary">
                {siteCopy.aboutPage.historyTitle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-primary/72">
                {about.history}
              </p>
            </Card>

            <Card className="relative overflow-hidden p-7 sm:p-8">
              <div
                aria-hidden="true"
                className="perspective-corner absolute right-0 top-0 h-28 w-32"
              />
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-brand-secondary text-white">
                <Target aria-hidden="true" size={22} strokeWidth={1.8} />
              </div>
              <h2 className="font-display text-3xl font-semibold text-brand-primary">
                {siteCopy.aboutPage.missionTitle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-primary/72">
                {about.mission}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-surface">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-brand-accent">
              {siteCopy.aboutPage.valuesEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-primary sm:text-5xl">
              {siteCopy.aboutPage.valuesTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,16rem),1fr))]">
            {about.values.map((value) => (
              <Card className="min-h-56" key={value.title}>
                <CheckCircle2
                  aria-hidden="true"
                  className="mb-6 text-brand-accent"
                  size={26}
                  strokeWidth={1.8}
                />
                <h3 className="text-xl font-semibold text-brand-primary">
                  {value.title}
                </h3>
                <p className="mt-3 leading-7 text-brand-primary/68">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-brand-accent">
                {siteCopy.aboutPage.teamEyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-primary sm:text-5xl">
                {siteCopy.aboutPage.teamTitle}
              </h2>
            </div>
            <Users
              aria-hidden="true"
              className="hidden text-brand-primary/18 sm:block"
              size={72}
              strokeWidth={1.4}
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {about.team.map((member) => {
              const hasPhoto = publicAssetExists(member.photo);

              return (
                <Card className="overflow-hidden p-0" key={member.id}>
                  <div className="relative aspect-square overflow-hidden bg-brand-surface">
                    {hasPhoto && member.photo ? (
                      <Image
                        alt={member.name}
                        className="h-full w-full object-cover"
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        src={member.photo}
                      />
                    ) : (
                      <div className="initials-grid flex h-full items-center justify-center">
                        <span className="flex h-20 w-20 items-center justify-center rounded-md bg-brand-primary font-display text-3xl font-semibold text-white">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-primary">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase text-brand-accent">
                      {member.role}
                    </p>
                    {member.bio ? (
                      <p className="mt-4 leading-7 text-brand-primary/68">
                        {member.bio}
                      </p>
                    ) : null}
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-secondary text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-brand-accent-on-dark">
              {siteCopy.aboutPage.differentiatorsEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">
              {siteCopy.aboutPage.differentiatorsTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,17rem),1fr))]">
            {about.differentiators.map((item) => (
              <Card className="min-h-60" key={item.id} variant="dark">
                <div className="mb-6 h-1.5 w-16 rounded-full bg-brand-accent" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/72">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
