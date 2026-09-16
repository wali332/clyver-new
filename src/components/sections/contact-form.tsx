"use client";

import { FormEvent, useRef, useState } from "react";
import { siteConfig } from "@/lib/content/navigation";
import {
  validateContactFields,
  type ContactFieldErrors,
  type ContactFields,
} from "@/lib/contact-validation";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/movpzprb";

const fieldClass =
  "min-h-11 w-full rounded-xl border bg-paper px-4 text-sm text-ink outline-none transition-colors focus-visible:border-ink/30 focus-visible:ring-2 focus-visible:ring-ink/10 disabled:cursor-not-allowed disabled:opacity-60";

function getFields(form: HTMLFormElement): ContactFields {
  const formData = new FormData(form);
  return {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = state === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const honeypot = String(new FormData(form).get("company-website") ?? "");
    if (honeypot) return;

    const fields = getFields(form);
    const errors = validateContactFields(fields);

    setFieldErrors(errors);
    setErrorMessage("");

    if (Object.keys(errors).length > 0) {
      return;
    }

    setState("submitting");

    try {
      const formData = new FormData(form);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || result?.ok === false) {
        throw new Error(result?.error ?? "submission_failed");
      }

      form.reset();
      setFieldErrors({});
      setState("success");
    } catch {
      setState("error");
      setErrorMessage(
        `We couldn't send your message right now. Please try again shortly, or email ${siteConfig.contactEmail} with your name, company, and a brief description of the problem you are trying to solve.`,
      );
    }
  }

  return (
    <form
      ref={formRef}
      className="relative min-w-0 max-w-full space-y-5"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company-website">Company website</label>
        <input id="company-website" name="company-website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={isSubmitting}
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={`${fieldClass} ${fieldErrors.name ? "border-red-500/50" : "border-line"}`}
          />
          {fieldErrors.name ? (
            <p id="name-error" className="mt-2 text-sm text-red-700" role="alert">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={isSubmitting}
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={`${fieldClass} ${fieldErrors.email ? "border-red-500/50" : "border-line"}`}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-700" role="alert">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink">
          Company <span className="text-muted">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          disabled={isSubmitting}
          autoComplete="organization"
          className={`${fieldClass} border-line`}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          What are you trying to solve?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={`min-h-[7.5rem] w-full max-w-full resize-y rounded-xl border bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus-visible:border-ink/30 focus-visible:ring-2 focus-visible:ring-ink/10 disabled:cursor-not-allowed disabled:opacity-60 ${
            fieldErrors.message ? "border-red-500/50" : "border-line"
          }`}
          placeholder="Describe the business problem, current constraints, and what success would look like."
        />
        {fieldErrors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-700" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting || state === "success"}
        >
          {isSubmitting ? "Sending..." : "Tell Us What You're Solving"}
        </Button>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="break-words text-sm text-muted underline-offset-4 hover:text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          Or email {siteConfig.contactEmail}
        </a>
      </div>

      <div aria-live="polite" className="min-h-6 space-y-3">
        {state === "success" ? (
          <p className="text-sm text-ink">
            Thank you. We&apos;ve received your message and will respond with thoughtful
            questions before any implementation conversation begins.
          </p>
        ) : null}
        {state === "error" ? (
          <p className="text-sm text-muted" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
