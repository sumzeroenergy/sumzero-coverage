"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Check, Umbrella } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

const CARDS = [
  {
    badge: "→ YOU START HERE · INCLUDED",
    badgeActive: true,
    title: "Inspection",
    body: "A trained technician evaluates every accessible component — 16 documented points per system type. Nothing is touched, cleaned, or replaced. The goal is an accurate picture of your system's condition, in a written report.",
    tags: ["INSPECT", "CHECK", "TEST", "MEASURE", "DOCUMENT"],
    tagsActive: true,
    footnote: "7 system types covered. Ends with a written report and a clear walkthrough of findings.",
    footer: "INCLUDED IN YOUR $99 MEMBERSHIP",
    footerIncluded: true,
    active: true,
  },
  {
    badge: "IF INSPECTION SHOWS NEED",
    badgeActive: false,
    title: "Tune-Up",
    body: "Physical upkeep of components that need attention. If the inspection shows dirty coils, a worn belt, clogged drain lines, or loose wiring — a tune-up addresses it. Only what the system actually needs.",
    tags: ["WASH", "CLEAN", "LUBRICATE", "REWIRE", "CALIBRATE"],
    tagsActive: false,
    footnote: "Examples: clean blower motor, wash evaporator coil, clean heat exchanger and burner, clean condensate drain, rewire loose connections, calibrate thermostat.",
    footer: "PRICED SEPARATELY · 15% OFF AT MEMBER RATES",
    footerIncluded: false,
    active: false,
  },
  {
    badge: "PROACTIVE — BEFORE FAILURE",
    badgeActive: false,
    title: "Rejuvenation",
    body: "The system is still running. Nothing is obviously wrong. But some components have a known lifespan — and when they fail, they take other parts with them. Rejuvenation replaces aging components before the emergency arrives.",
    tags: ["REPLACE", "RESTORE", "RENEW", "REBUILD"],
    tagsActive: false,
    footnote: "When inspection identifies components approaching end of service life, we explain which parts, why they matter, and what it costs to address them now — not reactively during a breakdown.",
    footer: "PRICED SEPARATELY · 15% OFF AT MEMBER RATES",
    footerIncluded: false,
    active: false,
  },
]

function CardGrid() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      {CARDS.map((card, i) => {
        const isActive = card.active || hovered === i
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => !card.active && setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ transition: "border-color 0.25s, box-shadow 0.25s" }}
            className={`bg-white rounded-lg flex flex-col p-7 border-2 transition-colors duration-250 ${
              isActive
                ? "border-[#96C83D] shadow-[0_8px_32px_rgba(150,200,61,0.22)] cursor-default"
                : "border-[#d0d7e2] shadow-[0_4px_20px_rgba(0,0,0,0.06)] cursor-pointer"
            }`}
          >
            {/* Badge */}
            <div className="mb-5">
              <span
                className={`inline-block text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-[7px] rounded-full transition-colors duration-250 ${
                  isActive
                    ? "bg-[#0f1520] text-[#96C83D]"
                    : "bg-[#eaecf0] text-[#5a6a7e]"
                }`}
              >
                {card.badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[2rem] font-black text-[#1F2535] leading-tight mb-4">
              {card.title}
            </h3>

            {/* Body */}
            <p className="text-[16px] leading-relaxed text-[#5a6a7e] mb-6">
              {card.body}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-[6px] rounded transition-colors duration-250 ${
                    isActive
                      ? "bg-[#eef6db] text-[#5a7a1a] border border-[#96C83D]/30"
                      : "bg-[#f1f3f6] text-[#5a6a7e] border border-[#d0d7e2]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-[#e8eaed] mb-5 mt-auto" />

            {/* Footnote */}
            <p className="text-[14px] leading-relaxed text-[#5a6a7e] mb-4">
              {card.footnote}
            </p>

            {/* Footer */}
            {card.footerIncluded ? (
              <p className="flex items-center gap-2 text-[13px] font-bold tracking-[0.12em] uppercase text-[#96C83D]">
                <Check size={14} strokeWidth={3} />
                {card.footer}
              </p>
            ) : (
              <div className="flex flex-col gap-0.5">
                <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1F2535]">
                  PRICED SEPARATELY
                </p>
                <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#5a7a1a]">
                  15% OFF AT MEMBER RATES
                </p>
              </div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

export default function MaintenanceUmbrella() {
  return (
    <section id="how-it-works" className="bg-[#f1f3f6] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-base font-bold tracking-wide uppercase text-[#5a6a7e] mb-3"
          >
            <Umbrella size={17} />
            The maintenance umbrella
          </motion.p>

          <h2 className="text-5xl sm:text-6xl font-black text-[#1F2535] mb-4">
            <StaggeredText
              as="div"
              text="Three types of work."
              segmentBy="words"
              direction="bottom"
              blur={true}
              delay={70}
              duration={0.6}
              easing={[0.22, 1, 0.36, 1] as never}
              className="text-[#1F2535]"
            />
            <StaggeredText
              as="div"
              text="You always start with the inspection."
              segmentBy="words"
              direction="bottom"
              blur={true}
              delay={70}
              duration={0.6}
              easing={[0.22, 1, 0.36, 1] as never}
              className="text-[#1F2535]"
            />
          </h2>

          <motion.p
            initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[17px] leading-relaxed text-[#5a6a7e] max-w-[680px]"
          >
            Every engagement starts with an inspection that tells us what your system actually needs.
            From there, we recommend nothing, a tune-up, or in some cases a rejuvenation. You decide.
            You approve. Nothing happens without your sign-off.
          </motion.p>
        </div>

        {/* Cards */}
        <CardGrid />

      </div>
    </section>
  )
}
