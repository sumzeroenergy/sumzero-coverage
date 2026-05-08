"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Shield } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

const SYSTEMS = [
  "Heat pumps & central air conditioning",
  "Ductless mini-splits",
  "Gas furnaces",
  "Oil heating systems",
  "Tankless & heat pump water heaters",
  "ERVs & whole-home humidifiers",
]

export default function SystemsCovered() {
  return (
    <>
      {/* Geometric divider — dark (#0f1520) to light (#f1f3f6) */}
      <div className="w-full bg-[#0f1520] leading-[0]">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-18 block"
          fill="#f1f3f6"
        >
          <polygon points="0,72 1440,0 1440,72" />
        </svg>
      </div>

      <section id="systems" className="bg-[#f1f3f6] py-24">
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
              <Shield size={17} />
              What systems are covered
            </motion.p>

            <h2 className="text-5xl sm:text-6xl font-black text-[#1F2535] mb-4">
              <StaggeredText
                as="div"
                text="Every major system"
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
                text="in your home."
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
              One $99 membership covers one system for the year. Most homes have more than one —
              each system gets its own inspection, its own written report, its own documented
              condition history.
            </motion.p>
          </div>

          {/* Content: image left, checklist right */}
          <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-12 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/club-membership/major-systems.png"
                alt="Major HVAC systems covered by the Comfort Club"
                width={1200}
                height={1020}
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {SYSTEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-5"
                >
                  <Image
                    src="/assets/club-membership/check.png"
                    alt=""
                    width={48}
                    height={48}
                    className="flex-shrink-0 w-12 h-12 object-contain"
                  />
                  <p className="text-[#1F2535] text-2xl font-bold leading-snug">{item}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
