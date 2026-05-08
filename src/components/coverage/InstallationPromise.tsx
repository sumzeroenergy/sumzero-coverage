"use client"

import { motion } from "motion/react"

export default function InstallationPromise() {
  return (
    <div className="bg-white border-b border-[#e5e8ed]">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="w-full h-px bg-[#e5e8ed]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[680px] mx-auto py-28"
        >
          <p className="text-[22px] font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-6">
            The Promise
          </p>
          <h2 className="text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight mb-8">
            <span className="block text-[#1F2535]">Your installation is covered.</span>
            <span className="block text-[#5a6a7e]">Here's the structure.</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-[#5a6a7e]">
            Every SumZero installation includes a workmanship guarantee from day one.{" "}
            <strong className="text-[#1F2535]">Club Membership</strong> adds a 16-point annual inspection
            on every system you own at $99 per system per year.{" "}
            <strong className="text-[#1F2535]">PROTECT+</strong> extends your labor coverage beyond the
            manufacturer's warranty for up to 10 years. All three tie back to the same installation.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
