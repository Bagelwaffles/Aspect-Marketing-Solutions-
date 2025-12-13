import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="font-semibold text-white">Aspect Marketing Solutions</div>
          <p className="mt-2 text-sm text-white/70">
            Autonomous marketing agents that run the system—content, lead capture,
            nurture, conversion, and reporting—24/7.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Pages</div>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link className="text-white/70 hover:text-white" href="/platform">
              Platform
            </Link>
            <Link className="text-white/70 hover:text-white" href="/agents">
              Agents
            </Link>
            <Link className="text-white/70 hover:text-white" href="/pricing">
              Pricing
            </Link>
            <Link className="text-white/70 hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Start</div>
          <p className="mt-3 text-sm text-white/70">
            Want the system installed for your business? We’ll audit, deploy, and
            optimize.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            Book a Free Marketing Audit
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs text-white/60">
          <span>© {new Date().getFullYear()} Aspect Marketing Solutions</span>
          <span>Built for speed. Tuned for conversion.</span>
        </div>
      </div>
    </footer>
  );
}
