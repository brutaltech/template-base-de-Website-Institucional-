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
import { siteContent, siteCopy } from "@/content/site";
import type { SocialLink } from "@/content/site";
import { getAddressText } from "@/lib/contact-links";

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
  const navLabel = siteCopy.footer.navigationTitle;
  const contactLabel = siteCopy.footer.contactTitle;

  return (
    <footer className="border-t border-brand-primary/10 bg-brand-surface">
      <Container className="grid gap-10 pb-28 pt-10 text-sm text-brand-primary/72 sm:pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-12">
        <div>
          <Link
            className="inline-block max-w-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
            href="/"
          >
            <Image
              alt={identity.name}
              className="h-auto w-56"
              height={60}
              src={identity.logoDark}
              width={240}
            />
          </Link>
          <p className="mt-4 max-w-xl leading-7">{footer.text}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {contact.social.map((social) => {
              const Icon = socialIcons[social.platform];

              return (
                <a
                  aria-label={siteCopy.footer.socialAriaLabel
                    .replace("{platform}", social.platform)
                    .replace("{name}", identity.name)}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-brand-primary/12 bg-white/70 text-brand-primary transition hover:border-brand-accent/45 hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none"
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
          <h2 className="text-xs font-semibold uppercase text-brand-primary">
            {navLabel}
          </h2>
          <ul className="mt-4 grid gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="font-medium text-brand-primary/76 transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase text-brand-primary">
            {contactLabel}
          </h2>
          <address className="mt-4 grid gap-3 not-italic">
            <a
              className="flex items-start gap-3 transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none"
              href={`mailto:${contact.email}`}
            >
              <Mail aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
              <span>{contact.email}</span>
            </a>
            <a
              className="flex items-start gap-3 transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none"
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
                {contact.hours[0]?.day}: {contact.hours[0]?.hours}
              </span>
            </p>
          </address>
        </div>
      </Container>
    </footer>
  );
}
