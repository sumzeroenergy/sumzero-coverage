"use client"

import Image from "next/image"
import { motion } from "motion/react"

export default function ClubCta() {
  return (
    <section className="bg-[#f1f3f6] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 border border-[#96C83D]/40 text-[#96C83D] text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#96C83D]" />
              Annual Maintenance Requirement
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-4">
            <span className="text-[#1F2535]">One Rule To </span>
            <span className="text-[#96C83D]">Keep It Valid</span>
          </h2>
          <div className="mb-5 w-10 h-[3px] bg-[#96C83D] rounded-full" />
          <p className="text-[17px] leading-relaxed text-[#5a6a7e] max-w-[540px]">
            Your warranty requires a professional inspection at least once a year.
            Miss the inspection and coverage on that system is at risk.{" "}
            <span className="font-bold text-[#1F2535]">Comfort Club is the easiest way to stay covered.</span>
          </p>
        </motion.div>

        {/* Two-panel card — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden"
        >
          {/* Left — dark with image */}
          <div className="bg-[#0f1520] flex items-center justify-center p-6 min-h-[420px]">
            <Image
              src="/assets/club-membership/major-systems.png"
              alt="SumZero Club Member — major systems covered"
              width={600}
              height={600}
              className="w-full max-w-[560px] h-auto object-contain"
            />
          </div>

          {/* Right — green content */}
          <div className="bg-[#96C83D] p-14 flex flex-col justify-between">
            <p className="text-[#0f1520] text-[21px] font-semibold leading-relaxed mb-12">
              Annual inspection that fulfills your warranty's maintenance requirement and creates a
              documented service record before any claim is filed. Priority service queue and
              preferred pricing on repairs included.
            </p>

            <div>
              <div className="flex items-start gap-2 mb-2">
                <span className="text-[#0f1520] text-3xl font-black mt-3">$</span>
                <span className="text-[#0f1520] text-[120px] font-black leading-none">99</span>
              </div>
              <p className="text-[#0f1520]/50 text-[13px] font-bold tracking-[0.2em] uppercase mb-10">
                Per System / Per Year
              </p>

              <a
                href="/club-membership"
                className="block w-full bg-[#0f1520] hover:bg-[#1a2535] text-white font-bold text-center py-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-[17px]"
              >
                Learn More About Club Membership
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
