"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Aspect Marketing: New Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@aspectmarketing.solutions?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs text-white/70">Name</label>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm text-white outline-none focus:border-white/30"
          />
        </div>
        <div>
          <label className="text-xs text-white/70">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm text-white outline-none focus:border-white/30"
          />
        </div>
      </div>

      <div>
        <label className="text-xs text-white/70">Company</label>
        <input
          name="company"
          className="mt-2 w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm text-white outline-none focus:border-white/30"
        />
      </div>

      <div>
        <label className="text-xs text-white/70">What do you want to improve?</label>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-md border border-white/15 bg-black px-3 py-2 text-sm text-white outline-none focus:border-white/30"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
      >
        Send
      </button>

      {status === "sent" && (
        <div className="text-xs text-white/60">
          If your email client didn’t open, copy/paste your message and email it to{" "}
          <span className="text-white">hello@aspectmarketing.solutions</span>.
        </div>
      )}
    </form>
  );
}
