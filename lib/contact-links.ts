import type { SiteContent } from "@/content/site";

type Contact = SiteContent["contact"];

export function getWhatsappHref(whatsapp: Contact["whatsapp"]) {
  const number = whatsapp.number.replace(/\D/g, "");
  const message = encodeURIComponent(whatsapp.defaultMessage.trim());

  return `https://wa.me/${number}${message ? `?text=${message}` : ""}`;
}

export function getAddressText(address: Contact["address"]) {
  return `${address.street}, ${address.postalCode} ${address.city}, ${address.country}`;
}

export function getLocationText(address: Contact["address"]) {
  return [address.city, address.country].filter(Boolean).join(", ");
}

export function getHoursText(hours: Contact["hours"][number]) {
  return [hours.day, hours.hours].filter(Boolean).join(": ");
}

export function getMapEmbedUrl(address: Contact["address"]) {
  if (address.mapEmbedUrl) {
    return address.mapEmbedUrl;
  }

  return `https://www.google.com/maps?q=${encodeURIComponent(
    getAddressText(address),
  )}&output=embed`;
}
