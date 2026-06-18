import Image from "next/image";
import Link from "next/link";
import { featuredItems } from "@/lib/menu-data";
import ReserveButton from "@/components/ReserveButton";

const events = [
  {
    id: "open-mic",
    day: "Friday",
    time: "7:00 PM",
    title: "Open Mic Night",
    description:
      "Every Friday evening we open our doors to local artists, poets, and musicians. Good coffee, great vibes, and even better people.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a3 3 0 013 3v7a3 3 0 01-6 0V5a3 3 0 013-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
    accent: "bg-rose-bc-500/10 text-rose-bc-600",
    border: "border-rose-bc-300",
  },
  {
    id: "coffee-tasting",
    day: "Saturday",
    time: "10:00 AM",
    title: "Coffee Tasting Session",
    description:
      "Join our head barista every Saturday morning for a deep dive into the origin, roast, and craft behind your favorite brews. Free with any purchase.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 8h1a4 4 0 010 8h-1" />
        <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
    accent: "bg-caramel-500/10 text-caramel-600",
    border: "border-caramel-300",
  },
];

const badgeStyles: Record<string, string> = {
  Popular: "bg-caramel-500/12 text-caramel-600",
  "House Favorite": "bg-espresso-800/10 text-espresso-700",
  New: "bg-sage-500/12 text-sage-600",
  Seasonal: "bg-amber-bc-500/12 text-amber-bc-600",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <Image
          src="/assets/hero.jpg"
          alt="Belo'Coffee interior — warm morning light, coffee bar in full swing"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/65 via-espresso-900/35 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-caramel-300 mb-4">
              Specialty Coffee · Savannah, Georgia
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Where Every{" "}
              <em className="italic text-caramel-300 not-italic">Sip</em> Tells
              a Story.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md">
              Handcrafted espresso, fresh-baked pastries, and a space that feels
              like home. Come as you are — stay as long as you&apos;d like.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-white text-espresso-800 font-semibold px-7 py-3.5 rounded-full hover:bg-cream-100 transition-colors"
              >
                Browse the Menu
              </Link>
              <ReserveButton />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ITEMS ────────────────────────────────── */}
      <section className="bg-cream-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-caramel-500 mb-2">
              Guest Favorites
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-espresso-800 leading-tight">
              What Everyone&apos;s Ordering
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredItems.map((item) => (
              <Link
                key={item.id}
                href="/menu"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.badge && (
                    <span
                      className={`absolute top-3 right-3 text-[0.7rem] font-bold px-2.5 py-1 rounded-full ${badgeStyles[item.badge] ?? ""}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-display text-lg font-bold text-espresso-800 leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-caramel-500 font-semibold text-base shrink-0">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-espresso-800/55 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border border-espresso-800/20 text-espresso-800 font-semibold px-7 py-3.5 rounded-full hover:bg-espresso-800 hover:text-white transition-all duration-150"
            >
              View Full Menu
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── EVENTS ────────────────────────────────────────── */}
      <section className="bg-cream-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-caramel-500 mb-2">
              Weekly Events
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-espresso-800 leading-tight">
              More Than Just Coffee
            </h2>
            <p className="mt-3 text-espresso-800/55 text-lg max-w-lg">
              We believe a great café is a community. Every week we host events
              that bring people together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className={`bg-white rounded-2xl p-8 border-2 ${event.border} shadow-sm`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${event.accent}`}
                >
                  {event.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-[0.65rem] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full ${event.accent}`}
                  >
                    Every {event.day}
                  </span>
                  <span className="text-espresso-800/40 text-sm">
                    {event.time}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-espresso-800 mb-3">
                  {event.title}
                </h3>
                <p className="text-espresso-800/60 text-[0.9375rem] leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVE CTA BAND ──────────────────────────────── */}
      <section className="bg-espresso-800 py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-caramel-500/15 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-caramel-500/10 translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-caramel-400 mb-3">
            Join Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Ready for Your Next Perfect Cup?
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-10">
            Reserve your table and we&apos;ll have your favorite spot waiting.
            Walk-ins are always welcome too.
          </p>
          <ReserveButton variant="light" />
        </div>
      </section>
    </>
  );
}
