// site/app/pricing/page.tsx

import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$1,500/mo",
    bestFor: "Small teams wanting consistency.",
    features: [
      "1 core agent (Content or Lead Magnet)",
      "Monthly performance review",
      "Basic tracking recommendations",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$3,500/mo",
    bestFor: "Teams ready to compound results.",
    featured: true,
    features: [
      "2–3 agents (Content + Lead Magnet + Nurture)",
      "Bi-weekly optimization sprints",
      "Attribution checks + KPI dashboard",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    bestFor: "Full-funnel teams and agencies.",
    features: [
      "Full agent suite + CRO cadence",
      "Weekly reporting + executive summary",
      "Experiment backlog + rollout plan",
      "Dedicated Slack / async channel",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Pricing
        </h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Simple tiers. Clear outcomes. Start lean, then expand the agent system
          as you grow.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "rounded-2xl border p-6",
                t.featured
                  ? "border-white/30 bg-white/10"
                  : "border-white/15 bg-white/5",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold">{t.name}</p>
                  <p className="mt-1 text-sm text-white/70">{t.bestFor}</p>
                </div>
                {t.featured ? (
                  <span className="rounded-full border border-white/20 bg-black px-3 py-1 text-xs text-white/80">
                    Most Popular
                  </span>
                ) : null}
              </div>

              <p className="mt-5 text-3xl font-semibold tracking-tight">
                {t.price}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex w-full justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-7">
          <h2 className="text-xl font-semibold tracking-tight">
            Not sure what tier fits?
          </h2>
          <p className="mt-2 text-sm text-white/70">
            We’ll recommend the best starting point based on your funnel, goals,
            and current marketing bandwidth.
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              Book a quick call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
