import {
  BriefcaseBusiness,
  Camera,
  CirclePlay,
  Clock,
  Mail,
  MapPin,
  Music2,
  Phone,
  ThumbsUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  interpolateContentTemplate,
  siteContent,
  siteCopy,
} from "@/content";
import type { SocialLink } from "@/content/site";
import { getAddressText, getHoursText } from "@/lib/contact-links";

const socialIcons: Record<SocialLink["platform"], LucideIcon> = {
  instagram: Camera,
  facebook: ThumbsUp,
  linkedin: BriefcaseBusiness,
  youtube: CirclePlay,
  tiktok: Music2,
};

function getFooterLinks() {
  const seen = new Set<string>();

  return [...siteContent.nav.links, ...siteContent.footer.links].filter(
    (link) => {
      if (seen.has(link.href)) {
        return false;
      }

      seen.add(link.href);
      return true;
    },
  );
}

export function SiteFooter() {
  const { contact, footer, identity } = siteContent;
  const footerLinks = getFooterLinks();
  const address = getAddressText(contact.address);
  const footerText = interpolateContentTemplate(footer.text, {
    companyName: identity.name,
  });
  const navLabel = siteCopy.footer.navigationTitle;
  const contactLabel = siteCopy.footer.contactTitle;

  return (
    <footer className="border-t border-white/10 bg-brand-secondary">
      <Container className="grid gap-10 pb-28 pt-10 text-sm text-white/76 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-12">
        <div>
          <Link
            className="inline-block max-w-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent-on-dark"
            href="/"
          >
            {identity.logoLight ? (
              <Image
                alt={identity.name}
                className="h-auto w-56"
                height={60}
                src={identity.logoLight}
                width={240}
              />
            ) : (
              <span className="block max-w-md font-display text-2xl font-semibold leading-tight text-white">
                {identity.name}
              </span>
            )}
          </Link>
          <p className="mt-4 max-w-xl leading-7">{footerText}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {contact.social.map((social) => {
              const Icon = socialIcons[social.platform];

              return (
                <a
                  aria-label={siteCopy.footer.socialAriaLabel
                    .replace("{platform}", social.platform)
                    .replace("{name}", identity.name)}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-white/8 text-white transition hover:border-brand-accent-on-dark/60 hover:text-brand-accent-on-dark active:translate-y-px active:bg-white/14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent-on-dark motion-reduce:transition-none motion-reduce:active:translate-y-0"
                  href={social.url}
                  key={`${social.platform}-${social.url}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={social.platform}
                >
                  <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label={navLabel}>
          <h2 className="text-xs font-semibold uppercase text-white">
            {navLabel}
          </h2>
          <ul className="mt-4 grid gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="font-medium text-white/80 transition hover:text-brand-accent-on-dark active:text-brand-accent-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent-on-dark motion-reduce:transition-none"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase text-white">
            {contactLabel}
          </h2>
          <address className="mt-4 grid gap-3 not-italic">
            <a
              className="flex items-start gap-3 transition hover:text-brand-accent-on-dark active:text-brand-accent-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent-on-dark motion-reduce:transition-none"
              href={`mailto:${contact.email}`}
            >
              <Mail aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
              <span>{contact.email}</span>
            </a>
            <a
              className="flex items-start gap-3 transition hover:text-brand-accent-on-dark active:text-brand-accent-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent-on-dark motion-reduce:transition-none"
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
            >
              <Phone aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
              <span>{contact.phone}</span>
            </a>
            <p className="flex items-start gap-3 leading-6">
              <MapPin aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
              <span>{address}</span>
            </p>
            <p className="flex items-start gap-3 leading-6">
              <Clock aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
              <span>
                {contact.hours[0] ? getHoursText(contact.hours[0]) : null}
              </span>
            </p>
          </address>
        </div>
      </Container>
    </footer>
  );
}
