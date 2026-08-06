"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import {
  interpolateContentTemplate,
  siteContent,
} from "@/content/site";
import { siteTheme } from "@/content/theme";
import {
  CONTACT_FORM_FIELD_NAMES,
  contactFormPayloadFromFormData,
  createContactFormSchema,
  flattenContactFormErrors,
} from "@/lib/contact-form-schema";
import type { ContactFormState } from "@/lib/contact-form-schema";
import { getClientIp } from "@/lib/contact-form-security-core";
import {
  allowContactFormAttempt,
  isContactFormTokenValid,
} from "@/lib/contact-form-security";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const page = siteContent.pages.contact;
  const labels = page.formLabels;
  const honeypot = String(
    formData.get(CONTACT_FORM_FIELD_NAMES.honeypot) ?? "",
  ).trim();
  const formToken = String(
    formData.get(CONTACT_FORM_FIELD_NAMES.formToken) ?? "",
  ).trim();

  if (honeypot.length > 0 || !formToken) {
    return {
      status: "error",
      message: labels.error,
      fieldErrors: {},
    };
  }

  try {
    if (!isContactFormTokenValid(formToken)) {
      return {
        status: "error",
        message: labels.error,
        fieldErrors: {},
      };
    }
  } catch {
    console.error("Contact form token secret is not configured correctly.");

    return {
      status: "error",
      message: labels.error,
      fieldErrors: {},
    };
  }

  const parsed = createContactFormSchema(page.validationMessages).safeParse(
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

  const requestHeaders = await headers();
  const clientIp = getClientIp(requestHeaders);

  if (!allowContactFormAttempt(clientIp)) {
    return {
      status: "error",
      message: labels.error,
      fieldErrors: {},
    };
  }

  const { name, email, message, phone } = parsed.data;
  const emailTemplate = page.emailTemplate;
  const resend = new Resend(resendApiKey);
  const templateValues = {
    companyName: siteContent.identity.name,
    senderName: name.replace(/[\r\n]+/g, " ").trim(),
  };
  const subject = interpolateContentTemplate(
    emailTemplate.subject,
    templateValues,
  );
  const heading = interpolateContentTemplate(
    emailTemplate.heading,
    templateValues,
  );
  const text = [
    `${emailTemplate.nameLabel}: ${name}`,
    `${emailTemplate.emailLabel}: ${email}`,
    `${emailTemplate.phoneLabel}: ${phone ?? emailTemplate.notProvided}`,
    "",
    `${emailTemplate.messageLabel}:`,
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [siteContent.contact.email],
      replyTo: email,
      subject,
      text,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: ${escapeHtml(siteTheme.colors.primary)};">
          <h1 style="font-size: 20px;">${escapeHtml(heading)}</h1>
          <p><strong>${escapeHtml(emailTemplate.nameLabel)}:</strong> ${escapeHtml(name)}</p>
          <p><strong>${escapeHtml(emailTemplate.emailLabel)}:</strong> ${escapeHtml(email)}</p>
          <p><strong>${escapeHtml(emailTemplate.phoneLabel)}:</strong> ${escapeHtml(phone ?? emailTemplate.notProvided)}</p>
          <p><strong>${escapeHtml(emailTemplate.messageLabel)}:</strong></p>
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
  } catch (error) {
    console.error("Resend threw while sending contact email.", error);

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
