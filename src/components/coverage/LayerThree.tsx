"use client"

import Image from "next/image"
import Script from "next/script"
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

export default function LayerThree({ onAddCoverage: openAddCoverage }: { onAddCoverage: () => void }) {
  return (
    <section className="bg-[#0f1520] py-24">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

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
              className="w-auto h-auto max-w-[338px]"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative bg-[#141c2a] rounded-xl overflow-hidden cursor-default"
              style={{ border: "1px solid rgba(150,200,61,0.15)", transition: "border-color 0.3s, box-shadow 0.3s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(150,200,61,0.40)"
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(150,200,61,0.08)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(150,200,61,0.15)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#96C83D] to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-b from-[rgba(150,200,61,0.05)] to-transparent" />
              <div className="relative px-7 py-7">
                <p className="text-[17px] font-bold text-[#96C83D] mb-3 uppercase tracking-wide">{card.title}</p>
                <p className="text-[17px] leading-relaxed text-white/65">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-column: eligibility CTA + reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">

          {/* Eligibility CTA box */}
          <div className="bg-[#1a2233] border border-white/8 rounded-xl px-8 py-8 flex flex-col sm:flex-row items-center gap-8">
            {/* Text */}
            <div className="flex-1">
              <p className="text-[13px] font-bold tracking-[0.22em] uppercase text-white/40 mb-3">
                For Existing Customers
              </p>
              <p className="text-[21px] font-bold text-white leading-snug mb-3">
                Is your system a SumZero install from the last 4 years?
              </p>
              <p className="text-[16px] leading-relaxed text-white/55">
                You may be eligible to add PROTECT+ coverage before the enrollment window closes.
              </p>
            </div>

            {/* Button + fine print */}
            <div className="flex-shrink-0 text-center">
              <button
                onClick={openAddCoverage}
                className="border border-white/25 hover:border-white/50 text-white font-bold text-[15px] px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 cursor-pointer mb-3 whitespace-nowrap"
              >
                Check Your Eligibility →
              </button>
              <p className="text-[12px] text-white/35 leading-snug">
                No third-party claims process.<br />
                You call (508) 965-0046 — we fix it.
              </p>
            </div>
          </div>

          {/* Reviews box — lighter background, centered */}
          <div className="bg-[#f1f3f6] border border-white/8 rounded-xl px-6 py-6 flex items-center justify-center">
            <div
              className="elfsight-app-ede031bb-3d61-41d9-832a-f52b234baa35"
              data-elfsight-app-lazy
            />
          </div>

        </div>

      </div>
    </section>
  )
}
