import Link from "next/link";

type Agent = {
  name: string;
  tagline: string;
  outcomes: string[];
  capabilities: string[];
};

const agents: Agent[] = [
  {
    name: "Content Agent",
    tagline: "Plans, writes, and publishes SEO content on a schedule.",
    outcomes: [
      "Consistent publishing cadence",
      "Higher organic traffic over time",
      "Clear topical authority",
    ],
    capabilities: [
      "Keyword + intent clustering",
      "Briefs, drafts, and on-page optimization",
      "Internal linking suggestions",
      "Repurposing into social + email",
    ],
  },
  {
    name: "Lead Magnet Agent",
    tagline: "Turns visitors into leads with high-converting offers.",
    outcomes: [
      "More qualified opt-ins",
      "Higher landing page conversion",
      "Better list growth efficiency",
    ],
    capabilities: [
      "Offer positioning + copy frameworks",
      "Landing page sections + CTA strategy",
      "Form + friction reduction recommendations",
      "A/B test hypotheses and iterations",
    ],
  },
  {
    name: "Nurture Agent",
    tagline: "Automates follow-up so leads don’t go cold.",
    outcomes: [
      "Higher reply and booking rates",
      "Shorter time-to-close",
      "More revenue per lead",
    ],
    capabilities: [
      "Email + SMS sequence design",
      "Segmentation rules and triggers",
      "Personalization tokens + dynamic logic",
      "Re-engagement flows",
    ],
  },
  {
    name: "Conversion Agent",
    tagline: "Improves your funnel and landing pages with continuous optimization.",
    outcomes: [
      "More demos/bookings",
      "Lower cost per acquisition",
      "Better conversion rates site-wide",
    ],
    capabilities: [
      "Funnel audits + prioritized fixes",
      "Offer clarity and objection handling",
      "Heatmap-style behavior interpretation",
      "Experiment design and rollout plan",
    ],
  },
  {
    name: "Analytics Agent",
    tagline: "Keeps score and reports what’s working—weekly.",
    outcomes: [
      "Clear KPI visibility",
      "Faster decision-making",
      "Less wasted spend",
    ],
    capabilities: [
      "Event tracking plan",
      "Dashboard metrics definitions",
      "Weekly performance summaries",
      "Channel + landing page attribution checks",
    ],
  },
];

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
          <p className="mt-2 text-sm text-white/70">{agent.tagline}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
          Agent
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
            Outcomes
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {agent.outcomes.map((o) => (
              <li key={o} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
            Capabilities
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {agent.capabilities.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
        >
          Get Started
        </Link>
        <Link
          href="/pricing"
          className="rounded-md border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10"
        >
          View Pricing
        </Link>
      </div>
    </div>
  );
}

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Autonomous marketing agents
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Meet the Agents that run your marketing—24/7.
          </h1>

          <p className="mt-4 text-base text-white/70">
            Each agent is purpose-built to deliver a specific business outcome.
            Together, they form an always-on operating system for content, lead
            capture, nurturing, and conversion optimization.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
            >
              Book a Free Marketing Audit
            </Link>
            <Link
              href="/platform"
              className="rounded-md border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10"
            >
              See the Platform
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-xl font-semibold">How agents work together</h2>
          <p className="mt-3 text-sm text-white/70">
            Content attracts demand. Lead Magnet converts traffic to leads.
            Nurture drives follow-up. Conversion improves landing pages and
            offers. Analytics reports performance and priorities—so the system
            compounds week over week.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="rounded-md border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10"
            >
              Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
