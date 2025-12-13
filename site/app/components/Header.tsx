import Link from "next/link";

const navItems = [
  { label: "Platform", href: "/platform" },
  { label: "Agents", href: "/agents" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white"
        >
          Aspect <span className="text-white/60">Marketing Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Link
            href="/contact"
            className="rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
