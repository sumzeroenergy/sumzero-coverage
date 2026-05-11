"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { openRequestCallModal } from "@/components/RequestCallModal"

export default function FinalCta() {
  return (
    <section className="bg-[#0f1520] py-28 relative overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.07,
        }}
      />

      <div className="relative max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Image
            src="/assets/club-membership/teaser-title.png"
            alt="SumZero Club Membership"
            width={480}
            height={240}
            className="w-auto h-40 mx-auto ml-[25px]"
          />
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-2xl font-bold tracking-[0.25em] uppercase mb-6"
        >
          We're Here
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl font-black text-white leading-[1.05] mb-6 max-w-[720px]"
        >
          Any questions at all — call us.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-[19px] leading-relaxed max-w-[560px] mb-12"
        >
          You're a member now. That means you don't wait on hold or navigate a phone tree. We pick up.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={openRequestCallModal}
            className="bg-[#96C83D] hover:bg-[#7aaa28] text-[#0f1520] font-bold text-[17px] px-10 py-4 rounded-xl cursor-pointer transition-colors duration-200"
          >
            Request a Call
          </button>
          <a
            href="mailto:info@sumzeroenergysystems.com"
            className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-[17px] px-10 py-4 rounded-xl cursor-pointer transition-colors duration-200 text-center"
          >
            Send us a Message
          </a>
        </motion.div>

      </div>
    </section>
  )
}
