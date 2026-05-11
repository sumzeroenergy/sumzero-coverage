"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Check } from "lucide-react"

const STEPS = [
  {
    n: "✓",
    title: "You joined Club — done.",
    body: "Your membership is active. Your home is flagged in our system, priority service starts today, and your Loyalty Credit clock starts now.",
    alwaysActive: true,
  },
  {
    n: "2",
    title: "We'll reach out to schedule your first inspection",
    body: "You'll hear from us within the next few weeks to find a time for your annual 16-point inspection. You don't need to call — we'll initiate it.",
    alwaysActive: false,
  },
  {
    n: "3",
    title: "Save our number",
    body: "508.965.0046. If anything comes up with your system before then, call us. Your member status is already active — priority scheduling starts now.",
    alwaysActive: false,
  },
  {
    n: "4",
    title: "Annual inspection — same time every year",
    body: "After your first inspection, we'll schedule the next one before we leave. You'll never need to remember to book it — we track it for you.",
    alwaysActive: false,
  },
]

function Step({ step, isLast }: { step: typeof STEPS[0]; isLast: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: "-25% 0px -25% 0px" })
  const active = step.alwaysActive || inView

  return (
    <div ref={ref} className={`flex gap-6 ${!isLast ? "pb-10 border-b border-[#e8eaed]" : ""}`}>
      {/* Circle */}
      <motion.div
        animate={{ backgroundColor: active ? "#96C83D" : "#e8eaed" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center mt-0.5"
      >
        {step.alwaysActive
          ? <Check size={18} className="text-[#0f1520]" strokeWidth={2.5} />
          : (
            <motion.span
              animate={{ color: active ? "#0f1520" : "#9aa5b4" }}
              transition={{ duration: 0.3 }}
              className="text-[16px] font-black"
            >
              {step.n}
            </motion.span>
          )
        }
      </motion.div>

      {/* Content */}
      <div className="pt-1">
        <p className="text-[#1F2535] font-bold text-[22px] mb-2 leading-snug">{step.title}</p>
        <p className="text-[#5a6a7e] text-[19px] leading-relaxed">{step.body}</p>
      </div>
    </div>
  )
}

export default function FirstDays() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            What Happens Next
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-[#1F2535] leading-[1.05]">
            Your first 30 days
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-10"
        >
          {STEPS.map((step, i) => (
            <Step key={step.n} step={step} isLast={i === STEPS.length - 1} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
