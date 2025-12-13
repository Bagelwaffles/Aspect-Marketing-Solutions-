"use server";

type FieldErrors = Partial<Record<"name" | "email" | "company" | "message", string>>;

export type ContactState = { ok: boolean; message: string; fieldErrors?: FieldErrors };

function isEmail(value: string) {
  // intentionally simple; avoids false negatives and dependency bloat
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(input: unknown) {
  return typeof input === "string" ? input.trim() : "";
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot (bots fill hidden fields)
  const website = clean(formData.get("website"));
  if (website) {
    return { ok: false, message: "Submission rejected." };
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const company = clean(formData.get("company"));
  const message = clean(formData.get("message"));

  const fieldErrors: FieldErrors = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your email.";
  else if (!isEmail(email)) fieldErrors.email = "Please enter a valid email.";
  if (!message) fieldErrors.message = "Please enter a message.";
  if (message && message.length > 2000) fieldErrors.message = "Message is too long (max 2000 chars).";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  // TODO: wire to email/CRM (Resend, Postmark, HubSpot, etc.)
  // For now: server-side log so you have an audit trail in hosting logs.
  console.log("[contact] submission", { name, email, company, message });

  return { ok: true, message: "Thanks — we’ll get back to you shortly." };
}
