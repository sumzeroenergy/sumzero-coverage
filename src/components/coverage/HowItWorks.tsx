"use client"

import { motion } from "motion/react"
import { useState } from "react"

const CARDS = [
  {
    n:     "01",
    title: "Workmanship Guarantee",
    body:  "If something is wrong with how we installed it, we fix it. No charge, no argument. This applies to every system we put in.",
  },
  {
    n:     "02",
    title: "Club Membership",
    body:  "$99/year per system. One 16-point inspection per system you own, priority scheduling, and member pricing on every call. The people who skip this are the ones who call us in January when the heat goes out.",
  },
  {
    n:     "03",
    title: "Extended Labor Coverage (PROTECT+)",
    body:  "Manufacturer warranty covers parts. Labor costs are yours — unless you have PROTECT+. Available on qualifying systems installed within the last 4 years.",
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
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.10)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Green top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#96C83D] via-[#96C83D] to-[#7aaa28]" />

      <div className="p-8 flex flex-col gap-4 flex-1">
        {/* Number */}
        <motion.span
          animate={{ color: hovered ? "#96C83D" : "#d0d7e2" }}
          transition={{ duration: 0.25 }}
          className="text-[56px] font-black leading-none tracking-tight select-none"
        >
          {n}
        </motion.span>

        {/* Title */}
        <p className="text-[18px] font-bold text-[#1F2535] leading-snug">{title}</p>

        {/* Body */}
        <p className="text-[15px] text-[#5a6a7e] leading-relaxed">{body}</p>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section className="bg-[#eef0f4] py-20">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-black text-[#1F2535] text-center mb-12 leading-tight"
        >
          How coverage works after we leave.
        </motion.h2>

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
