import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
          AI Marketing Operations System
        </span>

        <h1 className="mt-6 text-5xl font-semibold leading-tight">
          Your marketing team that never sleeps.
        </h1>

        <p className="mt-5 max-w-2xl text-white/70">
          Aspect Marketing Solutions delivers AI-powered marketing automation
          that captures leads, nurtures prospects, and converts customers 24/7 —
          while you focus on growth.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/agents"
            className="rounded-md border border-white/20 px-5 py-2 text-sm font-medium hover:bg-white/10"
          >
            Meet the Agents
          </Link>

          <Link
            href="/platform"
            className="rounded-md bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90"
          >
            See the Platform
          </Link>
        </div>
      </section>
    </main>
  );
}
