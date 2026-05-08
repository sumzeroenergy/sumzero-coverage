"use client"

import { motion } from "motion/react"

interface FinalCtaProps {
  onJoinClub:    () => void
}

export default function FinalCta({ onJoinClub }: FinalCtaProps) {
  return (
    <section className="bg-[#0f1520] py-28">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[780px] mx-auto"
        >
          <p className="text-sm font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-8">
            Start Your Coverage
          </p>

          <h2 className="text-6xl sm:text-7xl font-black leading-tight tracking-tight mb-8">
            <span className="text-white">Ready for </span>
            <span className="text-[#96C83D]">Zero Worry</span>
            <span className="text-white">?</span>
          </h2>

          <p className="text-[19px] leading-relaxed text-white/60 mb-12">
            Club Membership starts at $99 per system per year. If you want to extend your labor coverage,
            PROTECT+ is available to qualifying SumZero installs within 4 years of the installation date.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onJoinClub}
              className="bg-[#96C83D] hover:bg-[#7aaa28] text-[#0f1520] font-bold text-[17px] px-12 py-5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Join Club Membership
            </button>
            <a
              href="tel:+15089650046"
              className="border border-white/25 hover:border-white/50 text-white font-bold text-[17px] px-12 py-5 rounded-xl transition-all duration-200 hover:bg-white/5 cursor-pointer"
            >
              Call 508.965.0046
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
