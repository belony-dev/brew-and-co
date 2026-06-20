"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ReservationModalProps {
  open: boolean;
  onClose: () => void;
}

const timeSlots: string[] = [];
for (let h = 9; h <= 21; h++) {
  const hour = h > 12 ? h - 12 : h;
  const ampm = h >= 12 ? "PM" : "AM";
  timeSlots.push(`${hour}:00 ${ampm}`);
  if (h < 21) timeSlots.push(`${hour}:30 ${ampm}`);
}

export default function ReservationModal({ open, onClose }: ReservationModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    partySize: "2",
    date: "",
    time: "10:00 AM",
  });

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      try {
        dialog.showModal();
      } catch {
        dialog.setAttribute("open", "");
      }
      setStatus("idle");
    } else {
      try {
        dialog.close();
      } catch {
        dialog.removeAttribute("open");
      }
    }
  }, [open]);

  function toISO(date: string, time: string) {
    const [hourMin, period] = time.split(" ");
    const [h, m] = hourMin.split(":").map(Number);
    let hour = h;
    if (period === "PM" && h !== 12) hour += 12;
    if (period === "AM" && h === 12) hour = 0;
    return `${date}T${String(hour).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName: form.name,
          groupSize: form.partySize,
          bookingTime: toISO(form.date, form.time),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  function handleClose() {
    setStatus("idle");
    setErrorMsg("");
    setForm({ name: "", partySize: "2", date: "", time: "10:00 AM" });
    onClose();
  }

  const inputClass =
    "w-full bg-white/10 border border-white/20 rounded-[10px] px-4 h-[46px] text-[0.9375rem] text-white placeholder:text-white/30 outline-none transition-all duration-150 focus:border-caramel-400 focus:bg-white/15 focus:ring-3 focus:ring-caramel-400/20 font-sans";

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      aria-labelledby="reservation-title"
      className="w-full max-w-md rounded-2xl bg-espresso-800 shadow-xl m-auto"
    >
      <div className="px-7 py-7">
        {status === "success" ? (
          /* Success state */
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              You&apos;re on the list!
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-1">
              We&apos;ve received your reservation request for <strong className="text-white">{form.name}</strong>.
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
              Party of <strong className="text-white">{form.partySize}</strong> on <strong className="text-white">{form.date}</strong> at <strong className="text-white">{form.time}</strong>. See you soon!
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="bg-caramel-500 hover:bg-caramel-600 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form state */
          <>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 id="reservation-title" className="font-display text-2xl font-bold text-white leading-tight">
                  Reserve a Table
                </h2>
                <p className="text-white/50 text-sm mt-1">
                  We&apos;ll hold a spot just for you.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors -mt-1"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="res-name" className="block text-sm font-medium text-white/80 mb-1.5">
                  Full Name <span className="text-coral-500">*</span>
                </label>
                <input
                  id="res-name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="res-party" className="block text-sm font-medium text-white/80 mb-1.5">
                  Party Size
                </label>
                <select
                  id="res-party"
                  value={form.partySize}
                  onChange={(e) => setForm({ ...form, partySize: e.target.value })}
                  className={inputClass}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="res-date" className="block text-sm font-medium text-white/80 mb-1.5">
                    Date <span className="text-coral-500">*</span>
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="res-time" className="block text-sm font-medium text-white/80 mb-1.5">
                    Time <span className="text-coral-500">*</span>
                  </label>
                  <select
                    id="res-time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className={inputClass}
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {status === "error" && (
                <p className="text-coral-400 text-sm bg-coral-500/10 border border-coral-500/20 rounded-xl px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 h-[46px] bg-caramel-500 hover:bg-caramel-600 text-white font-semibold rounded-full transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".25" />
                      <path d="M21 12a9 9 0 01-9 9" />
                    </svg>
                    Reserving your spot…
                  </>
                ) : status === "error" ? (
                  "Try Again"
                ) : (
                  "Confirm Reservation"
                )}
              </button>
            </form>

            <div className="mt-5 text-center">
              <Link
                href="/"
                onClick={handleClose}
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
