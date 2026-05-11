"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Shield, Clock, BadgeCheck, ArrowRightLeft, Phone } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

const STATS = [
  {
    value: "10 Years",
    label: "max coverage term",
    icon: Clock,
    accent: "#96C83D",
    glow: "rgba(150,200,61,0.12)",
  },
  {
    value: "$5,000",
    label: "aggregate cap",
    icon: Shield,
    accent: "#4FC3F7",
    glow: "rgba(79,195,247,0.10)",
  },
  {
    value: "Labor",
    label: "diagnostic, repair & refrigerant",
    icon: BadgeCheck,
    accent: "#96C83D",
    glow: "rgba(150,200,61,0.12)",
  },
  {
    value: "Transfers",
    label: "when you sell your home",
    icon: ArrowRightLeft,
    accent: "#4FC3F7",
    glow: "rgba(79,195,247,0.10)",
  },
]

const PHONE      = "(508) 965-0046"
const PHONE_HREF = "tel:+15089650046"

interface HeroProps {
  onGetProtected: () => void
}

export default function Hero({ onGetProtected }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-[#0f1520] pt-52 pb-20"
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
              <span className="block">
                <StaggeredText
                  as="span"
                  text="Your System Is In."
                  segmentBy="words"
                  direction="bottom"
                  blur={true}
                  delay={90}
                  duration={0.65}
                  easing={[0.22, 1, 0.36, 1] as never}
                  className="text-white"
                />
              </span>
              <span className="block">
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
              </span>
              <span className="block">
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
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-[17px] leading-relaxed text-white/60 max-w-[540px] mb-8">
              You already have the equipment. The manufacturer covers the parts.{" "}
              <span className="font-bold text-white/85">
                This warranty covers the labor — diagnostic, repair, and refrigerant — for up to 10 years.
              </span>{" "}
              When something breaks, we come out. You don't get a bill.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={onGetProtected}
                className="bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold px-10 py-4 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide cursor-pointer"
              >
                Get Protected Today
              </button>
              <a
                href={PHONE_HREF}
                className="text-white/60 hover:text-white font-medium transition-colors duration-200 cursor-pointer"
              >
                <Phone size={15} className="inline mr-2 text-[#96C83D]" />
                {PHONE}
              </a>
            </div>
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

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-[#141c2a] rounded-lg overflow-hidden cursor-default"
                style={{
                  border: `1px solid ${stat.accent}22`,
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${stat.accent}55`
                  e.currentTarget.style.boxShadow = `0 12px 40px ${stat.glow}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${stat.accent}22`
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <div
                  className="h-[3px] w-full"
                  style={{ background: `linear-gradient(to right, transparent, ${stat.accent}, transparent)` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(to bottom, ${stat.glow}, transparent 60%)` }}
                />
                <div className="relative px-6 pt-5 pb-6 text-center">
                  <div
                    className="mx-auto mb-3 w-10 h-10 rounded-md flex items-center justify-center"
                    style={{ background: `${stat.accent}18` }}
                  >
                    <Icon size={18} style={{ color: stat.accent }} />
                  </div>
                  <p
                    className="text-4xl font-black mb-1"
                    style={{ color: stat.accent }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
