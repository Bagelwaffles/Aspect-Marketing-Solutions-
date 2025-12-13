import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
