import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-[9px] bg-caramel-500 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 8h1a4 4 0 010 8h-1" />
                  <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
                  <line x1="6" y1="2" x2="6" y2="4" />
                  <line x1="10" y1="2" x2="10" y2="4" />
                  <line x1="14" y1="2" x2="14" y2="4" />
                </svg>
              </span>
              <span className="font-display text-lg font-bold">
                Belo&apos;Coffee
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              A specialty coffee shop in the heart of Georgia. Every sip crafted
              with intention, every visit a reason to return.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-caramel-400 mb-4">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between gap-8">
                <span>Mon – Thu</span>
                <span>7:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between gap-8">
                <span>Friday</span>
                <span>7:00 AM – 11:00 PM</span>
              </li>
              <li className="flex justify-between gap-8">
                <span>Saturday</span>
                <span>8:00 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between gap-8">
                <span>Sunday</span>
                <span>9:00 AM – 6:00 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-caramel-400 font-medium">
              Open Mic — Fri 7 PM &nbsp;·&nbsp; Coffee Tasting — Sat 10 AM
            </p>
          </div>

          {/* Contact + Links */}
          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-caramel-400 mb-4">
              Find Us
            </h3>
            <address className="not-italic text-sm text-white/70 leading-relaxed mb-6">
              123 Peach Tree Lane
              <br />
              Savannah, Georgia 31401
            </address>
            <a
              href="tel:+19125550182"
              className="block text-sm text-white/70 hover:text-white mb-1 transition-colors"
            >
              (912) 555-0182
            </a>
            <a
              href="mailto:hello@belocoffee.com"
              className="block text-sm text-white/70 hover:text-white mb-6 transition-colors"
            >
              hello@belocoffee.com
            </a>
            <nav className="flex gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs text-white/45 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/30">
          <span>
            © {new Date().getFullYear()} Belo&apos;Coffee. All rights reserved.
          </span>
          <span>Made with love in Georgia 🍑</span>
        </div>
      </div>
    </footer>
  );
}
