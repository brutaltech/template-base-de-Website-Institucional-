"use server";

import { Resend } from "resend";
import { siteContent } from "@/content/site";
import {
  CONTACT_FORM_FIELD_NAMES,
  CONTACT_FORM_MIN_ELAPSED_MS,
  contactFormPayloadFromFormData,
  contactFormSchema,
  flattenContactFormErrors,
} from "@/lib/contact-form-schema";
import type { ContactFormState } from "@/lib/contact-form-schema";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getElapsedTime(formData: FormData) {
  const loadedAt = Number(formData.get(CONTACT_FORM_FIELD_NAMES.loadedAt));

  if (!Number.isFinite(loadedAt)) {
    return 0;
  }

  return Date.now() - loadedAt;
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const labels = siteContent.pages.contact.formLabels;
  const honeypot = String(
    formData.get(CONTACT_FORM_FIELD_NAMES.honeypot) ?? "",
  ).trim();

  if (honeypot.length > 0 || getElapsedTime(formData) < CONTACT_FORM_MIN_ELAPSED_MS) {
    return {
      status: "error",
      message: labels.error,
      fieldErrors: {},
    };
  }

  const parsed = contactFormSchema.safeParse(
    contactFormPayloadFromFormData(formData),
  );

  if (!parsed.success) {
    return {
      status: "error",
      message: labels.error,
      fieldErrors: flattenContactFormErrors(parsed.error),
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    console.error("Missing Resend environment variables.");

    return {
      status: "error",
      message: labels.error,
      fieldErrors: {},
    };
  }

  const { name, email, message, phone } = parsed.data;
  const resend = new Resend(resendApiKey);
  const subject = `Novo pedido de contacto - ${name}`;
  const text = [
    `Nome: ${name}`,
    `Email: ${email}`,
    `Telefone: ${phone ?? "Nao indicado"}`,
    "",
    "Mensagem:",
    message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [siteContent.contact.email],
    replyTo: email,
    subject,
    text,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #223036;">
        <h1 style="font-size: 20px;">Novo pedido de contacto</h1>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(phone ?? "Nao indicado")}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend failed to send contact email.", error);

    return {
      status: "error",
      message: labels.error,
      fieldErrors: {},
    };
  }

  return {
    status: "success",
    message: labels.success,
    fieldErrors: {},
  };
}
