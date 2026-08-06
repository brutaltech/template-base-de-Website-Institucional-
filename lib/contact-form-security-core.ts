import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export const CONTACT_FORM_MIN_ELAPSED_MS = 2_500;
export const CONTACT_FORM_TOKEN_MAX_AGE_MS = 2 * 60 * 60 * 1_000;

type VerifyContactFormTokenOptions = {
  token: string;
  secret: string;
  now?: number;
  minAgeMs?: number;
  maxAgeMs?: number;
};

export type ContactFormTokenValidation =
  | { valid: true; issuedAt: number }
  | {
      valid: false;
      reason:
        | "missing"
        | "malformed"
        | "invalid-signature"
        | "too-young"
        | "expired";
    };

function signPayload(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createSignedContactFormToken(
  secret: string,
  issuedAt = Date.now(),
  nonce = randomBytes(16).toString("base64url"),
) {
  const payload = `${issuedAt}.${nonce}`;
  return `${payload}.${signPayload(payload, secret)}`;
}

export function verifySignedContactFormToken({
  token,
  secret,
  now = Date.now(),
  minAgeMs = CONTACT_FORM_MIN_ELAPSED_MS,
  maxAgeMs = CONTACT_FORM_TOKEN_MAX_AGE_MS,
}: VerifyContactFormTokenOptions): ContactFormTokenValidation {
  if (!token) {
    return { valid: false, reason: "missing" };
  }

  const [timestampPart, nonce, signature, ...extraParts] = token.split(".");

  if (
    extraParts.length > 0 ||
    !/^\d{13}$/.test(timestampPart ?? "") ||
    !/^[A-Za-z0-9_-]{20,}$/.test(nonce ?? "") ||
    !/^[A-Za-z0-9_-]{40,}$/.test(signature ?? "")
  ) {
    return { valid: false, reason: "malformed" };
  }

  const issuedAt = Number(timestampPart);
  const payload = `${timestampPart}.${nonce}`;
  const expectedSignature = Buffer.from(signPayload(payload, secret), "base64url");
  const receivedSignature = Buffer.from(signature, "base64url");

  if (
    expectedSignature.length !== receivedSignature.length ||
    !timingSafeEqual(expectedSignature, receivedSignature)
  ) {
    return { valid: false, reason: "invalid-signature" };
  }

  const age = now - issuedAt;

  if (age < minAgeMs) {
    return { valid: false, reason: "too-young" };
  }

  if (age > maxAgeMs) {
    return { valid: false, reason: "expired" };
  }

  return { valid: true, issuedAt };
}

type InMemoryRateLimiterOptions = {
  maxAttempts: number;
  windowMs: number;
};

type RateLimitEntry = {
  attempts: number;
  resetAt: number;
};

export class InMemoryRateLimiter {
  private readonly entries = new Map<string, RateLimitEntry>();
  private readonly options: InMemoryRateLimiterOptions;

  constructor(options: InMemoryRateLimiterOptions) {
    this.options = options;
  }

  consume(key: string, now = Date.now()) {
    for (const [entryKey, entry] of this.entries) {
      if (entry.resetAt <= now) {
        this.entries.delete(entryKey);
      }
    }

    const existing = this.entries.get(key);

    if (!existing) {
      this.entries.set(key, {
        attempts: 1,
        resetAt: now + this.options.windowMs,
      });
      return true;
    }

    if (existing.attempts >= this.options.maxAttempts) {
      return false;
    }

    existing.attempts += 1;
    return true;
  }
}

export function getClientIp(requestHeaders: Pick<Headers, "get">) {
  const forwardedFor = requestHeaders
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();
  const realIp = requestHeaders.get("x-real-ip")?.trim();

  return forwardedFor || realIp || "unknown";
}
