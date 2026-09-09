/**
 * Card de lead novo no Slack — mesmo formato do app LEADS da intranet:
 * bloco `table` com os dados e um grupo de radio buttons para o desfecho.
 *
 * A marca do Outcome não é gravada em lugar nenhum: ela vive no próprio card.
 * Sem uma rota que redesenhe a mensagem no clique, quem clica vê a bolinha
 * até dar refresh e o resto do canal não vê nada.
 */

export const LEAD_OUTCOMES = [
  { value: "new",       text: "New lead",  icon: ":sz-new:" },
  { value: "booked",    text: "Booked",    icon: ":sz-booked:" },
  { value: "dismissed", text: "Dismissed", icon: ":sz-dismissed:" },
  { value: "spam",      text: "Spam",      icon: ":sz-spam:" },
] as const

export const OUTCOME_BLOCK_ID  = "lead_outcome"
export const OUTCOME_ACTION_ID = "set_outcome"

type Block = Record<string, unknown>

export interface SlackLead {
  firstName:    string
  lastName:     string
  phone:        string
  email?:       string
  address?:     string
  message?:     string
  summaryTitle: string
  bookingId?:   string | number
}

export function outcomeOption(o: (typeof LEAD_OUTCOMES)[number]) {
  return {
    text:  { type: "plain_text", text: `${o.icon}  ${o.text}`, emoji: true },
    value: o.value,
  }
}

function cell(text: string) {
  return { type: "raw_text", text }
}

export function buildLeadBlocks(lead: SlackLead, selected = "new"): Block[] {
  const name = `${lead.firstName} ${lead.lastName}`.trim()

  const rows: unknown[][] = [[cell("Lead"), cell("Details")]]
  rows.push([cell("Name"), cell(name)])
  if (lead.phone)     rows.push([cell("Phone"), cell(lead.phone)])
  if (lead.email)     rows.push([cell("Email"), cell(lead.email)])
  if (lead.address)   rows.push([cell("Address"), cell(lead.address)])
  if (lead.message)   rows.push([cell("Comments"), cell(lead.message)])
  rows.push([cell("Request"), cell(lead.summaryTitle)])
  rows.push([
    cell("ServiceTitan"),
    cell(lead.bookingId ? `#${lead.bookingId}` : "failed — not booked"),
  ])

  const radio: Block = {
    type:      "radio_buttons",
    action_id: OUTCOME_ACTION_ID,
    options:   LEAD_OUTCOMES.map(outcomeOption),
  }
  const hit = LEAD_OUTCOMES.find((o) => o.value === selected)
  if (hit) radio.initial_option = outcomeOption(hit)

  return [
    {
      type: "header",
      text: { type: "plain_text", text: "New lead · SumZero Coverage", emoji: false },
    },
    {
      type: "table",
      column_settings: [{ is_wrapped: false }, { is_wrapped: true }],
      rows,
    },
    { type: "divider" },
    { type: "section", text: { type: "mrkdwn", text: "*Outcome*" } },
    { type: "actions", block_id: OUTCOME_BLOCK_ID, elements: [radio] },
  ]
}

export async function postLeadToSlack(lead: SlackLead): Promise<void> {
  const url = (process.env.LEADS_SLACK_WEBHOOK_URL ?? "").trim()
  if (!url) {
    console.error("[slack] LEADS_SLACK_WEBHOOK_URL ausente. Lead:", lead)
    return
  }

  try {
    const res = await fetch(url, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text:   `New lead · SumZero Coverage — ${lead.firstName} ${lead.lastName}, ${lead.phone}`,
        blocks: buildLeadBlocks(lead),
      }),
    })
    if (!res.ok) {
      console.error("[slack] recusou", res.status, await res.text(), "Lead:", lead)
    }
  } catch (err) {
    console.error("[slack] inacessível", err, "Lead:", lead)
  }
}
