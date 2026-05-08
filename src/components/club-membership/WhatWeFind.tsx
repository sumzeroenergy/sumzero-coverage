"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Wrench } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

const FEATURES = [
  {
    label: "Outdoor Condenser Coil",
    title: "A clogged coil makes your compressor work overtime.",
    body: "Dirt restricts airflow across the coil. The compressor runs hotter and harder to compensate. The inspection flags it. A tune-up cleans it. Your system stops working overtime and your energy bill stops climbing.",
    image: "/assets/club-membership/before-after-clean-coil.png",
  },
  {
    label: "Mini-Split Air Filter",
    title: "A blocked filter strains the blower and cuts airflow.",
    body: "A clogged filter forces the blower motor to strain against restricted airflow. Left unchecked it accelerates wear on the indoor unit. A technician vacuums it clean in minutes. That's what the annual inspection catches.",
    image: "/assets/club-membership/before-after-clogged-filter.png",
  },
  {
    label: "Heat Pump Coil Cleaning",
    title: "A dirty coil costs you on both heating and cooling.",
    body: "Heat pumps transfer heat through the refrigerant coil. When that coil is coated in dirt and debris, it can't exchange heat efficiently — the system runs longer cycles, uses more energy, and wears out faster. A coil cleaning restores transfer efficiency and protects the compressor.",
    image: "/assets/club-membership/before-after-heat-pump-coil.png",
  },
  {
    label: "Wall Mounted Mini-Split Hygiene",
    title: "Mold and bacteria build up inside every indoor unit.",
    body: "The evaporator housing on a wall-mounted mini-split stays cool and damp — the exact conditions mold and bacteria need to grow. You breathe what comes out. A proper hygiene treatment cleans the coil, housing, and drain pan. Your air quality improves immediately.",
    image: "/assets/club-membership/before-after-higien.png",
  },
  {
    label: "Wall Mounted Coil Cleaning",
    title: "A coated indoor coil quietly reduces every room's comfort.",
    body: "Dust and debris coat the evaporator coil on the indoor unit over time. Airflow drops. The system compensates by running longer. A thorough coil cleaning restores airflow, reduces strain on the blower, and brings efficiency back to where it should be.",
    image: "/assets/club-membership/before-after-mini-split-clean-coil.png",
  },
  {
    label: "Wall Mounted Ventilation System Cleaning",
    title: "Blocked vents push contaminated air through your home.",
    body: "Ventilation systems collect dust, pollen, and debris that circulate back through every room. A full cleaning removes the buildup from grilles, ducts, and housings. The result is cleaner air, better airflow, and a system that doesn't have to fight itself to do its job.",
    image: "/assets/club-membership/before-after-mini-split-higien.png",
  },
]

export default function WhatWeFind() {
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

      <section id="what-we-find" className="bg-white py-24">
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
              <Wrench size={17} />
              What $99 Actually Delivers
            </motion.p>

            <h2 className="text-5xl sm:text-6xl font-black text-[#1F2535] mb-4">
              <StaggeredText
                as="div"
                text="This is what we find."
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
                text="This is what we fix."
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
              A system that hasn't been serviced in two years doesn't look broken — it
              just looks normal. The dirt on the coil, the filter clogged solid, the drain
              line collecting debris. You don't see it. Your system does. The inspection
              is how we see it before you feel it.
            </motion.p>
          </div>

          {/* Alternating feature rows */}
          <div className="flex flex-col gap-24">
            {FEATURES.map((feature, i) => {
              const flipped = i % 2 === 1
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid grid-cols-1 gap-12 items-center ${flipped ? "md:grid-cols-[38%_62%]" : "md:grid-cols-[62%_38%]"}`}
                >
                  {/* Image — transparent PNG, no box */}
                  <div className={flipped ? "md:order-2" : ""}>
                    <Image
                      src={feature.image}
                      alt={feature.label}
                      width={720}
                      height={540}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className={`flex flex-col gap-4 ${flipped ? "md:order-1" : ""}`}>
                    <motion.p
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="text-xs font-bold tracking-[0.2em] uppercase text-[#5a6a7e]"
                    >
                      {feature.label}
                    </motion.p>

                    <motion.h3
                      initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="text-3xl font-black text-[#1F2535] leading-snug"
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, filter: "blur(4px)", y: 6 }}
                      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[17px] leading-relaxed text-[#5a6a7e]"
                    >
                      {feature.body}
                    </motion.p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}
