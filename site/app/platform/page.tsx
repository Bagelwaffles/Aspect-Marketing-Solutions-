// site/app/platform/page.tsx

import Link from "next/link";

const sections = [
  {
    title: "Agent orchestration",
    desc: "Coordinate content, lead capture, nurture, and CRO with clear priorities and handoffs.",
    bullets: ["Defined workflows", "Shared context", "Continuous optimization"],
  },
  {
    title: "Tracking + attribution",
    desc: "Know what’s working and why. Track conversion events and map channel impact.",
    bullets: ["Event plan", "Attribution checks", "KPI dashboards"],
  },
  {
    title: "Conversion system",
    desc: "Ship improvements in a loop: insights → test → rollout → measure.",
    bullets: ["Experiment backlog", "Prioritized fixes", "Landing page iteration"],
  },
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          Platform overview
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          A marketing operating system—built for outcomes.
        </h1>

        <p className="mt-3 max-w-3xl text-white/70">
          The platform is the coordination layer: it keeps agents aligned,
          ensures the right work happens next, and delivers compounding wins.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Get Started
          </Link>
          <Link
            href="/agents"
            className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Explore Agents
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/15 bg-white/5 p-5"
            >
              <p className="text-lg font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-white/70">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-7">
          <h2 className="text-xl font-semibold tracking-tight">
            Implementation approach
          </h2>
          <ol className="mt-3 space-y-2 text-sm text-white/70">
            <li>1) Baseline audit: funnel, tracking, offers, and content.</li>
            <li>2) Deploy the first agent: quickest impact for your business.</li>
            <li>3) Build the weekly loop: report → prioritize → ship → measure.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
