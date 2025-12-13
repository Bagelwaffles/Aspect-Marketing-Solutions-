import Link from "next/link";
import { AGENTS } from "./agentsData";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function Stat({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-lg border border-white/10 bg-black p-2">
          {icon}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-1 text-sm text-white/70">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const preview = AGENTS.slice(0, 4);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <Pill>AI Marketing Operations System</Pill>

        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Your marketing team that never sleeps.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">
          Aspect Marketing Solutions delivers AI-powered marketing automation that
          captures leads, nurtures prospects, and converts customers 24/7—while
          you focus on growth.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/agents"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Meet the Agents <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/platform"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            See the Platform
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Stat
            title="Always-on execution"
            desc="Agents run the playbooks continuously, not just when you have time."
            icon={<Zap className="h-5 w-5 text-white" />}
          />
          <Stat
            title="Conversion-first system"
            desc="Every output maps to pipeline outcomes—traffic, leads, bookings, revenue."
            icon={<ShieldCheck className="h-5 w-5 text-white" />}
          />
          <Stat
            title="Weekly clarity"
            desc="Clean reporting, prioritized fixes, and measurable progress."
            icon={<Sparkles className="h-5 w-5 text-white" />}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Core Agents</h2>
            <p className="mt-2 text-sm text-white/70">
              Each agent is purpose-built to deliver a specific business outcome.
            </p>
          </div>
          <Link
            href="/agents"
            className="hidden text-sm font-semibold text-white/80 hover:text-white md:inline-flex"
          >
            View all agents <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {preview.map((agent) => (
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
                    {agent.outcomes.slice(0, 3).map((o) => (
                      <li key={o}>• {o}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                  <div className="text-xs font-semibold text-white/80">
                    CAPABILITIES
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-white/70">
                    {agent.capabilities.slice(0, 3).map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Book a Free Marketing Audit
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
