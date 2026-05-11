"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

const ITEMS = [
  {
    n: "1",
    title: "16-Point System Inspection",
    body: "Once a year, a SumZero technician evaluates your system across 16 documented points — performance, safety controls, electrical connections, airflow, pressure, and more. You get a written report with findings. If something is developing, we catch it before it becomes a breakdown. Nothing is done without your approval.",
  },
  {
    n: "2",
    title: "Priority Scheduling",
    body: "When you call for service, you go to the front of the line. Not a special call center — the same team, same quality, but your job gets scheduled first. In winter and summer when we're at capacity, this matters more than most people expect.",
  },
  {
    n: "3",
    title: "Member Pricing on Every Call",
    body: "Any work we do — repairs, tune-ups, electrical, plumbing — you pay the member rate. That's 10% off service and repairs, 10% off electrical and plumbing, 5% off new equipment installation, and half-price on the weekend trip charge ($99 instead of $199). It applies automatically — no coupon, no asking.",
  },
  {
    n: "4",
    title: "Your Equipment History on File",
    body: "Every visit, every repair, every note from your technician lives in our system under your home's address. When you call, we already know your system. You don't have to explain anything twice.",
  },
  {
    n: "5",
    title: "Loyalty Credit — Builds Every Year",
    body: "Every year you're a member, $99 per enrolled system accumulates as a Loyalty Credit. When it's time to replace a system, that credit comes off the installation invoice — and it stacks with your 5% member installation discount. The longer you're a member, the more it's worth.",
  },
  {
    n: "6",
    title: "$300 Referral Reward",
    body: "Refer a neighbor, friend, or family member who completes a project of $10,000 or more with SumZero, and we send you a $300 reward. No limit on referrals.",
  },
]

function Card({ item, index }: { item: typeof ITEMS[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-[#e8eaed] rounded-2xl px-8 py-8 flex items-start gap-6 cursor-default"
    >
      <motion.div
        animate={{
          backgroundColor: inView ? "#96C83D" : "#d0d7e2",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
      >
        <motion.span
          animate={{ color: inView ? "#0f1520" : "#ffffff" }}
          transition={{ duration: 0.3 }}
          className="text-[16px] font-black"
        >
          {item.n}
        </motion.span>
      </motion.div>
      <div>
        <p className="text-[#1F2535] font-bold text-[20px] mb-2">{item.title}</p>
        <p className="text-[#5a6a7e] text-[17px] leading-relaxed">{item.body}</p>
      </div>
    </motion.div>
  )
}

export default function WhatYouGet() {
  return (
    <section className="bg-[#f1f3f6] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Your Membership
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-[#1F2535] leading-[1.05]">
            What you get every year
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {ITEMS.map((item, i) => (
            <Card key={item.n} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
