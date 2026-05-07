@AGENTS.md

# SumZero Coverage — Project Brief

## What this project is

Seven-page Next.js app for SumZero Energy Systems, hosted on Vercel under `coverage.sumzeroenergysystems.com`.  
It handles two product flows: **Coverage (extended labor warranty)** and **Club Membership (Comfort Club maintenance plan)**.

Two of the seven pages are being migrated from the legacy `sumzero-landing-pages` (Netlify) project — Marcelo will specify which ones. The remaining five are net-new.

---

## Infrastructure

| Resource | Value |
|---|---|
| Local path | `/Users/marcelofranca/Documents/Claude/Projects/sumzero-coverage` |
| GitHub repo | `sumzeroenergy/sumzero-coverage` |
| Vercel project | `sumzero-coverage` (ID: `prj_5hTsKCQsr97aJjxSmfCd5DQ1cTAp`) |
| Production URL | `sumzero-coverage.vercel.app` (CNAME `coverage.sumzeroenergysystems.com` pending) |
| Vercel auto-deploy | Yes — every push to `main` triggers a build |
| Credentials | `~/.claude/secrets.env` — GitHub, Vercel, Netlify, Twilio, ServiceTitan, SendGrid tokens all there |

---

## Stack

- **Next.js 15** — App Router, TypeScript, Turbopack
- **Tailwind CSS v4** — utility-first, no config file needed
- **Framer Motion** — imported as `motion/react` (not `framer-motion`)
- **Lucide React** — icons
- **Geist Sans + Geist Mono** — the only two fonts used site-wide (loaded via `next/font/google`)

> Read `node_modules/next/dist/docs/` before writing any Next.js code — this version has breaking changes.

---

## Pages

```
/coverage                        → coverage index / landing
/coverage/protect/upgrade        → upsell / upgrade flow
/coverage/protect/welcome        → post-purchase welcome
/coverage/protect/terms          → legal terms
/club-membership                 → Comfort Club index / landing
/club-membership/welcome         → post-purchase welcome
/club-membership/terms           → legal terms
```

---

## Design system (carry over from landing pages)

### Colors
| Token | Hex | Usage |
|---|---|---|
| Brand green | `#96C83D` | CTAs, accents, borders, icons |
| Green hover | `#7aaa28` | Button hover state |
| Dark navy | `#0f1520` | Dark section backgrounds |
| Dark card | `#141c2a` | Card backgrounds in dark sections |
| Mid navy | `#1a2233` / `#1a2535` | Secondary dark backgrounds |
| Light grey | `#f1f3f6` | Light section backgrounds |
| Text dark | `#1F2535` | Body text on light sections |
| Text muted | `#5a6a7e` | Subtext on light sections |

### Typography
- Headings: `font-black uppercase` (weight 900)
- Section labels/badges: `text-xs font-bold tracking-[0.25em] uppercase text-[#96C83D]`
- Body: `text-lg` or `text-[17px]`, `leading-relaxed`
- Never more than 2 fonts (Geist Sans, Geist Mono)

### Spacing & layout
- Max content width: `max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16` — must match header on every section, no exceptions
- No inner `max-w-[1060px]` constraints — everything aligns full-width inside the 90rem container
- Section vertical padding: `pt-18 pb-12` (dark) or similar — consistent across sections

### Component patterns
- **Glass card (dark bg):** `bg-[#141c2a]` or `bg-[#1a2535]`, `border border-[#96C83D]/20`, `rounded-2xl` or `rounded-3xl`, hover lift `whileHover={{ y: -3 }}`
- **Glass card (light bg):** `bg-white`, `border border-[#d0d7e2]`, `rounded-2xl`, shadow
- **Primary button:** `bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold px-10 py-4 rounded-xl cursor-pointer`
- **Secondary button:** `border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-10 py-4 rounded-xl`
- **Section badge:** `<p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-2">Label</p>`
- **Green accent bar:** `<div className="mt-2 w-10 h-[3px] bg-[#96C83D] rounded-full" />`
- **Dot grid background:** radial-gradient dots at `opacity-[0.07]`, `backgroundSize: "28px 28px"`

### Animation (Framer Motion)
- Section entrance: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}`
- Card entrance: same but `y: 30`, `duration: 0.6`, `ease: [0.22, 1, 0.36, 1]`
- Staggered children: `delay: i * 0.06`

---

## Integrations (reuse patterns from landing pages)

### Request a Call (Twilio)
- POST to `/api/request-call` with `{ firstName, lastName, phone }`
- Global modal pattern: dispatch `sumzero:open-request-call` custom event → `RequestCallModal` listens in `useEffect`
- Export `openRequestCallModal()` from the modal component for use in any button

### Book / Schedule (ServiceTitan)
- POST to `/api/book-lead`
- Global modal pattern: `openBookingModal()` from `@/lib/booking-modal`

### Credentials (never hardcode — always read from env)
All tokens live in `~/.claude/secrets.env`. Copy what's needed into `.env.local`.

---

## SumZero business context

- **Company:** SumZero Energy Systems, 84 October Hill Road, Holliston, MA 01746
- **Phone:** (508) 965-0046
- **Website:** sumzeroenergysystems.com
- **Product 1 — Extended Labor Warranty ("Coverage / Protect"):**
  - Covers labor + refrigerant only (parts by manufacturer warranty)
  - $5,000 aggregate cap, $2,000 per-claim cap
  - Annual inspection required to maintain coverage
  - Administered by Magellan Service Corporation, Albuquerque, NM
  - AAA arbitration clause
  - Full T&C: https://www.sumzeroenergysystems.com/extended-warranty
- **Product 2 — Comfort Club (Club Membership):**
  - Annual maintenance plan, $99/system/year
  - Satisfies the warranty's inspection requirement
  - Priority scheduling + preferred repair pricing

---

## Rules — never break these

1. **Never change copy** — every word must match what Marcelo provides (screenshot, HTML, or text). Zero invented content.
2. **Alignment** — every section uses `max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16`. No exceptions.
3. **Two fonts only** — Geist Sans and Geist Mono.
4. **`cursor-pointer` on all interactive elements.**
5. **`"use client"` on any component using hooks or browser APIs.**
6. **No comments** unless the WHY is non-obvious.
7. **Deploy via Vercel** (not Netlify) — push to `main` and it auto-deploys.
