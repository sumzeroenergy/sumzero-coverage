"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

const STEPS = [
  {
    n: "1",
    title: "Call us — we pull your record",
    body: "One call to (508) 965-0046. We look up your job in ServiceTitan, confirm the system you want covered, and confirm it's in good working condition. We do not issue a warranty on a system with a known, open problem.",
  },
  {
    n: "2",
    title: "Sign your warranty agreement",
    body: "We prepare a warranty agreement with your system details — equipment type, model, serial number, install date, and coverage term. You receive it via email to sign digitally. Takes about two minutes.",
  },
  {
    n: "3",
    title: "Pay. You're covered.",
    body: "Payment is collected at signing. Effective date is the date of purchase — coverage does not backdate to the install date. Your warranty certificate follows within 30 days.",
  },
  {
    n: "4",
    title: "When something breaks, call us first",
    body: "Any repair must be performed by SumZero. Third-party repairs without our prior written approval are not covered. We dispatch the same way we always do — and the labor bill goes to the warranty, not to you.",
  },
]

function Step({ step, index, isLast }: { step: typeof STEPS[0]; index: number; isLast: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-6"
    >
      {/* Left — number + line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, backgroundColor: "rgba(150,200,61,0)" }}
          animate={inView ? { scale: 1, backgroundColor: "#96C83D" } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-[#96C83D]"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.25 }}
            className="text-[16px] font-black text-[#0f1520]"
          >
            {step.n}
          </motion.span>
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-px flex-1 mt-2 bg-[#96C83D]/25 min-h-[80px]"
          />
        )}
      </div>

      {/* Right — content */}
      <div className="pb-14">
        <p className="text-white font-bold text-[22px] mb-3 mt-1.5">{step.title}</p>
        <p className="text-white/50 text-[17px] leading-relaxed max-w-[680px]">{step.body}</p>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section className="bg-[#0f1520] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Process
          </p>
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-4">
            <span className="text-white">How It </span>
            <span className="text-[#96C83D]">Works</span>
          </h2>
          <div className="w-10 h-[3px] bg-[#96C83D] rounded-full" />
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <Step key={step.n} step={step} index={i} isLast={i === STEPS.length - 1} />
          ))}
        </div>

      </div>
    </section>
  )
}
