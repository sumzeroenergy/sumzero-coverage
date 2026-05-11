"use client"

import { motion } from "motion/react"
import { Phone, MessageSquare } from "lucide-react"
import { openRequestCallModal } from "@/components/RequestCallModal"

interface FinalCtaProps {
  onGetProtected: () => void
}

export default function FinalCta({ onGetProtected }: FinalCtaProps) {
  return (
    <section className="bg-[#0f1520] pb-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#141c2a] border border-white/8 rounded-3xl px-10 py-16 text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Ready To </span>
            <span className="text-[#96C83D]">Lock It In?</span>
          </h2>

          <p className="text-white/55 text-[17px] leading-relaxed max-w-[500px] mx-auto mb-10">
            Call us now. We'll pull up your record, confirm your system is eligible,
            and walk you through the agreement in one call.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onGetProtected}
              className="flex items-center gap-2.5 bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 uppercase tracking-wide cursor-pointer"
            >
              <Phone size={16} />
              Get Protected Today
            </button>
            <button
              onClick={openRequestCallModal}
              className="flex items-center gap-2.5 bg-transparent border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wide cursor-pointer"
            >
              <MessageSquare size={16} />
              Request a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
