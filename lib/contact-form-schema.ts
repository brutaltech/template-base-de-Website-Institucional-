import * as z from "zod";
import type { ContactValidationMessages } from "@/content/site";

export const CONTACT_FORM_FIELD_NAMES = {
  name: "name",
  email: "email",
  phone: "phone",
  message: "message",
  honeypot: "company",
  formToken: "formToken",
} as const;

export const CONTACT_FORM_LIMITS = {
  nameMin: 2,
  nameMax: 120,
  emailMax: 254,
  phoneMax: 40,
  messageMin: 20,
  messageMax: 2000,
} as const;

export function createContactFormSchema(
  messages: ContactValidationMessages,
) {
  const optionalPhoneSchema = z.preprocess(
    (value) => {
      if (typeof value !== "string") {
        return value;
      }

      const trimmed = value.trim();
      return trimmed.length > 0 ? trimmed : undefined;
    },
    z
      .string()
      .max(CONTACT_FORM_LIMITS.phoneMax, messages.phoneMax)
      .regex(/^[\d\s+().-]+$/, messages.phoneInvalid)
      .optional(),
  );

  return z.object({
    name: z
      .string()
      .trim()
      .min(CONTACT_FORM_LIMITS.nameMin, messages.nameMin)
      .max(CONTACT_FORM_LIMITS.nameMax, messages.nameMax),
    email: z
      .string()
      .trim()
      .email(messages.emailInvalid)
      .max(CONTACT_FORM_LIMITS.emailMax, messages.emailMax),
    phone: optionalPhoneSchema,
    message: z
      .string()
      .trim()
      .min(CONTACT_FORM_LIMITS.messageMin, messages.messageMin)
      .max(CONTACT_FORM_LIMITS.messageMax, messages.messageMax),
  });
}

export type ContactFormFields = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
export type ContactFormField = keyof ContactFormFields;
export type ContactFormFieldErrors = Partial<Record<ContactFormField, string[]>>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: ContactFormFieldErrors;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

export function contactFormPayloadFromFormData(formData: FormData) {
  return {
    name: formData.get(CONTACT_FORM_FIELD_NAMES.name),
    email: formData.get(CONTACT_FORM_FIELD_NAMES.email),
    phone: formData.get(CONTACT_FORM_FIELD_NAMES.phone),
    message: formData.get(CONTACT_FORM_FIELD_NAMES.message),
  };
}

export function flattenContactFormErrors(error: z.ZodError) {
  return z.flattenError(error).fieldErrors as ContactFormFieldErrors;
}
