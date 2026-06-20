import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = process.env.RESERVATION_WEBHOOK_URL ?? "";
const WEBHOOK_SECRET = "brew-co";

export async function POST(req: NextRequest) {
  if (!WEBHOOK_URL) {
    return NextResponse.json(
      { error: "Reservation service not configured." },
      { status: 503 }
    );
  }

  const { guestName, groupSize, bookingTime } = await req.json();

  if (!guestName || !groupSize || !bookingTime) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const upstream = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      belo_coffee_reservation_btn: WEBHOOK_SECRET,
    },
    body: JSON.stringify({
      guest_name: guestName,
      group_size: groupSize,
      booking_time: bookingTime,
    }),
  });

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Failed to create reservation." },
      { status: upstream.status }
    );
  }

  return NextResponse.json({ success: true });
}
