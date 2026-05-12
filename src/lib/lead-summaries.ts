export const LEAD_SUMMARIES = {
  PROTECT_PLUS:              "New Website Lead — SumZero Protect Plus (Extended Labor Warranty)",
  PROTECT_PLUS_SUBSCRIPTION: "New Subscription Inquiry — SumZero Protect Plus (Extended Labor Warranty)",
  PROTECT_PLUS_CALL_NOW:     "CALL THIS NUMBER NOW — LEAD FOR PROTECT PLUS SUBSCRIPTION",
  PROTECT_PLUS_MEMBER_SUPPORT: "CALL THIS NEW PROTECT PLUS MEMBER — CUSTOMER SUPPORT REQUEST",
  CLUB_MEMBERSHIP:           "New Website Lead — SumZero Protect Club Membership (Comfort Club Maintenance Plan)",
  CLUB_MEMBERSHIP_CALL_NOW:  "CALL THIS NEW CLUB MEMBERSHIP MEMBER — CUSTOMER SUPPORT REQUEST",
  CLUB_MEMBERSHIP_MESSAGE:   "MESSAGE FROM CLUB MEMBERSHIP MEMBER — RESPOND BY CALL, EMAIL, OR TEXT",
} as const

export type LeadSummary = (typeof LEAD_SUMMARIES)[keyof typeof LEAD_SUMMARIES]
