// site/app/contact/page.tsx

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
          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="text-white/80">Name</span>
                <input
                  className="rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-white/30"
                  placeholder="Your name"
                  name="name"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="text-white/80">Email</span>
                <input
                  className="rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-white/30"
                  placeholder="you@company.com"
                  name="email"
                  type="email"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm">
              <span className="text-white/80">Company / Website</span>
              <input
                className="rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-white/30"
                placeholder="company.com"
                name="website"
              />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="text-white/80">What are you trying to achieve?</span>
              <textarea
                className="min-h-[120px] rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-white/30"
                placeholder="More qualified leads, better conversions, consistent content..."
                name="message"
              />
            </label>

            <button
              type="button"
              className="mt-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Send Request
            </button>

            <p className="text-xs text-white/50">
              This form is UI-only right now. If you want, I’ll wire it to email
              (Resend) or a CRM (HubSpot) next.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
