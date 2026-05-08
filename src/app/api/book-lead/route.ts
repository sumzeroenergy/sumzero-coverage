import { NextRequest, NextResponse } from "next/server"

const ST_AUTH_URL  = "https://auth.servicetitan.io/connect/token"
const ST_API_BASE  = "https://api.servicetitan.io"
const TENANT_ID    = process.env.SERVICETITAN_TENANT_ID!
const CLIENT_ID    = process.env.SERVICETITAN_CLIENT_ID!
const CLIENT_SECRET = process.env.SERVICETITAN_CLIENT_SECRET!
const APP_KEY      = process.env.SERVICETITAN_APP_KEY!

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
    const { firstName, lastName, email, phone, address, message } = await req.json()

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const token = await getAccessToken()

    const payload = {
      summary: "Comfort Club Membership — Website Inquiry",
      isFirstTimeClient: true,
      name: `${firstName} ${lastName}`,
      contacts: [
        { type: "Email", value: email },
        { type: "Phone", value: phone.replace(/\D/g, ""), memo: "Mobile" },
      ],
      ...(address && {
        address: {
          street:  address,
          city:    "",
          state:   "MA",
          zip:     "",
          country: "USA",
        },
      }),
      ...(message && { note: message }),
      source: "SumZero Club Membership Page",
    }

    const bookingRes = await fetch(
      `${ST_API_BASE}/booking/v2/tenant/${TENANT_ID}/bookings`,
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
      console.error("ST booking error:", err)
      return NextResponse.json({ error: "Booking failed" }, { status: 502 })
    }

    const result = await bookingRes.json()
    return NextResponse.json({ success: true, id: result.id })
  } catch (err) {
    console.error("book-lead error:", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
