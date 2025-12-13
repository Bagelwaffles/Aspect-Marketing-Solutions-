import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-black">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Aspect Marketing Solutions
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/platform" className="text-sm hover:underline">
            Platform
          </Link>
          <Link href="/agents" className="text-sm hover:underline">
            Agents
          </Link>
          <Link href="/pricing" className="text-sm hover:underline">
            Pricing
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-md bg-black px-4 py-2 text-sm text-white"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
