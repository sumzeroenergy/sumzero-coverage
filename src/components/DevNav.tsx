"use client"

import Link from "next/link"

const PROTECT = [
  { label: "Coverage",         href: "/coverage" },
  { label: "Upgrade",          href: "/coverage/protect/upgrade" },
  { label: "Welcome",          href: "/coverage/protect/welcome" },
  { label: "Terms",            href: "/coverage/protect/terms" },
]

const CLUB = [
  { label: "Club Membership",  href: "/club-membership" },
  { label: "Welcome",          href: "/club-membership/welcome" },
  { label: "Terms",            href: "/club-membership/terms" },
]

export default function DevNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-2">
      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest px-2">PROTECT+</span>
      {PROTECT.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          className="text-[11px] text-blue-300/70 hover:text-blue-200 hover:bg-blue-500/10 px-3 py-1.5 rounded-full transition-all whitespace-nowrap"
        >
          {p.label}
        </Link>
      ))}
      <span className="text-white/20 px-1">|</span>
      <span className="text-[10px] font-bold text-[#96C83D] uppercase tracking-widest px-2">CLUB MEMBER</span>
      {CLUB.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          className="text-[11px] text-[#96C83D]/70 hover:text-[#96C83D] hover:bg-[#96C83D]/10 px-3 py-1.5 rounded-full transition-all whitespace-nowrap"
        >
          {p.label}
        </Link>
      ))}
    </div>
  )
}
