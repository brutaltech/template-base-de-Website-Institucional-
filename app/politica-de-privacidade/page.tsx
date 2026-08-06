import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/content";
import PrivacyContent from "@/content/legal/politica-de-privacidade.mdx";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return buildPageMetadata(legalPages.privacy.seo, legalPages.privacy.href);
}

export default function PrivacyPage() {
  return (
    <LegalPage title={legalPages.privacy.title}>
      <PrivacyContent />
    </LegalPage>
  );
}
