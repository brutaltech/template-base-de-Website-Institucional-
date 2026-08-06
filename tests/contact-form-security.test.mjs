import assert from "node:assert/strict";
import test from "node:test";
import {
  CONTACT_FORM_MIN_ELAPSED_MS,
  CONTACT_FORM_TOKEN_MAX_AGE_MS,
  createSignedContactFormToken,
  InMemoryRateLimiter,
  verifySignedContactFormToken,
} from "../lib/contact-form-security-core.ts";

const secret = "test-secret-with-at-least-thirty-two-characters";
const issuedAt = 1_700_000_000_000;
const nonce = "0123456789abcdefghijkl";

function verify(token, now) {
  return verifySignedContactFormToken({
    now,
    secret,
    token,
  });
}

test("rejeita um token ausente", () => {
  assert.deepEqual(verify("", issuedAt + CONTACT_FORM_MIN_ELAPSED_MS), {
    valid: false,
    reason: "missing",
  });
});

test("rejeita um token adulterado", () => {
  const token = createSignedContactFormToken(secret, issuedAt, nonce);
  const lastCharacter = token.at(-1);
  const tamperedToken = `${token.slice(0, -1)}${lastCharacter === "a" ? "b" : "a"}`;

  assert.deepEqual(
    verify(tamperedToken, issuedAt + CONTACT_FORM_MIN_ELAPSED_MS),
    { valid: false, reason: "invalid-signature" },
  );
});

test("rejeita submissões com menos de 2,5 segundos", () => {
  const token = createSignedContactFormToken(secret, issuedAt, nonce);

  assert.deepEqual(
    verify(token, issuedAt + CONTACT_FORM_MIN_ELAPSED_MS - 1),
    { valid: false, reason: "too-young" },
  );
});

test("aceita um token íntegro com idade suficiente", () => {
  const token = createSignedContactFormToken(secret, issuedAt, nonce);

  assert.deepEqual(
    verify(token, issuedAt + CONTACT_FORM_MIN_ELAPSED_MS),
    { valid: true, issuedAt },
  );
});

test("rejeita um token expirado", () => {
  const token = createSignedContactFormToken(secret, issuedAt, nonce);

  assert.deepEqual(
    verify(token, issuedAt + CONTACT_FORM_TOKEN_MAX_AGE_MS + 1),
    { valid: false, reason: "expired" },
  );
});

test("limita tentativas por chave dentro da janela", () => {
  const limiter = new InMemoryRateLimiter({
    maxAttempts: 2,
    windowMs: 60_000,
  });

  assert.equal(limiter.consume("203.0.113.10", issuedAt), true);
  assert.equal(limiter.consume("203.0.113.10", issuedAt + 1), true);
  assert.equal(limiter.consume("203.0.113.10", issuedAt + 2), false);
  assert.equal(limiter.consume("203.0.113.10", issuedAt + 60_000), true);
});
