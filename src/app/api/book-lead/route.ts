import { NextRequest, NextResponse } from "next/server"

const ST_AUTH_URL    = "https://auth.servicetitan.io/connect/token"
const ST_API_BASE    = "https://api.servicetitan.io"
const TENANT_ID      = process.env.SERVICETITAN_TENANT_ID!
const CLIENT_ID      = process.env.SERVICETITAN_CLIENT_ID!
const CLIENT_SECRET  = process.env.SERVICETITAN_CLIENT_SECRET!
const APP_KEY        = process.env.SERVICETITAN_APP_KEY!
const PROVIDER_ID    = process.env.SERVICETITAN_BOOKING_PROVIDER_ID!
const CAMPAIGN_ID    = Number(process.env.SERVICETITAN_CAMPAIGN_ID!)

async function getAccessToken(): Promise<string> {
  const res = await fetch(ST_AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type:    "client_credentials",
      client_id:     CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  })
  if (!res.ok) throw new Error(`ST auth failed: ${res.status}`)
  const data = await res.json()
  return data.access_token
}

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, address, message, summaryTitle } = await req.json()

    if (!firstName || !lastName || !phone || !summaryTitle) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const token = await getAccessToken()

    const summary = message
      ? `${summaryTitle}\nVISITOR MESSAGE:\n${message}`
      : summaryTitle

    const body = [
      address && `Address provided: ${address}`,
      message && `Visitor message: ${message}`,
    ].filter(Boolean).join("\n") || summaryTitle

    const contacts: { type: string; value: string; memo?: string }[] = [
      { type: "Phone", value: phone.replace(/\D/g, ""), memo: "Mobile" },
    ]
    if (email) contacts.unshift({ type: "Email", value: email })

    const payload = {
      externalId:        crypto.randomUUID(),
      source:            "SumZero Coverage Website",
      name:              `${firstName} ${lastName}`,
      summary,
      body,
      campaignId:        CAMPAIGN_ID,
      isFirstTimeClient: true,
      contacts,
    }

    const bookingRes = await fetch(
      `${ST_API_BASE}/crm/v2/tenant/${TENANT_ID}/booking-provider/${PROVIDER_ID}/bookings`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type":  "application/json",
          "ST-App-Key":    APP_KEY,
        },
        body: JSON.stringify(payload),
      }
    )

    if (!bookingRes.ok) {
      const err = await bookingRes.text()
      console.error("ST booking error:", bookingRes.status, err)
      return NextResponse.json({ error: "Booking failed" }, { status: 502 })
    }

    const result = await bookingRes.json()
    return NextResponse.json({ success: true, id: result.id })
  } catch (err) {
    console.error("book-lead error:", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
