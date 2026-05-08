"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Clock, DollarSign, Layers, CalendarCheck, Shield, Wrench, CheckCircle, MapPin } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

const STATS = [
  {
    value: "10 YR",
    label: "max term coverage",
    icon:  Clock,
    accent: "#96C83D",
    glow:   "rgba(150,200,61,0.12)",
  },
  {
    value: "$5K",
    label: "aggregate cap",
    icon:  DollarSign,
    accent: "#4FC3F7",
    glow:   "rgba(79,195,247,0.10)",
  },
  {
    value: "15+",
    label: "systems covered",
    icon:  Layers,
    accent: "#96C83D",
    glow:   "rgba(150,200,61,0.12)",
  },
  {
    value: "1/yr",
    label: "inspection required",
    icon:  CalendarCheck,
    accent: "#4FC3F7",
    glow:   "rgba(79,195,247,0.10)",
  },
]

const FEATURES = [
  { icon: Shield,       title: "Labor & refrigerant covered",    desc: "parts stay under manufacturer warranty" },
  { icon: Wrench,       title: "Licensed warranty program",      desc: "administered by Magellan Service Corp." },
  { icon: CheckCircle,  title: "Funded claims reserve",          desc: "real money behind every claim" },
  { icon: MapPin,       title: "40+ towns",                      desc: "Greater Boston & MetroWest since 2012" },
]

interface HeroProps {
  onRequestCall: () => void
  onAddCoverage: () => void
}

export default function Hero({ onRequestCall, onAddCoverage }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-[#0f1520] pt-40 pb-20"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:  "url('/assets/protect/protect-bg.png')",
          backgroundSize:   "320px",
          backgroundRepeat: "repeat",
          opacity:          0.055,
          maskImage:        "radial-gradient(ellipse 80% 55% at 50% 28%, black 0%, transparent 100%)",
          WebkitMaskImage:  "radial-gradient(ellipse 80% 55% at 50% 28%, black 0%, transparent 100%)",
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
            {/* Product logo */}
            <div className="mb-4">
              <Image
                src="/assets/protect/protect-title-logo.png"
                alt="SumZero PROTECT+"
                width={520}
                height={173}
                className="w-auto h-auto max-w-[340px]"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-black uppercase leading-[1.05] tracking-tight mb-6">
              <StaggeredText
                as="span"
                text="Your Labor."
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
                text="Covered."
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
                text="For Years."
                segmentBy="words"
                direction="bottom"
                blur={true}
                delay={90}
                duration={0.65}
                easing={[0.22, 1, 0.36, 1] as never}
                className="text-white"
              />
            </h1>

            {/* Subtext */}
            <p className="text-[17px] leading-relaxed text-white/60 max-w-[540px] mb-8">
              Your SumZero installation comes with a{" "}
              <strong className="text-white/90 font-bold">limited extended labor warranty</strong>{" "}
              — administered through a licensed warranty program and backed by a funded claims reserve.
              Up to $5,000 in labor and refrigerant coverage, for up to 10 years.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onRequestCall}
                className="bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold px-10 py-4 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide cursor-pointer"
              >
                Request a Call
              </button>
              <button
                onClick={onAddCoverage}
                className="border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-10 py-4 rounded-md transition-all duration-200 cursor-pointer"
              >
                Add Coverage →
              </button>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-end justify-end"
            style={{ marginBottom: "-32px" }}
          >
            <Image
              src="/assets/club-membership/hero-area-couple.png"
              alt="SumZero PROTECT+ Coverage"
              width={1200}
              height={1000}
              className="h-[660px] w-auto max-w-none object-contain object-bottom"
              priority
            />
          </motion.div>
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
                  e.currentTarget.style.boxShadow   = `0 12px 40px ${stat.glow}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${stat.accent}22`
                  e.currentTarget.style.boxShadow   = "none"
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
                  <p className="text-4xl font-black mb-1" style={{ color: stat.accent }}>
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

        {/* Feature grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
        >
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#141c2a] border border-white/8 rounded-lg px-6 py-5 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-white/5 flex items-center justify-center">
                  <Icon size={18} className="text-white/40" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{feat.title}</p>
                  <p className="text-white/50 text-sm">{feat.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
