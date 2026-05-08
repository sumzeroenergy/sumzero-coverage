"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Tag } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

const BENEFITS = [
  {
    title: "Annual 16-point system inspection",
    sub: "Valued at $149 for non-members — included in membership",
    value: "check",
  },
  {
    title: "Priority service queue",
    sub: "Front of the line when you need us",
    value: "check",
  },
  {
    title: "Service & maintenance",
    sub: "All labor — repairs, tune-ups, any service visit",
    value: "15% off",
  },
  {
    title: "New equipment installation",
    sub: "Heat pumps, mini-splits, water heaters, and more",
    value: "5% off",
  },
  {
    title: "Electrical services",
    sub: "Panel upgrades, EV chargers, outlets & switches",
    value: "10% off",
  },
  {
    title: "Plumbing services",
    sub: "Boilers, water heaters, drain cleaning, and more",
    value: "10% off",
  },
  {
    title: "Weekend diagnostic charge",
    sub: "$199 standard → $99 for members. One Saturday call covers a full year.",
    value: "$99",
  },
  {
    title: "Referral gift card",
    sub: "When a friend or neighbor installs with SumZero",
    value: "$300",
  },
]

interface MembershipPricingProps {
  onJoinClick: () => void
}

export default function MembershipPricing({ onJoinClick }: MembershipPricingProps) {
  return (
    <>
      {/* Geometric divider — grey (#f1f3f6) to white */}
      <div className="w-full bg-[#f1f3f6] leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 block"
          fill="white"
        >
          <polygon points="0,80 1440,0 1440,80" />
        </svg>
      </div>

      <section id="pricing" className="bg-white py-24">
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
              <Tag size={17} />
              Membership pricing
            </motion.p>

            <h2 className="text-5xl sm:text-6xl font-black text-[#1F2535] mb-4">
              <StaggeredText
                as="div"
                text="$99 per system, per year."
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
                text="Every benefit. No contract."
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
              Renews automatically each year via credit card. Cancel any time — benefits end at
              cancellation. Membership is transferable within SumZero's service area.
            </motion.p>
          </div>

          {/* Pricing layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start">

            {/* Left — dark card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#0f1520] rounded-lg p-10 flex flex-col items-center text-center gap-7 sticky top-28 overflow-hidden"
            >
              {/* Subtle background photo */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "url('/assets/club-membership/Man_working_on_heating_system.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.12,
                }}
              />

              {/* All content above the background */}
              <div className="relative z-10 flex flex-col items-center gap-7 w-full">
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#96C83D]">
                  Annual Membership
                </p>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-start gap-1 leading-none">
                    <span className="text-3xl font-black text-white mt-3">$</span>
                    <span className="text-[7rem] font-black text-white leading-none">99</span>
                  </div>
                  <p className="text-[16px] text-white/50">per system · per year</p>
                </div>

                <button
                  onClick={onJoinClick}
                  className="w-full bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold px-10 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide cursor-pointer"
                >
                  Join the Club
                </button>

                <div className="w-full border-t border-white/10" />

                <p className="text-[13px] leading-relaxed text-white/40">
                  No long-term contract. Cancel any time. Benefits stop at cancellation —
                  nothing billed after.
                </p>
              </div>
            </motion.div>

            {/* Right — benefit rows */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {BENEFITS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-center justify-between gap-6 py-5 ${
                    i < BENEFITS.length - 1 ? "border-b border-[#e8eaed]" : ""
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-[17px] font-bold text-[#1F2535]">{item.title}</p>
                    <p className="text-[15px] text-[#5a6a7e] leading-relaxed">{item.sub}</p>
                  </div>

                  <div className="flex-shrink-0">
                    {item.value === "check" ? (
                      <Image
                        src="/assets/club-membership/check.png"
                        alt="Included"
                        width={36}
                        height={36}
                        className="w-9 h-9 object-contain"
                      />
                    ) : (
                      <span className="text-[17px] font-black text-[#96C83D] whitespace-nowrap">
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* What's not included note */}
              <div className="mt-6 bg-[#f1f3f6] rounded-lg px-6 py-5">
                <p className="text-[15px] leading-relaxed text-[#5a6a7e]">
                  <span className="font-bold text-[#1F2535]">What's not included: </span>
                  Tune-ups, cleaning, refrigerant adjustments, and part replacements are not
                  automatic. Any work beyond the inspection is recommended only if needed,
                  explained first, and requires your approval — priced separately at member rates.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  )
}
