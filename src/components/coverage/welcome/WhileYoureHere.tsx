"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ChevronRight } from "lucide-react"

const CARDS = [
  {
    label:  "Comfort Club",
    title:  "Keep your system running at its best",
    body:   "Club members get an annual inspection per system, priority scheduling, and discounts on every service call. $99 per system per year — and it's the best way to protect the coverage you already have.",
    cta:    "Learn About the Club",
    href:   "/club-membership",
    accent: "#96C83D",
    glow:   "rgba(150,200,61,0.10)",
  },
  {
    label:  "The Zero Worry Promise",
    title:  "See everything your installation includes",
    body:   "PROTECT+ is one part of the SumZero installation promise. See the full picture — what's covered, what it means in practice, and why we build it this way.",
    cta:    "See the Full Promise",
    href:   "/coverage",
    accent: "#4FC3F7",
    glow:   "rgba(79,195,247,0.10)",
  },
]

export default function WhileYoureHere() {
  return (
    <section className="bg-[#0f1520] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[17px] font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-4">
            While You're Here
          </p>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white mb-4">
            Two more things worth knowing
          </h2>
          <p className="text-[18px] leading-relaxed text-white/60 max-w-[520px]">
            Your installation is covered. Here's how to get even more out of your relationship with SumZero.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-[#141c2a] rounded-2xl overflow-hidden flex flex-col"
              style={{ border: `1px solid ${card.accent}22`, transition: "border-color 0.3s, box-shadow 0.3s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${card.accent}55`
                e.currentTarget.style.boxShadow = `0 20px 60px ${card.glow}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${card.accent}22`
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, transparent, ${card.accent}, transparent)` }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${card.glow}, transparent 60%)` }} />

              <div className="relative p-8 flex flex-col gap-5 flex-1">
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: card.accent }}>
                  {card.label}
                </p>
                <h3 className="text-[24px] font-black leading-snug text-white">{card.title}</h3>
                <p className="text-[16px] leading-relaxed text-white/60 flex-1">{card.body}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer w-fit"
                  style={{ background: card.accent, color: card.accent === "#96C83D" ? "#0f1520" : "#0f1520" }}
                >
                  {card.cta} <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
