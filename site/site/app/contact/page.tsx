import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Get Started
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
          Tell us what you’re selling and what you want to improve. We’ll respond
          with next steps and a recommended rollout plan.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">What happens next</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Quick audit of your offer + funnel</li>
              <li>• Recommended agent deployment plan</li>
              <li>• Timeline + pricing options</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Send a message</div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
