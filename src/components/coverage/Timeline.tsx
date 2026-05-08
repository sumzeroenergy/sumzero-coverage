"use client"

import { motion } from "motion/react"

const STEPS = [
  {
    n:     "1",
    title: "Install Day",
    body:  "System installed, tested, documented. Manufacturer warranty registered. Your home's record created in ServiceTitan. Workmanship guarantee starts immediately.",
    badge: "Workmanship Guarantee Active",
    active: true,
  },
  {
    n:     "2",
    title: "Within the First Year",
    body:  "Club Membership starts and we schedule your first annual inspection. Priority status is flagged in our system. Every call you make after that, we see your membership before we pick up the phone.",
    badge: "Club Membership Begins",
    active: true,
  },
  {
    n:     "3",
    title: "Within 4 Years of Install",
    body:  "Add PROTECT+ to extend your labor coverage beyond the manufacturer's parts warranty. Enrollment window is based on your install date — don't wait.",
    badge: "PROTECT+ Available",
    active: true,
  },
  {
    n:     "10+",
    title: "Year 10 and Beyond",
    body:  "A Club member with PROTECT+ has had annual inspections, priority service, documented history, and covered labor for over a decade. That's Zero Worry.",
    badge: "Long-Term Coverage Active",
    active: false,
  },
]

export default function Timeline() {
  return (
    <section className="bg-[#f1f3f6] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-4">
            How It All Works
          </p>
          <h2 className="text-5xl sm:text-7xl font-black leading-tight tracking-tight text-[#1F2535] mb-5">
            From install day forward.
          </h2>
          <p className="text-[21px] leading-relaxed text-[#5a6a7e] max-w-[640px]">
            Your coverage doesn't start when something breaks. It starts the day we install your system.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-[680px] flex flex-col">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-6"
            >
              {/* Left — circle + line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-[18px] flex-shrink-0 ${
                    step.active
                      ? "bg-[#96C83D] text-white"
                      : "bg-[#d0d7e2] text-[#5a6a7e]"
                  }`}
                >
                  {step.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-[2px] flex-1 my-2 bg-[#d0d7e2]" />
                )}
              </div>

              {/* Right — content */}
              <div className={`pb-12 ${i === STEPS.length - 1 ? "pb-0" : ""}`}>
                <h3 className="text-[26px] font-black text-[#1F2535] mb-3 leading-snug">{step.title}</h3>
                <p className="text-[18px] leading-relaxed text-[#5a6a7e] mb-5">{step.body}</p>
                <span
                  className={`inline-block text-[13px] font-bold tracking-[0.18em] uppercase px-5 py-2.5 rounded-full ${
                    step.active
                      ? "bg-[#96C83D]/12 text-[#4a6a1a]"
                      : "bg-[#d0d7e2]/60 text-[#5a6a7e]"
                  }`}
                >
                  {step.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
