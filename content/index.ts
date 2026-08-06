import {
  interpolateContentTemplate,
  legalPages,
  siteContent,
  siteCopy,
  siteTheme,
  siteThemeCssVariables,
  type SiteContent,
} from "./site";
import { stressTestSiteContent } from "./site.stress-test";

const activeSiteContent =
  process.env.NEXT_PUBLIC_CONTENT_SET === "stress"
    ? stressTestSiteContent
    : siteContent;

export {
  activeSiteContent as siteContent,
  interpolateContentTemplate,
  siteCopy,
  legalPages,
  siteTheme,
  siteThemeCssVariables,
};
export type { SiteContent };
