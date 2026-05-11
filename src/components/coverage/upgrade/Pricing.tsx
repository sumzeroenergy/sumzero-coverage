"use client"

import { motion } from "motion/react"
import { CheckCircle2, Star } from "lucide-react"

const FEATURES = [
  "Diagnostic labor on any covered call",
  "Repair labor — remove, replace, reinstall",
  "Refrigerant when leak is permanently fixed",
  "Thermostat labor up to $250 lifetime",
  "$5,000 aggregate over the warranty term",
]

const PLANS = [
  {
    years: "5",
    price: "900",
    popular: false,
    accent: "#4FC3F7",
    glow: "rgba(79,195,247,0.10)",
    border: "rgba(79,195,247,0.25)",
    borderHover: "rgba(79,195,247,0.5)",
  },
  {
    years: "10",
    price: "1,400",
    popular: true,
    accent: "#96C83D",
    glow: "rgba(150,200,61,0.12)",
    border: "rgba(150,200,61,0.45)",
    borderHover: "rgba(150,200,61,0.75)",
  },
]

interface PricingProps {
  onGetProtected: () => void
}

export default function Pricing({ onGetProtected }: PricingProps) {
  return (
    <section className="relative bg-[#f1f3f6] py-24 overflow-hidden">

      {/* Faded tiled background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/protect/protect-bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "280px",
          opacity: 0.04,
        }}
      />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Choose Your Term
          </p>
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-3">
            <span className="text-[#1F2535]">Two Options. </span>
            <span className="text-[#96C83D]">One Decision.</span>
          </h2>
          <div className="mt-3 mb-5 w-10 h-[3px] bg-[#96C83D] rounded-full" />
          <p className="text-[17px] leading-relaxed text-[#5a6a7e] max-w-[540px]">
            Both plans cover the same systems, the same labor, and the same $5,000 aggregate.
            The only difference is how long your protection runs.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px]">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.years}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#141c2a] rounded-2xl flex flex-col"
              style={{
                border: `1px solid ${plan.border}`,
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = plan.borderHover
                e.currentTarget.style.boxShadow = `0 20px 60px ${plan.glow}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = plan.border
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="flex items-center gap-2 bg-[#96C83D] text-white text-[12px] font-black tracking-[0.2em] uppercase px-5 py-2 rounded-full shadow-lg shadow-[#96C83D]/40">
                    <Star size={11} fill="white" />
                    Most Popular — Best Value
                    <Star size={11} fill="white" />
                  </span>
                </div>
              )}

              {/* Top accent bar */}
              <div
                className="h-[3px] w-full rounded-t-2xl"
                style={{ background: `linear-gradient(to right, transparent, ${plan.accent}, transparent)` }}
              />

              <div className="p-8 flex flex-col flex-1">

                {/* Year + Price row */}
                <div className="flex items-center gap-4 mb-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[80px] font-black leading-none text-white">{plan.years}</span>
                    <span className="text-sm font-bold tracking-[0.15em] uppercase text-white/40 mb-1">Year</span>
                  </div>
                  <div className="flex-1 h-px bg-white/10" />
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl font-black" style={{ color: plan.accent }}>$</span>
                    <span className="text-[64px] font-black leading-none" style={{ color: plan.accent }}>
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-[13px] text-white/35 mb-8">
                  One-time payment · Per system · No annual fee
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {FEATURES.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle2 size={17} className="flex-shrink-0 mt-0.5" style={{ color: plan.accent }} />
                      <span className="text-[15px] text-white/70 leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={onGetProtected}
                  className="w-full py-4 rounded-xl font-bold text-[15px] uppercase tracking-wide transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                  style={
                    plan.popular
                      ? { background: "#96C83D", color: "white" }
                      : { background: "rgba(79,195,247,0.08)", color: "#4FC3F7", border: "1px solid rgba(79,195,247,0.25)" }
                  }
                >
                  Get Started Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-[13px] text-[#5a6a7e] max-w-[680px]"
        >
          Each warranty covers one outdoor unit and its associated indoor components. If you have two separate systems
          (e.g., a heat pump and a furnace),{" "}
          <span className="font-bold text-[#1F2535]">each requires its own warranty.</span>
        </motion.p>

      </div>
    </section>
  )
}
