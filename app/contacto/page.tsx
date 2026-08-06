import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { connection } from "next/server";
import { ContactForm } from "@/components/contact-form";
import { MapEmbedFacade } from "@/components/map-embed-facade";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteContent, siteCopy } from "@/content";
import {
  getAddressText,
  getLocationText,
  getMapEmbedUrl,
  getWhatsappHref,
} from "@/lib/contact-links";
import { buildPageMetadata } from "@/lib/seo";
import { createContactFormToken } from "@/lib/contact-form-security";

export function generateMetadata() {
  return buildPageMetadata(siteContent.pages.contact.seo, "/contacto");
}

export default async function ContactPage() {
  await connection();

  const { contact } = siteContent;
  const page = siteContent.pages.contact;
  const address = getAddressText(contact.address);
  const location = getLocationText(contact.address);
  const whatsappHref = getWhatsappHref(contact.whatsapp);
  const mapEmbedUrl = getMapEmbedUrl(contact.address);
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;
  let formToken = "";

  try {
    formToken = createContactFormToken();
  } catch {
    console.error("Contact form token secret is not configured correctly.");
  }

  return (
    <>
      <PageHero
        eyebrow={siteCopy.pageEyebrows.contact}
        subtitle={page.hero.subtitle}
        title={page.hero.title}
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Card className="p-6 sm:p-8">
              <h2 className="font-display text-3xl font-semibold text-brand-primary">
                {siteCopy.contactPage.formTitle}
              </h2>
              <div className="mt-8">
                <ContactForm
                  formToken={formToken}
                  labels={page.formLabels}
                  validationMessages={page.validationMessages}
                />
              </div>
            </Card>

            <div className="grid gap-5">
              <Card className="p-6 sm:p-8">
                <h2 className="font-display text-3xl font-semibold text-brand-primary">
                  {siteCopy.contactPage.directTitle}
                </h2>
                <address className="mt-6 grid gap-4 not-italic text-brand-primary/72">
                  <a
                    className="flex items-start gap-3 transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none"
                    href={`mailto:${contact.email}`}
                  >
                    <Mail
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-brand-accent"
                      size={19}
                    />
                    <span>{contact.email}</span>
                  </a>
                  <a
                    className="flex items-start gap-3 transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none"
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  >
                    <Phone
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-brand-accent"
                      size={19}
                    />
                    <span>{contact.phone}</span>
                  </a>
                  <p className="flex items-start gap-3 leading-7">
                    <MapPin
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-brand-accent"
                      size={19}
                    />
                    <span>{address}</span>
                  </p>
                </address>

                <div className="mt-7">
                  <Button
                    href={whatsappHref}
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="secondary"
                  >
                    {siteCopy.whatsapp.label}
                    <MessageCircle
                      aria-hidden="true"
                      size={18}
                      strokeWidth={1.8}
                    />
                  </Button>
                </div>
              </Card>

              <Card className="p-6 sm:p-8">
                <h2 className="font-display text-3xl font-semibold text-brand-primary">
                  {siteCopy.contactPage.hoursTitle}
                </h2>
                <dl className="mt-6 grid gap-3">
                  {contact.hours.map((item) => (
                    <div
                      className="flex items-start justify-between gap-5 border-b border-brand-primary/8 pb-3 last:border-b-0 last:pb-0"
                      key={item.day}
                    >
                      <dt className="flex items-start gap-3 font-semibold text-brand-primary">
                        <Clock
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-brand-accent"
                          size={18}
                        />
                        {item.day}
                      </dt>
                      <dd className="text-right text-brand-primary/70">
                        {item.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-surface py-0">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center px-5 py-12 sm:px-8 lg:justify-end lg:px-10">
            <div className="max-w-lg">
              <p className="text-sm font-semibold uppercase text-brand-accent">
                {siteCopy.contactPage.mapEyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-primary sm:text-5xl">
                {location}
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-primary/72">
                {address}
              </p>
              <div className="mt-8">
                <Button
                  href={mapSearchUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="ghost"
                >
                  {siteCopy.contactPage.mapButtonLabel}
                  <ExternalLink
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.8}
                  />
                </Button>
              </div>
            </div>
          </div>
          <MapEmbedFacade
            buttonLabel={siteCopy.contactPage.mapButtonLabel}
            src={mapEmbedUrl}
            title={`${siteCopy.contactPage.mapEyebrow}: ${address}`}
          />
        </div>
      </Section>

      {page.faq?.length ? (
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-brand-accent">
                {siteCopy.contactPage.faqEyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-primary sm:text-5xl">
                {siteCopy.contactPage.faqTitle}
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {page.faq.map((item) => (
                <Card key={item.id}>
                  <h3 className="text-xl font-semibold text-brand-primary">
                    {item.question}
                  </h3>
                  <p className="mt-4 leading-7 text-brand-primary/68">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
