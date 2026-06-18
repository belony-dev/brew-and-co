import Image from "next/image";
import ReserveButton from "@/components/ReserveButton";

const galleryImages = [
  {
    src: "/assets/about-gallery-1.jpg",
    alt: "Barista pulling an espresso shot at Belo'Coffee",
  },
  {
    src: "/assets/about-gallery-2.jpg",
    alt: "Cozy corner seating inside the café",
  },
  {
    src: "/assets/about-gallery-3.jpg",
    alt: "Freshly baked pastries on the counter",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-espresso-800 pt-20 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Text */}
            <div className="pb-20">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-caramel-400 mb-4">
                Our Story
              </p>
              <h1 className="font-display text-5xl sm:text-6xl font-black text-white leading-[1.08] mb-6">
                A Corner of Georgia,{" "}
                <em className="italic text-caramel-300">Made for You.</em>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                Belo&apos;Coffee started with a simple idea: what if your local
                coffee shop felt less like a transaction and more like coming
                home?
              </p>
            </div>
            {/* Hero image */}
            <div className="relative h-72 lg:h-[420px] rounded-t-3xl overflow-hidden">
              <Image
                src="/assets/about-hero.jpg"
                alt="The Belo'Coffee bar — handcrafted with warmth"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────── */}
      <section className="bg-cream-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/about-story.jpg"
                alt="Barista carefully crafting a latte at Belo'Coffee"
                fill
                className="object-cover"
              />
            </div>

            {/* Story text */}
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-caramel-500 mb-3">
                How It All Began
              </p>
              <h2 className="font-display text-4xl font-bold text-espresso-800 leading-tight mb-6">
                Born from a Love of the Perfect Cup
              </h2>
              <div className="space-y-4 text-espresso-800/65 text-[0.9375rem] leading-relaxed">
                <p>
                  Belo&apos;Coffee was founded right here in Georgia by a coffee
                  obsessive who got tired of settling. After years of chasing
                  the perfect espresso — from the hills of Ethiopia to the farms
                  of Colombia — the founder decided the best place for that
                  coffee was right at home.
                </p>
                <p>
                  We opened our doors on a quiet Savannah street with a single
                  espresso machine, a small display case of croissants, and a
                  table big enough for two. Word traveled fast.
                </p>
                <p>
                  Today, we&apos;re still that same neighborhood café — just
                  with more chairs, more pastries, and a whole lot more
                  regulars. We source our beans seasonally from small ethical
                  farms, bake everything in-house before dawn, and treat every
                  guest like they&apos;ve been coming in for years.
                </p>
                <p>Because honestly? We hope they have been.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────── */}
      <section className="bg-espresso-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-caramel-400 mb-6">
            Our Mission
          </p>
          <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            &ldquo;To make every guest feel like a regular from the very first
            sip.&rdquo;
          </blockquote>
          <p className="mt-8 text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Great coffee is our craft, but connection is our purpose. Every
            decision — from the beans we source to the music we play — is made
            with that feeling in mind.
          </p>
        </div>
      </section>

      {/* ── VISION ───────────────────────────────────────── */}
      <section className="bg-cream-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                ),
                title: "Ethically Sourced",
                body: "Every bean we use is traceable to a small farm. We pay above fair-trade prices and visit our partners when we can.",
              },
              {
                icon: (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                title: "Community First",
                body: "From Open Mic Fridays to Saturday coffee tastings, we believe the best café is one that brings the neighborhood together.",
              },
              {
                icon: (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                ),
                title: "Made with Care",
                body: "Everything on our menu — from the espresso to the cinnamon rolls — is crafted by hand, every single morning.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-caramel-500/10 text-caramel-600 flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="font-display text-xl font-bold text-espresso-800 mb-3">
                  {title}
                </h3>
                <p className="text-espresso-800/60 text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────── */}
      <section className="bg-cream-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-caramel-500 mb-2">
              The Space
            </p>
            <h2 className="font-display text-4xl font-bold text-espresso-800">
              Come See for Yourself
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="bg-caramel-500 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            We&apos;d Love to Meet You.
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Stop by any morning or reserve a table for your next visit. The
            coffee&apos;s always on.
          </p>
          <ReserveButton variant="light" />
        </div>
      </section>
    </>
  );
}
