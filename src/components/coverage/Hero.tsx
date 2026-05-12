"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Shield, Users } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1520] pt-[210px] pb-[74px]">

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
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-4">
            Installation Warranty
          </p>

          <h1 className="text-5xl sm:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-6">
            <span className="text-[#96C83D]">Zero</span>
            <span className="text-white"> Worry</span>
            <br />
            <span className="text-white">Installation Promise</span>
          </h1>

          <p className="text-[17px] leading-relaxed text-white/60 mb-16">
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
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="group relative bg-[#141c2a] rounded-2xl overflow-hidden cursor-pointer flex flex-col"
            style={{ border: "1px solid rgba(150,200,61,0.18)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(150,200,61,0.45)"
              e.currentTarget.style.boxShadow   = "0 20px 60px rgba(150,200,61,0.10)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(150,200,61,0.18)"
              e.currentTarget.style.boxShadow   = "none"
            }}
          >
            <Link href="/club-membership" className="absolute inset-0 z-10" aria-label="Learn more about Club Membership" />
            {/* Top accent bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#96C83D] to-transparent" />

            {/* Green glow wash on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none bg-gradient-to-b from-[rgba(150,200,61,0.06)] to-transparent" />

            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="flex items-center gap-1.5 bg-[#96C83D]/10 border border-[#96C83D]/25 text-[#96C83D] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                <Users size={10} />
                Membership
              </span>
            </div>

            <div className="relative p-8 flex flex-col gap-5 flex-1">
              <Image
                src="/assets/club-membership/teaser-title.png"
                alt="SumZero Club Membership"
                width={520}
                height={173}
                className="w-auto h-auto max-w-[300px]"
              />

              <p className="text-[15px] leading-relaxed text-white/60 flex-1">
                <span className="font-semibold text-white/85">$99 per system per year.</span>{" "}
                One 16-point inspection per system, priority scheduling, member pricing on every service call.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/8">
                <span className="text-[13px] text-white/35">Annual plan · auto-renews</span>
                <div className="flex items-center gap-1.5 text-[#96C83D] text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — PROTECT+ */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="group relative bg-[#141c2a] rounded-2xl overflow-hidden cursor-pointer flex flex-col"
            style={{ border: "1px solid rgba(79,195,247,0.18)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(79,195,247,0.45)"
              e.currentTarget.style.boxShadow   = "0 20px 60px rgba(79,195,247,0.10)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(79,195,247,0.18)"
              e.currentTarget.style.boxShadow   = "none"
            }}
          >
            <Link href="/coverage/protect/upgrade" className="absolute inset-0 z-10" aria-label="Learn more about SumZero PROTECT+" />
            {/* Top accent bar — blue for PROTECT+ */}
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#4FC3F7] to-transparent" />

            {/* Blue glow wash on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none bg-gradient-to-b from-[rgba(79,195,247,0.06)] to-transparent" />

            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="flex items-center gap-1.5 bg-[#4FC3F7]/10 border border-[#4FC3F7]/25 text-[#4FC3F7] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                <Shield size={10} />
                Warranty
              </span>
            </div>

            <div className="relative p-8 flex flex-col gap-5 flex-1">
              <Image
                src="/assets/protect/protect-title-logo.png"
                alt="SumZero PROTECT+"
                width={520}
                height={173}
                className="w-auto h-auto max-w-[300px]"
              />

              <p className="text-[15px] leading-relaxed text-white/60 flex-1">
                <span className="font-semibold text-white/85">Extended labor warranty</span>{" "}
                — covers repair labor costs on qualifying systems after the manufacturer's warranty period ends.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/8">
                <span className="text-[13px] text-white/35">Up to 10 yr · $5K aggregate</span>
                <div className="flex items-center gap-1.5 text-[#4FC3F7] text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
