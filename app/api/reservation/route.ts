import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = "https://belo-dev.app.n8n.cloud/webhook/make_reservation";
const WEBHOOK_SECRET = "brew-dash-co";

export async function POST(req: NextRequest) {
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
      party_size: groupSize,
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
