"use client"

import Image from "next/image"
import { motion } from "motion/react"
import StaggeredText from "@/components/react-bits/staggered-text"

const PILLS = [
  "Labor covered, not just parts",
  "Up to $5,000 aggregate",
  "Transfers when you sell",
]

interface HeroProps {
  onGetProtected: () => void
}

export default function Hero({ onGetProtected }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-[#0f1520] pt-40 pb-20"
    >
      {/* Tiled protect-bg background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/protect/protect-bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
          opacity: 0.055,
          maskImage: "radial-gradient(ellipse 80% 55% at 50% 28%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 28%, black 0%, transparent 100%)",
        }}
      />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Two-column: content left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end min-h-[480px]">

          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 border border-white/15 text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#96C83D]" />
                For SumZero customers · Installed within last 4 years
              </span>
            </div>

            {/* Logo image */}
            <div className="mb-4">
              <Image
                src="/assets/protect/protect-title-logo.png"
                alt="SumZero PROTECT+"
                width={520}
                height={173}
                className="w-auto h-auto max-w-[380px]"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-black uppercase leading-[1.05] tracking-tight mb-6">
              <StaggeredText
                as="span"
                text="Your System"
                segmentBy="words"
                direction="bottom"
                blur={true}
                delay={90}
                duration={0.65}
                easing={[0.22, 1, 0.36, 1] as never}
                className="text-white"
              />
              <StaggeredText
                as="span"
                text="Is In."
                segmentBy="words"
                direction="bottom"
                blur={true}
                delay={90}
                duration={0.65}
                easing={[0.22, 1, 0.36, 1] as never}
                className="text-white"
              />
              {" "}
              <StaggeredText
                as="span"
                text="Protect"
                segmentBy="words"
                direction="bottom"
                blur={true}
                delay={90}
                duration={0.65}
                easing={[0.22, 1, 0.36, 1] as never}
                className="text-[#96C83D]"
              />
              <StaggeredText
                as="span"
                text="The Labor Behind It."
                segmentBy="words"
                direction="bottom"
                blur={true}
                delay={90}
                duration={0.65}
                easing={[0.22, 1, 0.36, 1] as never}
                className="text-white"
              />
            </h1>

            {/* Green accent bar */}
            <div className="mb-6 w-10 h-[3px] bg-[#96C83D] rounded-full" />

            {/* Subtext */}
            <p className="text-[17px] leading-relaxed text-white/60 max-w-[540px] mb-8">
              You already have the equipment. The manufacturer covers the parts.{" "}
              <span className="font-bold text-white/85">
                This warranty covers the labor — diagnostic, repair, and refrigerant — for up to 10 years.
              </span>{" "}
              When something breaks, we come out. You don't get a bill.
            </p>

            {/* Pill badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 bg-[#141c2a] border border-white/10 text-white/70 text-[13px] font-medium px-4 py-2 rounded-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#96C83D]" />
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={onGetProtected}
              className="bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold px-10 py-4 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide cursor-pointer"
            >
              Get Protected Today
            </button>
          </motion.div>

          {/* Right — reserved for image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-end justify-end"
            style={{ marginBottom: "-32px" }}
          />

        </div>
      </div>
    </section>
  )
}
