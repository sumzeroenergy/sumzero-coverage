import { NextRequest, NextResponse } from "next/server"

const ACCOUNT_SID  = process.env.TWILIO_ACCOUNT_SID!
const AUTH_TOKEN   = process.env.TWILIO_AUTH_TOKEN!
const FROM_PHONE   = process.env.TWILIO_PHONE!
const NOTIFY_PHONE = "+15089650046"

export async function POST(req: NextRequest) {
  const { firstName, lastName, phone } = await req.json()

  if (!firstName || !lastName || !phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const body = `SumZero Call Request\nFrom: ${firstName} ${lastName}\nPhone: ${phone}\nReply or call them back within 1 business day.`

  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${ACCOUNT_SID}/Messages.json`,
    {
      method:  "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`${ACCOUNT_SID}:${AUTH_TOKEN}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ From: FROM_PHONE, To: NOTIFY_PHONE, Body: body }),
    }
  )

  if (!res.ok) {
    const err = await res.text()
    console.error("Twilio error:", err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
