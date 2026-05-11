"use client"

import { motion } from "motion/react"
import { ScanSearch, Wrench, Wind, Thermometer } from "lucide-react"

const ITEMS = [
  {
    icon: ScanSearch,
    title: "Diagnostic Labor",
    desc: "We come out, find the problem, diagnose it. That service call is covered — no charge to you.",
  },
  {
    icon: Wrench,
    title: "Repair Labor",
    desc: "Remove the failed component, install the manufacturer-warranted replacement, get the system back running. The labor is covered.",
  },
  {
    icon: Wind,
    title: "Refrigerant",
    desc: "When a leak is permanently repaired or a covered component is replaced, refrigerant is included. Not covered for diagnostic-only visits.",
  },
  {
    icon: Thermometer,
    title: "Thermostat Labor",
    desc: "Labor to diagnose and replace a faulty thermostat. Covered up to $250 over the life of the warranty.",
  },
]

export default function ClaimCovers() {
  return (
    <section className="bg-[#0f1520] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            What You're Buying
          </p>
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-4">
            <span className="text-white">What Every </span>
            <span className="text-[#96C83D]">Claim Covers</span>
          </h2>
          <div className="w-10 h-[3px] bg-[#96C83D] rounded-full" />
        </motion.div>

        {/* Items */}
        <div className="flex flex-col gap-3 mb-3">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#141c2a] border border-white/8 rounded-2xl px-8 py-7 flex items-start gap-6 hover:border-[#96C83D]/25 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-[#96C83D]/15">
                <Icon size={22} className="text-[#96C83D]" />
              </div>
              <div>
                <p className="text-white font-bold text-[17px] mb-1">{title}</p>
                <p className="text-white/55 text-[15px] leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* $5,000 aggregate card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#96C83D] rounded-2xl px-8 py-7 flex items-center gap-8"
        >
          <span className="text-[#0f1520] text-5xl font-black flex-shrink-0">$5,000</span>
          <div className="w-px h-10 bg-[#0f1520]/20 flex-shrink-0" />
          <p className="text-[#0f1520]/80 text-[16px] leading-relaxed">
            Maximum aggregate coverage over the full warranty term.{" "}
            <span className="font-black text-[#0f1520]">Per-system. Per-policy.</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
