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
          className="text-center max-w-[680px] mx-auto py-20"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-4">
            The Promise
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight tracking-tight text-[#1F2535] mb-6">
            Your installation is covered.{" "}
            <span className="text-[#5a6a7e] font-black">Here's the structure.</span>
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
