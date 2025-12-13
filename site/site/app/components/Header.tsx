"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/platform", label: "Platform" },
  { href: "/agents", label: "Agents" },
  { href: "/pricing", label: "Pricing" },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-white">
          <span className="text-white">Aspect</span>{" "}
          <span className="text-white/70">Marketing Solutions</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "text-sm transition",
                  active ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/agents"
            className="hidden rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 md:inline-flex"
          >
            Meet the Agents
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
