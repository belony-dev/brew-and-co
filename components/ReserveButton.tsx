"use client";

import { useState } from "react";
import ReservationModal from "@/components/ReservationModal";

interface ReserveButtonProps {
  variant?: "dark" | "light";
}

export default function ReserveButton({ variant = "dark" }: ReserveButtonProps) {
  const [open, setOpen] = useState(false);

  const styles =
    variant === "light"
      ? "bg-caramel-500 hover:bg-caramel-600 text-white"
      : "bg-caramel-500/15 hover:bg-caramel-500/25 text-caramel-300 border border-caramel-500/30";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all duration-150 hover:-translate-y-px ${styles}`}
      >
        Reserve a Table
      </button>
      <ReservationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
