import assert from "node:assert/strict";
import test from "node:test";
import {
  createContactFormSchema,
  flattenContactFormErrors,
} from "../lib/contact-form-schema.ts";

const messages = {
  nameMin: "nome mínimo configurável",
  nameMax: "nome máximo configurável",
  emailInvalid: "email inválido configurável",
  emailMax: "email máximo configurável",
  phoneMax: "telefone máximo configurável",
  phoneInvalid: "telefone inválido configurável",
  messageMin: "mensagem mínima configurável",
  messageMax: "mensagem máxima configurável",
};

test("usa a mensagem de validação fornecida pelo conteúdo", () => {
  const parsed = createContactFormSchema(messages).safeParse({
    email: "visitante@example.com",
    message: "Mensagem com contexto suficiente.",
    name: "A",
    phone: "",
  });

  assert.equal(parsed.success, false);

  if (!parsed.success) {
    assert.equal(
      flattenContactFormErrors(parsed.error).name?.[0],
      messages.nameMin,
    );
  }
});

test("partilha a mesma copy dinâmica com a validação de email", () => {
  const parsed = createContactFormSchema(messages).safeParse({
    email: "email-inválido",
    message: "Mensagem com contexto suficiente.",
    name: "Visitante",
    phone: undefined,
  });

  assert.equal(parsed.success, false);

  if (!parsed.success) {
    assert.equal(
      flattenContactFormErrors(parsed.error).email?.[0],
      messages.emailInvalid,
    );
  }
});
