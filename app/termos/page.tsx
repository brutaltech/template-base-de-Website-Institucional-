import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/content";
import TermsContent from "@/content/legal/termos.mdx";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return buildPageMetadata(legalPages.terms.seo, legalPages.terms.href);
}

export default function TermsPage() {
  return (
    <LegalPage title={legalPages.terms.title}>
      <TermsContent />
    </LegalPage>
  );
}
