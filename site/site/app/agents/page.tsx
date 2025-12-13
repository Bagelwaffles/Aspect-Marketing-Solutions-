import Link from "next/link";
import { AGENTS } from "../agentsData";
import { ArrowRight } from "lucide-react";

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          Autonomous marketing agents
        </span>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          Meet the Agents that run your marketing—24/7.
        </h1>

        <p className="mt-4 max-w-3xl text-sm text-white/70 md:text-base">
          Each agent is purpose-built to deliver a specific business outcome.
          Together, they form an always-on operating system for content, lead
          capture, nurturing, and conversion optimization.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Book a Free Marketing Audit
          </Link>
          <Link
            href="/platform"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            See the Platform <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-5 md:grid-cols-2">
          {AGENTS.map((agent) => (
            <div
              key={agent.name}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">{agent.name}</div>
                  <div className="mt-1 text-sm text-white/70">{agent.tagline}</div>
                </div>
                <span className="rounded-full border border-white/15 bg-black px-3 py-1 text-xs text-white/70">
                  {agent.tag}
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                  <div className="text-xs font-semibold text-white/80">
                    OUTCOMES
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-white/70">
                    {agent.outcomes.map((o) => (
                      <li key={o}>• {o}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                  <div className="text-xs font-semibold text-white/80">
                    CAPABILITIES
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-white/70">
                    {agent.capabilities.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">How agents work together</div>
          <p className="mt-2 text-sm text-white/70">
            Content attracts demand. Lead Magnet converts traffic to leads. Nurture
            drives follow-up. Conversion improves landing pages and offers.
            Analytics reports performance and prioritizes next steps—so the system
            compounds week over week.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {["Content", "Lead Magnet", "Nurture", "Conversion", "Analytics"].map(
              (step, i) => (
                <div
                  key={step}
                  className="rounded-lg border border-white/10 bg-black/30 p-4"
                >
                  <div className="text-xs text-white/60">STEP {i + 1}</div>
                  <div className="mt-1 font-semibold">{step}</div>
                </div>
              )
            )}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
