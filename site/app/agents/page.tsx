import Link from "next/link";
import { AGENTS } from "./agentsData";

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs">
          Autonomous marketing agents
        </span>

        <h1 className="mt-6 text-4xl font-semibold">
          Meet the Agents that run your marketing—24/7.
        </h1>

        <p className="mt-4 max-w-2xl text-white/70">
          Each agent is purpose-built to deliver a specific business outcome.
          Together, they form an always-on operating system for growth.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black"
          >
            Book a Free Marketing Audit
          </Link>
          <Link
            href="/platform"
            className="rounded-md border border-white/20 px-5 py-2.5 text-sm"
          >
            See the Platform
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14">
        <div className="grid gap-5 md:grid-cols-2">
          {AGENTS.map((agent) => (
            <div
              key={agent.name}
              className="rounded-xl border border-white/15 bg-white/5 p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{agent.name}</h3>
                <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs">
                  Agent
                </span>
              </div>

              <p className="mt-2 text-sm text-white/70">{agent.tagline}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Outcomes
                  </p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {agent.outcomes.map((o) => (
                      <li key={o}>• {o}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Capabilities
                  </p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {agent.capabilities.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
