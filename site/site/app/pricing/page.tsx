import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$1,500/mo",
    bestFor: "Local services + early-stage B2B",
    bullets: [
      "Content cadence + basic lead capture",
      "Light nurture sequences",
      "Monthly reporting + priorities",
    ],
  },
  {
    name: "Growth",
    price: "$3,500/mo",
    bestFor: "Teams wanting consistent pipeline growth",
    bullets: [
      "Full agent system deployment",
      "Offer + landing conversion optimization",
      "Weekly reporting + experiments",
      "Attribution + KPI tracking improvements",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    bestFor: "High-volume funnels + multi-channel growth",
    bullets: [
      "Multiple funnels and offers",
      "Advanced segmentation + lifecycle automations",
      "Conversion program + testing roadmap",
      "Custom dashboards + performance reviews",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Pricing
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-white/70 md:text-base">
          Choose the level of deployment. Every tier is designed around measurable
          outcomes—not deliverables for deliverables’ sake.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "rounded-xl border p-6",
                t.featured
                  ? "border-white/25 bg-white/10"
                  : "border-white/10 bg-white/5",
              ].join(" ")}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold">{t.name}</div>
                  <div className="mt-1 text-sm text-white/70">{t.bestFor}</div>
                </div>
                {t.featured && (
                  <span className="rounded-full border border-white/15 bg-black px-3 py-1 text-xs text-white/70">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="mt-5 text-3xl font-semibold">{t.price}</div>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {t.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={[
                  "mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold",
                  t.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
                ].join(" ")}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">What’s included in every plan</div>
          <div className="mt-3 grid gap-4 text-sm text-white/70 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/30 p-4">
              KPI definitions + reporting cadence
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-4">
              Prioritized roadmap of fixes + experiments
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-4">
              Ongoing optimization and iteration
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
