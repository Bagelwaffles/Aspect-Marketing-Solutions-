import Link from "next/link";

const blocks = [
  {
    title: "Systemized execution",
    desc: "Repeatable playbooks that ship content, offers, sequences, and landing improvements without manual overhead.",
  },
  {
    title: "Outcome mapping",
    desc: "Every activity maps to a business KPI: traffic, opt-ins, booked calls, CAC, LTV, and revenue.",
  },
  {
    title: "Continuous optimization",
    desc: "Weekly reporting + prioritized fixes. Compounding improvements instead of random marketing tasks.",
  },
];

const workflow = [
  {
    title: "Audit + Strategy",
    desc: "Offer clarity, ICP positioning, funnel and tracking review. Align the system to your pipeline goals.",
  },
  {
    title: "Build + Deploy",
    desc: "Install the assets: lead magnet, landing pages, follow-up sequences, and reporting infrastructure.",
  },
  {
    title: "Run + Optimize",
    desc: "Agents operate weekly: publishing, experiments, conversion upgrades, and performance reporting.",
  },
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Platform
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-white/70 md:text-base">
          This isn’t “AI content.” It’s a complete marketing operating system:
          capture demand, convert traffic, nurture leads, optimize conversion, and
          report progress—week after week.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-sm font-semibold">{b.title}</div>
              <div className="mt-2 text-sm text-white/70">{b.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link
            href="/agents"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Meet the Agents
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">How we deploy it</div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {workflow.map((w, idx) => (
              <div
                key={w.title}
                className="rounded-lg border border-white/10 bg-black/30 p-5"
              >
                <div className="text-xs text-white/60">PHASE {idx + 1}</div>
                <div className="mt-1 font-semibold">{w.title}</div>
                <div className="mt-2 text-sm text-white/70">{w.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-white/70">
            Outcome: a reliable, repeatable system that improves over time and is
            measurable end-to-end.
          </div>
        </div>
      </section>
    </main>
  );
}
