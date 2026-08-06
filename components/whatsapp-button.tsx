import { MessageCircle } from "lucide-react";
import { siteContent, siteCopy } from "@/content/site";
import { getWhatsappHref } from "@/lib/contact-links";

export function WhatsappButton() {
  const { contact, identity } = siteContent;
  const href = getWhatsappHref(contact.whatsapp);

  return (
    <a
      aria-label={siteCopy.whatsapp.ariaLabel.replace("{name}", identity.name)}
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-success px-4 py-3 text-sm font-semibold text-white shadow-brand-whatsapp transition hover:-translate-y-0.5 hover:bg-brand-success-hover active:translate-y-px active:bg-brand-success-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:bottom-6 sm:right-6"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" size={19} strokeWidth={1.9} />
      <span className="hidden sm:inline">{siteCopy.whatsapp.label}</span>
    </a>
  );
}
