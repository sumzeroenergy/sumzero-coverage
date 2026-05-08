"use client"

import Image from "next/image"
import { motion } from "motion/react"

export default function FromTheOwners() {
  return (
    <section className="bg-[#f5f3ee] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <Image
              src="/assets/protect/owners.jpg"
              alt="Ilija Crnobrnja and David — SumZero Energy Systems"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[17px] font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-5">
              From the Owners
            </p>

            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1F2535] mb-8">
              This job has our name on it.
            </h2>

            <div className="flex flex-col gap-5 mb-10">
              {[
                "When we started SumZero, we had one rule: do the work the way you'd want it done in your own house.",
                "That means showing up on time, doing the job right, and standing behind it — not because you'll take us to court, but because that's who we are.",
                "PROTECT+ is us putting that in writing. If a covered component fails after the manufacturer's window closes, you call us. We come out. We fix it. You don't pay for the labor. No claims process, no third-party runaround.",
                "Welcome to the family. It means something to us.",
              ].map((p) => (
                <p key={p} className="text-[17px] leading-relaxed text-[#3a4557] italic">{p}</p>
              ))}
            </div>

            {/* Signatures */}
            <div className="flex items-start gap-0 border-t border-[#d0d7e2] pt-7">
              <div className="pr-6">
                <p className="text-[20px] font-black text-[#1F2535] mb-1">Ilija Crnobrnja</p>
                <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#5a6a7e]">Founder & CEO</p>
              </div>
              <div className="w-px self-stretch bg-[#d0d7e2] mx-6" />
              <div className="pl-2">
                <p className="text-[20px] font-black text-[#1F2535] mb-1">David</p>
                <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#5a6a7e]">COO</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
