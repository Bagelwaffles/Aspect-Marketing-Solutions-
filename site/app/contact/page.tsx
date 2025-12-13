// site/app/contact/page.tsx

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Get Started
        </h1>

        <p className="mt-3 text-white/70">
          Tell us a bit about your business. We’ll reply with recommended next
          steps and a launch plan.
        </p>

        <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

