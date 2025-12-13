export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
                AI Marketing Operations System
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                Your marketing team that never sleeps.
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Aspect Marketing Solutions delivers AI-powered marketing automation
                that captures leads, nurtures prospects, and converts customers 24/7 —
                while you focus on growth.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900"
                >
                  Get Your Free Marketing Audit
                </a>
                <a
                  href="/platform"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  See the Platform
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="rounded-md border border-gray-200 px-3 py-2">
                  SEO + Content Engine
                </span>
                <span className="rounded-md border border-gray-200 px-3 py-2">
                  Lead Capture + Qualification
                </span>
                <span className="rounded-md border border-gray-200 px-3 py-2">
                  Conversion Optimization
                </span>
              </div>
            </div>

            {/* Right-side “proof” card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-900">
                What this replaces
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                If you’re still seeing the “To get started, edit page.tsx” screen,
                this file has not been saved (or you edited a different folder).
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-medium text-gray-500">Outcome</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    More qualified leads
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Automated capture, scoring, and routing.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-medium text-gray-500">Outcome</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    Consistent content
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    SEO pages and posts on a schedule.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-medium text-gray-500">Outcome</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    Higher conversion
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    A/B testing and landing optimization.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-medium text-gray-500">Outcome</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    Less busywork
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Agents handle repetitive ops tasks.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-500">
                  Integrations (examples)
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  HubSpot, Zapier, Make, OpenAI, Email/SMS platforms, analytics tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / PAIN */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Your current marketing stack is costing you time and leads
              </h2>
              <p className="mt-3 text-gray-600">
                Teams often lose opportunities due to fragmented tools, inconsistent
                follow-up, and manual workflows that do not scale.
              </p>
            </div>

            <ul className="grid gap-3">
              {[
                "You’re paying for tools that don’t talk to each other",
                "Leads go cold while the team is busy",
                "Content and SEO fall behind schedule",
                "No consistent testing or conversion optimization",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-gray-200 bg-white p-4 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTION / PILLARS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900">
              Meet AspectAI: an autonomous marketing operations system
            </h2>
            <p className="mt-3 text-gray-600">
              Four pillars that work together to drive measurable growth.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <PillarCard
              title="Content Engine"
              desc="AI agents write, schedule, and publish SEO-optimized content across channels."
              bullets={[
                "SEO pages and blog posts",
                "Content calendar automation",
                "On-brand tone and structure",
              ]}
              href="/platform"
              cta="Explore content automation"
            />
            <PillarCard
              title="Lead Magnet"
              desc="Automated lead capture, qualification, and nurture sequences — without extra headcount."
              bullets={[
                "Forms + enrichment",
                "Lead scoring + routing",
                "Email/SMS nurture flows",
              ]}
              href="/agents"
              cta="See agents in action"
            />
            <PillarCard
              title="Conversion Optimizer"
              desc="Real-time landing-page improvements and A/B testing to increase conversion rates."
              bullets={[
                "Landing page optimization",
                "A/B testing framework",
                "Analytics-driven iteration",
              ]}
              href="/pricing"
              cta="View packages"
            />
            <PillarCard
              title="Revenue Operations"
              desc="Connect your stack end-to-end so lead data flows cleanly from first click to close."
              bullets={[
                "Integrations + workflows",
                "CRM hygiene and automation",
                "Reporting and attribution",
              ]}
              href="/contact"
              cta="Request an audit"
            />
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Ready to see what’s possible in 14 days?
                </h3>
                <p className="mt-1 text-gray-600">
                  We’ll map your funnel, identify quick wins, and propose an automation plan.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PillarCard({
  title,
  desc,
  bullets,
  href,
  cta,
}: {
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>

      <ul className="mt-4 grid gap-2 text-sm text-gray-700">
        {bullets.map((b) => (
          <li key={b} className="rounded-md bg-gray-50 px-3 py-2">
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href={href}
          className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
        >
          {cta} →
        </a>
      </div>
    </div>
  );
}
