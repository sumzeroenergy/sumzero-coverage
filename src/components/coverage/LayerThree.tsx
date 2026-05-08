"use client"

import Image from "next/image"
import { motion } from "motion/react"

const CARDS = [
  {
    title: "When something breaks",
    body:  "You call us. We diagnose it, fix it, and there is no labor bill. That repair that would have cost you $1,200 to $1,800 costs you nothing.",
  },
  {
    title: "For up to 10 years",
    body:  "One payment covers your labor risk for a decade. The 10-year plan is $1,400 — less than the cost of a single compressor repair.",
  },
  {
    title: "Reserved for SumZero customers",
    body:  "PROTECT+ is not publicly available. If you installed with us in the last 4 years, you can still add it. Most customers who qualify don't know they have a window.",
  },
  {
    title: "Parts are already covered",
    body:  "Your manufacturer's warranty covers the compressor, the coil, the parts. PROTECT+ covers the labor to install them — the part the manufacturer never pays for.",
  },
]

interface LayerThreeProps {
  onAddCoverage: () => void
}

export default function LayerThree({ onAddCoverage }: LayerThreeProps) {
  return (
    <section className="bg-[#0f1520] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo as label */}
          <div className="mb-8">
            <Image
              src="/assets/protect/protect-title-logo.png"
              alt="SumZero PROTECT+"
              width={520}
              height={173}
              className="w-auto h-auto max-w-[260px]"
            />
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white mb-6 max-w-[820px]">
            Manufacturer warranty covers parts. Labor is on you unless you have PROTECT+.
          </h2>

          {/* Body */}
          <p className="text-[17px] leading-relaxed text-white/60 max-w-[820px] mb-12">
            When your heat pump compressor fails at year 6, Mitsubishi sends the part. The labor to diagnose it,
            pull the old compressor, install the new one, and recharge the system — that bill is yours.
            A typical repair like that runs $1,200 to $1,800. PROTECT+ covers that labor cost on qualifying
            SumZero-installed systems.
          </p>
        </motion.div>

        {/* 2x2 card grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
              className="bg-[#141c2a] border border-white/8 rounded-xl px-7 py-6"
            >
              <p className="text-[15px] font-bold text-[#96C83D] mb-3">{card.title}</p>
              <p className="text-[15px] leading-relaxed text-white/65">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <button
            onClick={onAddCoverage}
            className="bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold text-[17px] px-10 py-5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Add PROTECT+ Coverage →
          </button>
        </motion.div>

      </div>
    </section>
  )
}
