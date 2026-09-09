const WEBHOOK = process.env.LEADS_SLACK_WEBHOOK_URL

interface LeadCard {
  firstName:    string
  lastName:     string
  phone:        string
  email?:       string
  address?:     string
  message?:     string
  summaryTitle: string
  bookingId?:   string | number
}

function card(lead: LeadCard) {
  const tel = lead.phone.replace(/\D/g, "")

  const fields = [
    { type: "mrkdwn", text: `*Name*\n${lead.firstName} ${lead.lastName}` },
    { type: "mrkdwn", text: `*Phone*\n<tel:+1${tel}|${lead.phone}>` },
  ]
  if (lead.email)   fields.push({ type: "mrkdwn", text: `*Email*\n<mailto:${lead.email}|${lead.email}>` })
  if (lead.address) fields.push({ type: "mrkdwn", text: `*Address*\n${lead.address}` })

  const blocks: object[] = [
    { type: "header", text: { type: "plain_text", text: "🔔 SumZero Coverage Lead", emoji: true } },
    { type: "section", text: { type: "mrkdwn", text: `*${lead.summaryTitle}*` } },
    { type: "section", fields },
  ]

  if (lead.message) {
    blocks.push({ type: "section", text: { type: "mrkdwn", text: `*Message*\n${lead.message}` } })
  }

  blocks.push({
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: [
          new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
          lead.bookingId ? `ServiceTitan #${lead.bookingId}` : "ServiceTitan: failed",
        ].join(" · "),
      },
    ],
  })

  return {
    text: `${lead.summaryTitle} — ${lead.firstName} ${lead.lastName}, ${lead.phone}`,
    blocks,
  }
}

export async function postLeadToSlack(lead: LeadCard): Promise<void> {
  if (!WEBHOOK) {
    console.error("[slack] LEADS_SLACK_WEBHOOK_URL ausente. Lead:", lead)
    return
  }

  try {
    const res = await fetch(WEBHOOK, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(card(lead)),
    })
    if (!res.ok) {
      console.error("[slack] recusou", res.status, await res.text(), "Lead:", lead)
    }
  } catch (err) {
    console.error("[slack] inacessível", err, "Lead:", lead)
  }
}
