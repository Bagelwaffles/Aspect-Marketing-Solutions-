// site/app/layout.tsx

import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Aspect Marketing Solutions",
  description: "AI-powered marketing agents that run your growth 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Header />
        {children}
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-6xl px-6 text-sm text-white/60">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Aspect Marketing Solutions</p>
              <p className="text-white/50">
                Autonomous agents for content, lead capture, nurture, and
                conversion.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
