"use client"

import Image from "next/image"
import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1520] pt-[210px] pb-24">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:  "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize:   "28px 28px",
          maskImage:        "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 100%)",
          WebkitMaskImage:  "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 100%)",
        }}
      />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[720px] mx-auto"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/protect/protect-title-logo.png"
              alt="SumZero PROTECT+"
              width={520}
              height={173}
              className="w-auto h-auto max-w-[360px]"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-6xl sm:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Welcome to</span>
            <br />
            <span className="text-white">the </span>
            <span className="text-[#96C83D]">family.</span>
          </h1>

          {/* Body */}
          <p className="text-[19px] leading-relaxed text-white/60">
            Your installation includes PROTECT+ extended labor coverage. Here's what that means
            and what to do if you ever need it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
