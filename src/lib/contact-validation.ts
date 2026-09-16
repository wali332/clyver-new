export type ContactFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>;

export function validateContactFields(fields: ContactFields): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!fields.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.message.trim()) {
    errors.message = "Please describe the problem you're trying to solve.";
  } else if (fields.message.trim().length < 20) {
    errors.message = "Please share a bit more detail so we can respond thoughtfully.";
  }

  return errors;
}
