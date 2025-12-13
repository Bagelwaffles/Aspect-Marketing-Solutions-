import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold text-black">
          Aspect Marketing Solutions
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/platform"
            className="text-sm font-medium text-gray-700 hover:underline"
          >
            Platform
          </Link>
          <Link
            href="/agents"
            className="text-sm font-medium text-gray-700 hover:underline"
          >
            Agents
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-700 hover:underline"
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
