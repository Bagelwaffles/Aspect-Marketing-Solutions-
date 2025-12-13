// site/app/page.tsx

import Link from "next/link";
import { AGENTS } from "./agents/agentsData";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-40 left-10 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-60 right-10 h-[380px] w-[380px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            AI Marketing Operations System
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Your marketing team that never sleeps.
          </h1>

          <p className="mt-5 max-w-2xl text-white/70 md:text-lg">
            Aspect Marketing Solutions delivers AI-powered marketing automation
            that captures leads, nurtures prospects, and converts customers 24/7
            — while you focus on growth.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/agents"
              className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Meet the Agents
            </Link>
            <Link
              href="/platform"
              className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              See the Platform
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Always-on execution",
                desc: "Agents run continuously across content, lead capture, nurture, and CRO.",
              },
              {
                title: "Outcome-driven",
                desc: "Each agent is designed around a business outcome—not a generic feature set.",
              },
              {
                title: "Weekly reporting",
                desc: "Visibility into what’s working, what’s not, and what to do next.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm font-medium">{f.title}</p>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents preview */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Agents, purpose-built.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Deploy specialized agents that work together to compound growth
              over time.
            </p>
          </div>
          <Link
            href="/agents"
            className="hidden rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10 md:inline-flex"
          >
            View all agents
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {AGENTS.slice(0, 4).map((agent) => (
            <div
              key={agent.name}
              className="rounded-xl border border-white/15 bg-white/5 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold">{agent.name}</p>
                  <p className="mt-1 text-sm text-white/70">{agent.tagline}</p>
                </div>
                <span className="rounded-full border border-white/15 bg-black px-3 py-1 text-xs text-white/70">
                  Agent
                </span>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-semibold text-white/80">OUTCOMES</p>
                  <ul className="mt-2 space-y-1 text-sm text-white/70">
                    {agent.outcomes.map((o) => (
                      <li key={o}>• {o}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-semibold text-white/80">
                    CAPABILITIES
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-white/70">
                    {agent.capabilities.slice(0, 4).map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-md border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 md:p-10">
            <h3 className="text-2xl font-semibold tracking-tight">
              Ready to run marketing like an operating system?
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              We’ll help you pick the right starting agent, set up tracking, and
              launch the first automated growth loop.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Book a Free Marketing Audit
              </Link>
              <Link
                href="/agents"
                className="rounded-md border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Explore the Agents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
