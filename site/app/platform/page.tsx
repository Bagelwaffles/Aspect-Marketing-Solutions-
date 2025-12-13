import Link from "next/link";

export default function PlatformPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Hero */}
      <section className="mb-20 text-center">
        <span className="inline-block rounded-full border border-white/15 px-4 py-1 text-xs text-white/70">
          AI Marketing Operations Platform
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          One platform. Every growth system.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-white/70">
          Aspect Marketing Solutions is an always-on marketing operations system.
          Agents work together to attract demand, capture leads, nurture prospects,
          optimize conversions, and report what’s working — automatically.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/agents"
            className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
          >
            Meet the Agents
          </Link>
          <Link
            href="/pricing"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="mb-10 text-2xl font-semibold">
          How the platform works
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Demand Creation",
              desc: "Content and SEO agents publish consistently to build authority and bring qualified traffic."
            },
            {
              title: "Lead Capture",
              desc: "Lead Magnet and Conversion agents turn visitors into leads using optimized offers and pages."
            },
            {
              title: "Nurture & Follow-Up",
              desc: "Nurture agents automatically follow up across email and SMS so leads never go cold."
            },
            {
              title: "Optimization & Insights",
              desc: "Conversion and Analytics agents continuously test, improve, and report performance."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/15 bg-white/5 p-6"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-20">
        <h2 className="mb-10 text-2xl font-semibold">
          What you get
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Consistent inbound pipeline",
            "Higher conversion rates",
            "Lower cost per acquisition",
            "Faster time-to-close",
            "Clear weekly performance reporting",
            "A system that compounds over time"
          ].map((outcome) => (
            <div
              key={outcome}
              className="rounded-xl border border-white/15 bg-white/5 p-5 text-sm"
            >
              {outcome}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/15 bg-white/5 p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to see the system in action?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Book a free marketing audit or explore the agents that power the platform.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
          >
            Book a Free Audit
          </Link>
          <Link
            href="/agents"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5"
          >
            Explore Agents
          </Link>
        </div>
      </section>
    </main>
  );
}
