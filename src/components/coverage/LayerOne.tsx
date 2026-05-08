"use client"

import Image from "next/image"
import { motion } from "motion/react"

const ITEMS = [
  "Installation tested and documented before we leave",
  "Manufacturer warranty registered in your name",
  "Workmanship defects corrected at no cost",
  "ServiceTitan record created — your home's history lives with us",
]

export default function LayerOne() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Label */}
            <p className="text-[22px] font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-4">
              Layer 1 — Built Into Every Install
            </p>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1F2535] mb-6">
              If something is wrong with how we installed it, we fix it.
            </h2>

            {/* Body */}
            <p className="text-[17px] leading-relaxed text-[#5a6a7e] mb-10">
              Before we leave, the system is tested and documented, the manufacturer warranty is
              registered in your name, and your home's service record is open in our system.
              If the installation caused the problem, we correct it.
            </p>

            {/* Checklist */}
            <div className="flex flex-col">
              {ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`flex items-center gap-4 py-5 ${i < ITEMS.length - 1 ? "border-b border-[#e5e8ed]" : ""}`}
                >
                  <Image
                    src="/assets/club-membership/check.png"
                    alt=""
                    width={32}
                    height={32}
                    className="flex-shrink-0 w-12 h-12"
                  />
                  <span className="text-[28px] font-medium text-[#1F2535] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — image + label */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-6"
          >
            <Image
              src="/assets/protect/quality-guarantee.png"
              alt="SumZero quality guarantee"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl object-cover"
            />

            {/* Label card */}
            <div className="flex items-start gap-4 bg-[#f1f3f6] rounded-xl px-6 py-5 border-l-4 border-[#96C83D]">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#96C83D] mt-2" />
              <p className="text-[15px] text-[#5a6a7e] leading-relaxed">
                <span className="font-bold text-[#1F2535]">100% of SumZero installs</span> are tested
                and documented before the technician leaves the property.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
