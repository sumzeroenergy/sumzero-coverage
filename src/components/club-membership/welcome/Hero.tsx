"use client"

import Image from "next/image"
import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1520] pt-[210px] pb-24">

      {/* Tiled bg-logo — same as club-membership main page */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/club-membership/bg-logo.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
          opacity: 0.055,
          maskImage: "radial-gradient(ellipse 80% 55% at 50% 28%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 28%, black 0%, transparent 100%)",
        }}
      />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <p className="text-white/60 text-[22px] font-semibold mb-6">
              Welcome to the family.
            </p>

            {/* Headline */}
            <h1 className="text-6xl sm:text-8xl font-black leading-[1.0] tracking-tight mb-8">
              <span className="text-white">You're a</span>
              <br />
              <span className="text-[#96C83D]">Club </span>
              <span className="text-white">Member.</span>
            </h1>

            {/* Body */}
            <p className="text-[19px] leading-relaxed text-white/55 max-w-[520px]">
              This page is just for you. Everything you need to know about what happens next,
              what's included, and how your membership works.
            </p>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <Image
              src="/assets/club-membership/major-systems.png"
              alt="SumZero Club Membership — major systems"
              width={680}
              height={680}
              className="w-auto h-auto max-w-[560px]"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
