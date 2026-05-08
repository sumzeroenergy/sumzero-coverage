"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Phone } from "lucide-react"

export default function Questions() {
  return (
    <section className="bg-[#eef1f3] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[560px] mx-auto"
        >
          <p className="text-[17px] font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-4">
            Questions?
          </p>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1F2535] mb-4">
            We're always a call away.
          </h2>
          <p className="text-[18px] leading-relaxed text-[#5a6a7e] mb-10">
            Questions about your coverage, your plan details, or anything with your system — just call.
          </p>

          <a
            href="tel:+15089650046"
            className="inline-flex items-center gap-3 bg-[#1F2535] hover:bg-[#0f1520] text-white font-bold text-[17px] px-10 py-5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer mb-6"
          >
            <Phone size={18} />
            508.965.0046
          </a>

          <p className="text-[14px] text-[#5a6a7e]">
            <Link
              href="/coverage/protect/terms"
              className="hover:text-[#1F2535] underline underline-offset-2 transition-colors duration-200 cursor-pointer"
            >
              Read the full PROTECT+ Terms &amp; Conditions
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
