"use client";

import { Send } from "lucide-react";
import {
  useActionState,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { FormEvent } from "react";
import { sendContactMessage } from "@/app/contacto/actions";
import { Button } from "@/components/ui/button";
import { siteCopy } from "@/content";
import type { SiteContent } from "@/content/site";
import {
  CONTACT_FORM_FIELD_NAMES,
  CONTACT_FORM_LIMITS,
  contactFormPayloadFromFormData,
  createContactFormSchema,
  flattenContactFormErrors,
  initialContactFormState,
} from "@/lib/contact-form-schema";
import type {
  ContactFormField,
  ContactFormFieldErrors,
} from "@/lib/contact-form-schema";

type ContactFormLabels = SiteContent["pages"]["contact"]["formLabels"];
type ContactValidationMessages =
  SiteContent["pages"]["contact"]["validationMessages"];

type ContactFormProps = {
  formToken: string;
  labels: ContactFormLabels;
  validationMessages: ContactValidationMessages;
};

const inputClassName =
  "mt-2 w-full rounded-md border border-brand-primary/14 bg-white px-4 py-3 text-base text-brand-primary outline-none transition placeholder:text-brand-primary/35 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/15 motion-reduce:transition-none";

function hasErrors(errors: ContactFormFieldErrors) {
  return Object.values(errors).some((value) => value && value.length > 0);
}

export function ContactForm({
  formToken,
  labels,
  validationMessages,
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactFormState,
  );
  const [clientErrors, setClientErrors] = useState<ContactFormFieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const validationSchema = useMemo(
    () => createContactFormSchema(validationMessages),
    [validationMessages],
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const liveMessage = useMemo(() => {
    if (hasErrors(clientErrors)) {
      return siteCopy.contactForm.clientErrorMessage;
    }

    return state.message;
  }, [clientErrors, state.message]);

  function getFieldError(field: ContactFormField) {
    return clientErrors[field]?.[0] ?? state.fieldErrors?.[field]?.[0];
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const parsed = validationSchema.safeParse(
      contactFormPayloadFromFormData(formData),
    );

    if (!parsed.success) {
      event.preventDefault();
      setClientErrors(flattenContactFormErrors(parsed.error));
      return;
    }

    setClientErrors({});
  }

  const nameError = getFieldError("name");
  const emailError = getFieldError("email");
  const phoneError = getFieldError("phone");
  const messageError = getFieldError("message");

  return (
    <form
      action={formAction}
      className="relative grid gap-5"
      noValidate
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input
        defaultValue={formToken}
        name={CONTACT_FORM_FIELD_NAMES.formToken}
        type="hidden"
      />

      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="company">{siteCopy.contactForm.honeypotLabel}</label>
        <input
          aria-hidden="true"
          autoComplete="off"
          id="company"
          name={CONTACT_FORM_FIELD_NAMES.honeypot}
          tabIndex={-1}
          type="text"
        />
      </div>

      <div>
        <label
          className="text-sm font-semibold text-brand-primary"
          htmlFor="name"
        >
          {labels.name}
        </label>
        <input
          aria-describedby={nameError ? "name-error" : undefined}
          aria-invalid={Boolean(nameError)}
          autoComplete="name"
          className={inputClassName}
          id="name"
          maxLength={CONTACT_FORM_LIMITS.nameMax}
          minLength={CONTACT_FORM_LIMITS.nameMin}
          name={CONTACT_FORM_FIELD_NAMES.name}
          required
          type="text"
        />
        {nameError ? (
          <p className="mt-2 text-sm font-medium text-brand-accent" id="name-error">
            {nameError}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            className="text-sm font-semibold text-brand-primary"
            htmlFor="email"
          >
            {labels.email}
          </label>
          <input
            aria-describedby={emailError ? "email-error" : undefined}
            aria-invalid={Boolean(emailError)}
            autoComplete="email"
            className={inputClassName}
            id="email"
            maxLength={CONTACT_FORM_LIMITS.emailMax}
            name={CONTACT_FORM_FIELD_NAMES.email}
            required
            type="email"
          />
          {emailError ? (
            <p
              className="mt-2 text-sm font-medium text-brand-accent"
              id="email-error"
            >
              {emailError}
            </p>
          ) : null}
        </div>

        <div>
          <label
            className="text-sm font-semibold text-brand-primary"
            htmlFor="phone"
          >
            {labels.phone}
          </label>
          <input
            aria-describedby={phoneError ? "phone-error" : undefined}
            aria-invalid={Boolean(phoneError)}
            autoComplete="tel"
            className={inputClassName}
            id="phone"
            inputMode="tel"
            maxLength={CONTACT_FORM_LIMITS.phoneMax}
            name={CONTACT_FORM_FIELD_NAMES.phone}
            type="tel"
          />
          {phoneError ? (
            <p
              className="mt-2 text-sm font-medium text-brand-accent"
              id="phone-error"
            >
              {phoneError}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          className="text-sm font-semibold text-brand-primary"
          htmlFor="message"
        >
          {labels.message}
        </label>
        <textarea
          aria-describedby={messageError ? "message-error" : undefined}
          aria-invalid={Boolean(messageError)}
          className={`${inputClassName} min-h-44 resize-y`}
          id="message"
          maxLength={CONTACT_FORM_LIMITS.messageMax}
          minLength={CONTACT_FORM_LIMITS.messageMin}
          name={CONTACT_FORM_FIELD_NAMES.message}
          required
          rows={7}
        />
        {messageError ? (
          <p
            className="mt-2 text-sm font-medium text-brand-accent"
            id="message-error"
          >
            {messageError}
          </p>
        ) : null}
      </div>

      <div
        aria-live="polite"
        className={`min-h-7 text-sm font-semibold ${
          state.status === "success" ? "text-brand-success" : "text-brand-accent"
        }`}
      >
        {liveMessage}
      </div>

      <Button className="w-full sm:w-fit" disabled={pending} type="submit">
        {pending ? siteCopy.contactForm.pendingSubmit : labels.submit}
        <Send aria-hidden="true" size={18} strokeWidth={1.8} />
      </Button>
    </form>
  );
}
