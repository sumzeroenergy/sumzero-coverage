"use client"

import { motion } from "motion/react"

const PARAGRAPHS = [
  {
    text: "Thank you for trusting us with your home.",
    bold: false,
  },
  {
    text: "We started SumZero because we wanted to do this work the right way — show up on time, do it right the first time, and actually take care of the people who let us in their homes. Club Membership is how we formalize that.",
    bold: false,
  },
  {
    text: "As a member, you're not just a customer on a list. Your home is on file. Every technician who walks through your door knows your system's history before they touch it. When you call, you're priority.",
    suffix: " That's what this means.",
    bold: false,
  },
  {
    text: "One more thing worth knowing: every year you're a member, $99 per system builds up as a Loyalty Credit toward your next installation. The longer you stay, the more it's worth when you need it.",
    bold: false,
  },
  {
    text: "Your first inspection will be scheduled soon — we'll reach out to find a time that works for you. In the meantime, save our number.",
    bold: false,
  },
]

export default function FromTheOwner() {
  return (
    <section className="bg-[#f1f3f6] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl px-12 py-14 max-w-[780px] mx-auto border border-[#e8eaed]"
        >
          <div className="flex flex-col gap-6 mb-10">
            <p className="text-[19px] leading-relaxed text-[#3a4557]">
              Thank you for trusting us with your home.
            </p>

            <p className="text-[19px] leading-relaxed text-[#3a4557]">
              We started SumZero because we wanted to do this work the right way — show up on time, do it right the first time, and actually take care of the people who let us in their homes. Club Membership is how we formalize that.
            </p>

            <p className="text-[19px] leading-relaxed text-[#3a4557]">
              As a member, you're not just a customer on a list. Your home is on file. Every technician who walks through your door knows your system's history before they touch it. When you call, you're priority.{" "}
              <span className="font-bold text-[#1F2535]">That's what this means.</span>
            </p>

            <p className="text-[19px] leading-relaxed text-[#3a4557]">
              One more thing worth knowing: every year you're a member, $99 per system builds up as a Loyalty Credit toward your next installation. The longer you stay, the more it's worth when you need it.
            </p>

            <p className="text-[19px] leading-relaxed text-[#3a4557]">
              Your first inspection will be scheduled soon — we'll reach out to find a time that works for you. In the meantime, save our number.
            </p>
          </div>

          <div className="border-t border-[#e8eaed] pt-8">
            <p className="text-[22px] font-black text-[#1F2535] mb-1">Ilija Crnobrnja</p>
            <p className="text-[13px] font-bold tracking-[0.18em] uppercase text-[#5a6a7e]">Owner, SumZero Home Services</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
