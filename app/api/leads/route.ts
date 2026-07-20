import { NextResponse } from "next/server";

const REQUIRED_FIELDS = ["name", "phone", "postcode", "windowCount", "timeframe", "consent"] as const;

export async function POST(request: Request) {
  let lead: Record<string, unknown>;

  try {
    lead = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  if (lead.company) {
    return NextResponse.json({ message: "Thanks. Your request has been received." });
  }

  const missingField = REQUIRED_FIELDS.some((field) => typeof lead[field] !== "string" || !String(lead[field]).trim());
  if (missingField) {
    return NextResponse.json({ message: "Please complete every required field." }, { status: 400 });
  }

  const phone = String(lead.phone).replace(/[^0-9+ ()-]/g, "");
  const postcode = String(lead.postcode).trim().toUpperCase();
  if (phone.length < 9 || postcode.length < 5) {
    return NextResponse.json({ message: "Please check your phone number and postcode." }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { message: "This quote form is being connected. Please try again shortly." },
      { status: 503 },
    );
  }

  const payload = {
    name: String(lead.name).trim().slice(0, 100),
    phone: phone.slice(0, 30),
    postcode: postcode.slice(0, 12),
    windowCount: String(lead.windowCount).slice(0, 30),
    timeframe: String(lead.timeframe).slice(0, 40),
    consent: true,
    source: "uPVC Windows Manchester website",
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
  } catch (error) {
    console.error("Lead delivery failed", error);
    return NextResponse.json(
      { message: "We could not send your request just now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thanks. Our team or an installation partner will contact you about your quote." });
}
