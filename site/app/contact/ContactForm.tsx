"use client";

import { useFormState, useFormStatus } from "react-dom";
import type { ContactState } from "./actions";
import { submitContact } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

const initialState: ContactState = { ok: false, message: "" };

export default function ContactForm() {
  const [state, action] = useFormState(submitContact, initialState);
  const fieldErrors = !state.ok ? state.fieldErrors ?? {} : {};

  return (
    <form action={action} className="mt-8 space-y-5">
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" autoComplete="off" tabIndex={-1} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-white/80" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className={`mt-2 w-full rounded-md border bg-black px-3 py-2 text-sm text-white outline-none ${
              fieldErrors.name ? "border-red-500/70" : "border-white/15"
            }`}
            placeholder="Your name"
          />
          {fieldErrors.name && (
            <p className="mt-2 text-xs text-red-400">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-white/80" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`mt-2 w-full rounded-md border bg-black px-3 py-2 text-sm text-white outline-none ${
              fieldErrors.email ? "border-red-500/70" : "border-white/15"
            }`}
            placeholder="you@company.com"
          />
          {fieldErrors.email && (
            <p className="mt-2 text-xs text-red-400">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm text-white/80" htmlFor="company">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          className={`mt-2 w-full rounded-md border bg-black px-3 py-2 text-sm text-white outline-none ${
            fieldErrors.company ? "border-red-500/70" : "border-white/15"
          }`}
          placeholder="Company name"
        />
      </div>

      <div>
        <label className="text-sm text-white/80" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={`mt-2 w-full rounded-md border bg-black px-3 py-2 text-sm text-white outline-none ${
            fieldErrors.message ? "border-red-500/70" : "border-white/15"
          }`}
          placeholder="Tell us what you’re trying to achieve…"
        />
        {fieldErrors.message && (
          <p className="mt-2 text-xs text-red-400">{fieldErrors.message}</p>
        )}
      </div>

      {state.message && (
        <div
          className={`rounded-md border px-4 py-3 text-sm ${
            state.ok
              ? "border-emerald-500/30 text-emerald-200"
              : "border-white/15 text-white/80"
          }`}
        >
          {state.message}
        </div>
      )}

      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
