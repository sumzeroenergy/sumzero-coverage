"use client"

import { motion } from "motion/react"
import { openBookingModal } from "@/lib/booking-modal"
import { LEAD_SUMMARIES } from "@/lib/lead-summaries"

export default function FinalCta() {
  return (
    <section className="bg-[#0f1520] py-28">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-6"
        >
          Ready to join?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[clamp(3.5rem,9vw,7rem)] font-black uppercase leading-[0.92] tracking-tight">
            <span className="text-white block">$99 a year.</span>
            <span className="text-[#96C83D] block">Your HVAC people.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-8 max-w-[520px] text-[17px] text-white/55 leading-relaxed"
        >
          We&rsquo;ll confirm your address, note which systems you want enrolled, and get you set up.
          We schedule your first inspection before the season starts — you don&rsquo;t have to chase it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <button
            onClick={() => openBookingModal(LEAD_SUMMARIES.CLUB_MEMBERSHIP)}
            className="bg-[#96C83D] hover:bg-[#7aaa28] text-white font-black text-[15px] uppercase tracking-widest px-12 py-5 rounded-xl transition-all duration-200 hover:shadow-[0_0_40px_rgba(150,200,61,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Join the Club Now
          </button>

          <p className="text-[13px] text-white/30 tracking-wide">
            No long-term contract &middot; Cancel any time
          </p>
        </motion.div>

      </div>
    </section>
  )
}
