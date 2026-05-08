"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { X, Check, Scale } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

const WITHOUT_ITEMS = [
  "Small problems compound quietly. A worn capacitor, a slow refrigerant leak, a cracked heat exchanger — none of these announce themselves. They just get worse.",
  "Manufacturer warranties require documented annual maintenance. Without it, a parts claim can be denied — even on equipment that's still under warranty.",
  "A weekend breakdown costs $199 for a technician to show up — before a single repair is made. Members pay $99 for the same call.",
  "You explain your system from scratch every time you call. No history, no relationship, no one who already knows your home.",
]

const WITH_ITEMS = [
  "A technician goes through your system every year — 16 documented points, written report, findings explained. Problems get caught when they're still small.",
  "Your inspection generates the maintenance documentation manufacturers require. Your warranty stays intact.",
  "Priority service — you go to the front of the queue. And when you call on a Saturday, you pay $99, not $199. One call covers the year.",
  "We know your systems, your home, your history. You're not explaining everything from scratch every time — you have your HVAC people.",
]

export default function WhyItMatters() {
  return (
    <section id="why-it-matters" className="bg-[#f1f3f6] py-24">
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
            <Scale size={17} />
            Why It Matters
          </motion.p>

          <h2 className="text-5xl sm:text-6xl font-black text-[#1F2535] mb-4">
            <StaggeredText
              as="span"
              text="What happens either way."
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
            Home systems don't fail randomly. Most failures are the last step in a chain of events that started
            months — sometimes years — earlier. The difference between catching it and missing it comes
            down to whether someone looked.
          </motion.p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-28 items-start">

          {/* Top-left — transparent PNG, no box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <Image
              src="/assets/club-membership/no-inspection-issue.png"
              alt="Inspection issues detected on HVAC unit"
              width={570}
              height={608}
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </motion.div>

          {/* Top-right — WITHOUT card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white border border-[#d0d7e2] rounded-lg pt-10 px-8 pb-8 flex flex-col overflow-visible"
            style={{ boxShadow: "0 4px 28px rgba(0,0,0,0.08)" }}
          >
            <span className="absolute top-0 left-8 -translate-y-1/2 bg-[#7a1e1e] text-white text-[17px] font-bold tracking-[0.18em] uppercase px-6 py-[11px] rounded-full whitespace-nowrap">
              Without Annual Inspection
            </span>

            <h3 className="text-[1.65rem] font-black text-[#1F2535] leading-snug mb-5">
              You find out when it stops working.
            </h3>

            <ul className="space-y-3 flex-1">
              {WITHOUT_ITEMS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 bg-[#f1f3f6] rounded-lg px-4 py-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7a1e1e] flex items-center justify-center mt-0.5">
                    <X size={11} strokeWidth={3} className="text-white" />
                  </div>
                  <p className="text-[#5a6a7e] text-[17px] leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Bottom-left — WITH card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white border border-[#d0d7e2] rounded-lg pt-10 px-8 pb-8 flex flex-col overflow-visible"
            style={{ boxShadow: "0 4px 28px rgba(0,0,0,0.08)" }}
          >
            <span className="absolute top-0 left-8 -translate-y-1/2 bg-[#0f1520] text-[#96C83D] text-[17px] font-bold tracking-[0.18em] uppercase px-6 py-[11px] rounded-full whitespace-nowrap">
              With SumZero Comfort Club
            </span>

            <h3 className="text-[1.65rem] font-black text-[#1F2535] leading-snug mb-5">
              You know what's going on before it's a problem.
            </h3>

            <ul className="space-y-3 flex-1">
              {WITH_ITEMS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 bg-[#f1f3f6] rounded-lg px-4 py-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#96C83D] flex items-center justify-center mt-0.5">
                    <Check size={11} strokeWidth={3} className="text-white" />
                  </div>
                  <p className="text-[#5a6a7e] text-[17px] leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Bottom-right — 16-points image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <Image
              src="/assets/club-membership/16-points.png"
              alt="16-point inspection checklist"
              width={740}
              height={790}
              className="w-full max-w-[680px] h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
