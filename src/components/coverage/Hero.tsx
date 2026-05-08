"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  onAddCoverage: () => void
  onJoinClub:    () => void
}

export default function Hero({ onAddCoverage, onJoinClub }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0f1520] pt-40 pb-20">

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

        {/* Centered text stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[720px] mx-auto"
        >
          {/* Label */}
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-4">
            Installation Warranty
          </p>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-6">
            <span className="text-[#96C83D]">Zero</span>
            <span className="text-white"> Worry</span>
            <br />
            <span className="text-white">Installation Promise</span>
          </h1>

          {/* Body */}
          <p className="text-[17px] leading-relaxed text-white/60 mb-14">
            Every SumZero installation comes with a workmanship guarantee, an annual inspection
            on every system we put in, and the option to extend your labor coverage for up to 10 years.
            Here's exactly how each one works.
          </p>
        </motion.div>

        {/* Two product cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto"
        >

          {/* Card 1 — Club Membership */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group bg-[#141c2a] border border-[#96C83D]/20 hover:border-[#96C83D]/45 rounded-2xl p-8 flex flex-col gap-6 transition-colors duration-300 cursor-pointer"
            onClick={onJoinClub}
          >
            <Image
              src="/assets/club-membership/teaser-title.png"
              alt="SumZero Club Membership"
              width={520}
              height={173}
              className="w-auto h-auto max-w-[260px]"
            />
            <p className="text-[15px] leading-relaxed text-white/60 flex-1">
              <span className="font-semibold text-white/85">Club Membership — $99 per system per year.</span>{" "}
              One 16-point inspection per system, priority scheduling, member pricing on every service call.
            </p>
            <div className="flex items-center gap-2 text-[#96C83D] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
              Learn more <ArrowRight size={15} />
            </div>
          </motion.div>

          {/* Card 2 — PROTECT+ */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group bg-[#141c2a] border border-[#96C83D]/20 hover:border-[#96C83D]/45 rounded-2xl p-8 flex flex-col gap-6 transition-colors duration-300 cursor-pointer"
            onClick={onAddCoverage}
          >
            <Image
              src="/assets/protect/protect-title-logo.png"
              alt="SumZero PROTECT+"
              width={520}
              height={173}
              className="w-auto h-auto max-w-[260px]"
            />
            <p className="text-[15px] leading-relaxed text-white/60 flex-1">
              <span className="font-semibold text-white/85">Extended labor warranty</span>{" "}
              — covers repair labor costs on qualifying systems after the manufacturer's warranty period ends.
            </p>
            <div className="flex items-center gap-2 text-[#96C83D] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
              Learn more <ArrowRight size={15} />
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
