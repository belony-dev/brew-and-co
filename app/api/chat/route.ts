import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK =
  "https://belo-dev.app.n8n.cloud/webhook/459308fe-abb1-4e99-bc5a-384479d4637d/chat";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const upstream = await fetch(N8N_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await upstream.json();
  return NextResponse.json(data, { status: upstream.status });
}

export async function GET(req: NextRequest) {
  const upstream = await fetch(N8N_WEBHOOK + "?" + req.nextUrl.searchParams.toString());
  const data = await upstream.json();
  return NextResponse.json(data, { status: upstream.status });
}
