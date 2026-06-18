"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ReservationModal from "@/components/ReservationModal";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-8 h-8 rounded-[9px] bg-espresso-800 flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8h1a4 4 0 010 8h-1" />
                <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
                <line x1="6" y1="2" x2="6" y2="4" />
                <line x1="10" y1="2" x2="10" y2="4" />
                <line x1="14" y1="2" x2="14" y2="4" />
              </svg>
            </span>
            <span className="font-display text-[1.125rem] font-bold text-espresso-800 leading-none">
              Belo&apos;Coffee
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3.5 py-2 rounded-lg text-[0.9rem] transition-all duration-150 ${
                    active
                      ? "bg-cream-100 text-espresso-800 font-semibold"
                      : "text-espresso-800/55 font-medium hover:text-espresso-800 hover:bg-cream-100"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-caramel-500 hover:bg-caramel-600 text-white font-semibold text-[0.9rem] px-5 py-2.5 rounded-full transition-all duration-150 hover:-translate-y-px hover:shadow-md shrink-0"
          >
            Reserve a Table
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-espresso-800 hover:bg-cream-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </nav>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-espresso-800/8 bg-white px-4 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-[0.95rem] transition-colors ${
                    active
                      ? "bg-cream-100 text-espresso-800 font-semibold"
                      : "text-espresso-800/70 font-medium hover:bg-cream-100 hover:text-espresso-800"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => { setMobileOpen(false); setModalOpen(true); }}
              className="mt-2 bg-caramel-500 text-white font-semibold px-4 py-3 rounded-full text-[0.95rem] text-center"
            >
              Reserve a Table
            </button>
          </div>
        )}
      </header>

      <ReservationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
