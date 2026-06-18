"use client";

import Image from "next/image";
import { useState } from "react";
import { menuItems, categories, type Category } from "@/lib/menu-data";

const badgeStyles: Record<string, string> = {
  Popular: "bg-caramel-500 text-white",
  "House Favorite": "bg-espresso-800 text-white",
  New: "bg-sage-500 text-white",
  Seasonal: "bg-amber-bc-500 text-white",
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Espresso Drinks": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 010 8h-1" />
      <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
    </svg>
  ),
  "Cold Drinks": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <path d="M5 8h14l-1.5 9.5A2 2 0 0115.5 19h-7a2 2 0 01-1.984-1.5L5 8z" />
    </svg>
  ),
  Pastries: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
  Sandwiches: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h18" />
      <path d="M3 12h18" />
      <path d="M5 17h14a2 2 0 002-2V7a5 5 0 00-5-5H8a5 5 0 00-5 5v8a2 2 0 002 2z" />
    </svg>
  ),
};

export default function MenuPage() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="bg-espresso-800 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-caramel-400 mb-3">
            Belo&apos;Coffee
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-black text-white leading-tight mb-3">
            Our Menu
          </h1>
          <p className="text-white/50 text-lg max-w-lg">
            Everything made fresh. Everything made with love. Browse by category
            or take it all in — we won&apos;t judge.
          </p>
        </div>
      </section>

      {/* ── STICKY CATEGORY TABS ─────────────────────────── */}
      <div className="sticky top-[68px] z-40 bg-espresso-800/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1.5 py-3 overflow-x-auto scrollbar-hide">
            {(["All", ...categories] as (Category | "All")[]).map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-150 shrink-0 ${
                    isActive
                      ? "bg-caramel-500 text-white shadow-sm"
                      : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {cat !== "All" && (
                    <span className={isActive ? "text-white" : "text-white/50"}>
                      {categoryIcons[cat]}
                    </span>
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MENU GRID ────────────────────────────────────── */}
      <section className="bg-cream-200 py-14 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category heading (when filtered) */}
          {active !== "All" && (
            <div className="mb-8 flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-espresso-800 text-white flex items-center justify-center">
                {categoryIcons[active]}
              </span>
              <h2 className="font-display text-2xl font-bold text-espresso-800">
                {active}
              </h2>
              <span className="text-espresso-800/35 text-sm font-medium">
                {filtered.length} items
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.badge && (
                    <span
                      className={`absolute top-3 left-3 text-[0.65rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm ${badgeStyles[item.badge] ?? ""}`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {/* Category chip (only on "All" view) */}
                  {active === "All" && (
                    <span className="absolute bottom-3 right-3 text-[0.6rem] font-semibold bg-black/50 text-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-[1.05rem] font-bold text-espresso-800 leading-snug mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-espresso-800/55 text-[0.8375rem] leading-relaxed line-clamp-3 flex-1 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-espresso-800/7">
                    <span className="text-caramel-500 font-bold text-lg">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-[0.7rem] font-semibold text-espresso-800/35 uppercase tracking-wide">
                      {item.category === "Espresso Drinks" ||
                      item.category === "Cold Drinks"
                        ? "Hot · Iced"
                        : "Daily"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM NOTE ──────────────────────────────────── */}
      <div className="bg-cream-100 py-10 text-center">
        <p className="text-espresso-800/45 text-sm max-w-md mx-auto px-4">
          All items made fresh daily. Seasonal items may vary. Ask your barista
          about allergens or substitutions — we&apos;re always happy to help.
        </p>
      </div>
    </>
  );
}
