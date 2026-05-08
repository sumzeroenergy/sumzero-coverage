"use client"

import Link from "next/link"

const PAGES = [
  { label: "Coverage",          href: "/coverage" },
  { label: "Upgrade",           href: "/coverage/protect/upgrade" },
  { label: "Coverage Welcome",  href: "/coverage/protect/welcome" },
  { label: "Coverage Terms",    href: "/coverage/protect/terms" },
  { label: "Club Membership",   href: "/club-membership" },
  { label: "Club Welcome",      href: "/club-membership/welcome" },
  { label: "Club Terms",        href: "/club-membership/terms" },
]

export default function DevNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-2">
      <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest mr-2 pl-1">DEV</span>
      {PAGES.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          className="text-[11px] text-white/60 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all whitespace-nowrap"
        >
          {p.label}
        </Link>
      ))}
    </div>
  )
}
