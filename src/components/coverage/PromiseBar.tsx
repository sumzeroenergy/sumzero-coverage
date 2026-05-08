"use client"

import { Shield, CalendarCheck, CreditCard } from "lucide-react"

const ITEMS = [
  {
    icon:  Shield,
    title: "Workmanship Guarantee",
    desc:  "Every install backed by our craftsmanship promise",
  },
  {
    icon:  CalendarCheck,
    title: "Club Membership",
    desc:  "Annual system inspection + priority service — $99 per system",
  },
  {
    icon:  CreditCard,
    title: "Extended Labor Coverage",
    desc:  "Optional PROTECT+ plan covers labor after manufacturer warranty",
  },
]

export default function PromiseBar() {
  return (
    <div className="bg-white border-y border-[#e5e8ed]">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e8ed]">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 py-7 px-6 first:pl-0 last:pr-0">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f1f3f6] flex items-center justify-center mt-0.5">
                <Icon size={17} className="text-[#5a6a7e]" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#1F2535] mb-1">{title}</p>
                <p className="text-[13px] text-[#5a6a7e] leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
