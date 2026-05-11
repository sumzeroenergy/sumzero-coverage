"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Clock, CreditCard, ClipboardList, MapPin, Phone, Shield, ScanLine, BadgePercent, Gift } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

const STATS = [
  {
    value: "$99",
    label: "per system / per year",
    icon: Shield,
    accent: "#96C83D",
    glow: "rgba(150,200,61,0.12)",
  },
  {
    value: "16 Points",
    label: "documented inspection",
    icon: ScanLine,
    accent: "#4FC3F7",
    glow: "rgba(79,195,247,0.10)",
  },
  {
    value: "10%",
    label: "off service & repairs",
    icon: BadgePercent,
    accent: "#96C83D",
    glow: "rgba(150,200,61,0.12)",
  },
  {
    value: "$300",
    label: "referral gift card",
    icon: Gift,
    accent: "#4FC3F7",
    glow: "rgba(79,195,247,0.10)",
  },
]

const FEATURES = [
  { icon: Clock,         title: "Priority service queue",         desc: "members go to the front" },
  { icon: CreditCard,    title: "Weekend diagnostic $99",         desc: "half the standard $199 rate" },
  { icon: ClipboardList, title: "Warranty documentation included", desc: "keeps manufacturer coverage intact" },
  { icon: MapPin,        title: "40+ towns",                      desc: "Greater Boston & MetroWest since 2012" },
]

const PHONE      = "(508) 965-0046"
const PHONE_HREF = "tel:+15089650046"

interface HeroProps {
  onJoinClick: () => void
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-[#0f1520] pt-40 pb-20"
    >
      {/* Tiled logo background — fades at all edges, disappears before cards */}
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

        {/* Two-column: content left, reserved right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end min-h-[480px]">

          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Club logo / title image */}
            <div className="mb-4">
              <Image
                src="/assets/club-membership/teaser-title.png"
                alt="SumZero Club Membership Program"
                width={520}
                height={173}
                className="w-auto h-auto max-w-[420px]"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-black uppercase leading-[1.05] tracking-tight mb-6">
              <StaggeredText
                as="span"
                text="Your Systems."
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
                text="Inspected."
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
                text="Every Year."
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
              A trained technician goes through every accessible component, documents what they find,
              and tells you exactly what your system needs — before it breaks down at the worst possible time.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={onJoinClick}
                className="bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold px-10 py-4 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide cursor-pointer"
              >
                Join Comfort Club
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

          {/* Right — couple photo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-end justify-end"
            style={{ marginBottom: "-32px" }}
          >
            <Image
              src="/assets/club-membership/hero-area-couple.png"
              alt="Homeowners with SumZero Comfort Club"
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
                  e.currentTarget.style.boxShadow = `0 12px 40px ${stat.glow}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${stat.accent}22`
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: `linear-gradient(to right, transparent, ${stat.accent}, transparent)` }}
                />

                {/* Hover bg wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(to bottom, ${stat.glow}, transparent 60%)` }}
                />

                <div className="relative px-6 pt-5 pb-6 text-center">
                  {/* Icon */}
                  <div
                    className="mx-auto mb-3 w-10 h-10 rounded-md flex items-center justify-center transition-all duration-300"
                    style={{ background: `${stat.accent}18` }}
                  >
                    <Icon size={18} style={{ color: stat.accent }} />
                  </div>

                  {/* Value */}
                  <p
                    className="text-4xl font-black mb-1 transition-colors duration-300"
                    style={{ color: stat.accent }}
                  >
                    {stat.value}
                  </p>

                  {/* Label */}
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
