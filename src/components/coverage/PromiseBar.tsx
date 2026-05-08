"use client"

import { ShieldCheck, CalendarCheck, CreditCard } from "lucide-react"

const ITEMS = [
  {
    icon:  ShieldCheck,
    title: "Workmanship Guarantee",
    desc:  "Every install backed by our craftsmanship promise — we stand behind the work, not just the equipment.",
  },
  {
    icon:  CalendarCheck,
    title: "Club Membership",
    desc:  "Annual system inspection + priority scheduling — $99 per system, per year. Member pricing on every service call.",
  },
  {
    icon:  CreditCard,
    title: "Extended Labor Coverage",
    desc:  "Optional PROTECT+ plan covers labor costs on qualifying systems after the manufacturer's warranty period ends.",
  },
]

export default function PromiseBar() {
  return (
    <div className="bg-white border-y border-[#e5e8ed]">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e8ed]">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-5 py-10 px-8 first:pl-0 last:pr-0">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#f1f3f6] flex items-center justify-center mt-0.5">
                <Icon size={24} className="text-[#5a6a7e]" />
              </div>
              <div>
                <p className="text-[17px] font-bold text-[#1F2535] mb-2">{title}</p>
                <p className="text-[15px] text-[#5a6a7e] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
