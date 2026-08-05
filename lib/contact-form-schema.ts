import * as z from "zod";

export const CONTACT_FORM_FIELD_NAMES = {
  name: "name",
  email: "email",
  phone: "phone",
  message: "message",
  honeypot: "company",
  loadedAt: "loadedAt",
} as const;

export const CONTACT_FORM_LIMITS = {
  nameMin: 2,
  nameMax: 120,
  emailMax: 254,
  phoneMax: 40,
  messageMin: 20,
  messageMax: 2000,
} as const;

export const CONTACT_FORM_MIN_ELAPSED_MS = 2400;

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
    .max(CONTACT_FORM_LIMITS.phoneMax, "Indique um telefone mais curto.")
    .regex(/^[\d\s+().-]+$/, "Indique um telefone valido.")
    .optional(),
);

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(CONTACT_FORM_LIMITS.nameMin, "Indique o seu nome.")
    .max(CONTACT_FORM_LIMITS.nameMax, "Indique um nome mais curto."),
  email: z
    .string()
    .trim()
    .email("Indique um email valido.")
    .max(CONTACT_FORM_LIMITS.emailMax, "Indique um email mais curto."),
  phone: optionalPhoneSchema,
  message: z
    .string()
    .trim()
    .min(
      CONTACT_FORM_LIMITS.messageMin,
      "Escreva uma mensagem com mais algum contexto.",
    )
    .max(
      CONTACT_FORM_LIMITS.messageMax,
      "Reduza a mensagem para menos de 2000 caracteres.",
    ),
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;
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
