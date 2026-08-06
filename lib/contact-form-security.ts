import "server-only";

import {
  createSignedContactFormToken,
  InMemoryRateLimiter,
  verifySignedContactFormToken,
} from "@/lib/contact-form-security-core";

const CONTACT_FORM_RATE_LIMIT_WINDOW_MS = 60_000;
const CONTACT_FORM_RATE_LIMIT_MAX_ATTEMPTS = 5;
const DEVELOPMENT_TOKEN_SECRET =
  "development-only-contact-form-secret-do-not-use-in-production";

const rateLimiter = new InMemoryRateLimiter({
  maxAttempts: CONTACT_FORM_RATE_LIMIT_MAX_ATTEMPTS,
  windowMs: CONTACT_FORM_RATE_LIMIT_WINDOW_MS,
});

function getContactFormTokenSecret() {
  const configuredSecret = process.env.CONTACT_FORM_TOKEN_SECRET?.trim();

  if (configuredSecret && configuredSecret.length >= 32) {
    return configuredSecret;
  }

  if (process.env.NODE_ENV !== "production") {
    return DEVELOPMENT_TOKEN_SECRET;
  }

  throw new Error(
    "CONTACT_FORM_TOKEN_SECRET must contain at least 32 characters in production.",
  );
}

export function createContactFormToken() {
  return createSignedContactFormToken(getContactFormTokenSecret());
}

export function isContactFormTokenValid(token: string) {
  return verifySignedContactFormToken({
    secret: getContactFormTokenSecret(),
    token,
  }).valid;
}

export function allowContactFormAttempt(clientIp: string) {
  return rateLimiter.consume(clientIp);
}
