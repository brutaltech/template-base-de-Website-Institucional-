import { siteContent } from "@/content/site";
import { getAddressText } from "@/lib/contact-links";
import { absoluteUrl } from "@/lib/seo";

export function StructuredData() {
  const { contact, identity } = siteContent;
  const address = getAddressText(contact.address);
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("#organization"),
    name: identity.name,
    description: identity.description,
    url: absoluteUrl("/"),
    telephone: contact.phone,
    email: contact.email,
    address,
    openingHours: contact.hours.map((item) => `${item.day}: ${item.hours}`),
    sameAs: contact.social.map((social) => social.url),
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}
