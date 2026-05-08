"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

const ITEMS = [
  "16-point professional system inspection annually",
  "Priority scheduling — no waiting behind non-members",
  "Member pricing on all service calls",
  "Annual reminder — we track it so you don't have to",
  "Equipment history on file with every visit",
]

export default function LayerTwo() {
  return (
    <section className="bg-[#eef0f4] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <Image
              src="/assets/club-membership/major-systems.png"
              alt="SumZero Club Membership major systems"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Label */}
            <p className="text-[19px] font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-5">
              Layer 2 — Club Membership
            </p>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1F2535] mb-6">
              $99 per system per year. One inspection per system, every year.
            </h2>

            {/* Body */}
            <p className="text-[17px] leading-relaxed text-[#5a6a7e] mb-5">
              Club Membership is priced by system, not by household. If you have two heat pumps
              and a water heater, that's three inspections at $99 each. The inspection is 16 points,
              done by the same team that installed the equipment.
            </p>
            <p className="text-[17px] leading-relaxed text-[#5a6a7e] mb-8">
              Members get priority scheduling and member pricing on every service call.
              January is when we're busiest. Members go first.
            </p>

            {/* Price box */}
            <div className="inline-flex items-baseline gap-2 bg-[#0f1520] rounded-xl px-7 py-4 mb-8">
              <span className="text-[42px] font-black text-[#96C83D] leading-none">$99</span>
              <span className="text-[18px] text-white/60 font-medium">/ system / year</span>
            </div>

            {/* Bullet list card */}
            <div className="bg-white rounded-2xl overflow-hidden mb-8">
              {ITEMS.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 px-7 py-5 ${i < ITEMS.length - 1 ? "border-b border-[#e5e8ed]" : ""}`}
                >
                  <span className="flex-shrink-0 w-3 h-3 rounded-full bg-[#96C83D]" />
                  <span className="text-[18px] font-medium text-[#1F2535] leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/club-membership"
              className="inline-flex items-center gap-3 bg-[#96C83D] hover:bg-[#7aaa28] text-[#0f1520] font-bold text-[17px] px-10 py-5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 cursor-pointer"
            >
              Learn About Club Membership →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
