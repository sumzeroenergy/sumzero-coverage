"use client"

import { motion } from "motion/react"
import { useState } from "react"

const CARDS = [
  {
    n:     "01",
    title: "Manufacturer Warranty",
    body:  "Your equipment is registered in your name. Parts covered by the manufacturer — typically 5 to 12 years depending on the system.",
  },
  {
    n:     "02",
    title: "Workmanship Guarantee",
    body:  "If anything is wrong with how we installed your system, we come back and fix it. Your job is documented and on file.",
  },
  {
    n:     "03",
    title: "PROTECT+ Labor Coverage",
    body:  "When a covered component needs repair after the manufacturer warranty, we cover the labor. You call, we come out, you pay nothing.",
  },
]

function Card({ n, title, body }: { n: string; title: string; body: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl overflow-hidden flex flex-col cursor-default"
      style={{
        boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s",
      }}
    >
      <div className="h-[3px] w-full bg-gradient-to-r from-[#96C83D] via-[#96C83D] to-[#7aaa28]" />
      <div className="p-8 flex flex-col gap-4 flex-1">
        <motion.span
          animate={{ color: hovered ? "#96C83D" : "#d0d7e2" }}
          transition={{ duration: 0.25 }}
          className="text-[56px] font-black leading-none tracking-tight select-none"
        >
          {n}
        </motion.span>
        <p className="text-[19px] font-bold text-[#1F2535] leading-snug">{title}</p>
        <p className="text-[16px] text-[#5a6a7e] leading-relaxed">{body}</p>
      </div>
    </motion.div>
  )
}

export default function ThreeLayers() {
  return (
    <section className="bg-[#eef1f3] py-20">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[17px] font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-4">
            What's Included
          </p>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1F2535] mb-4">
            Three layers of coverage — all active
          </h2>
          <p className="text-[18px] leading-relaxed text-[#5a6a7e] max-w-[560px]">
            From the day we finished your installation, you have three things working in your favor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CARDS.map((card) => (
            <Card key={card.n} {...card} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
