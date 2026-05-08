"use client"

import { motion } from "motion/react"

const STEPS = [
  {
    n:     "1",
    title: "Call 508.965.0046",
    body:  "Tell us something isn't working. We pull your install record and confirm what's covered before we dispatch.",
  },
  {
    n:     "2",
    title: "We come out",
    body:  "A SumZero technician diagnoses the issue. If it's a covered component, we handle the repair.",
  },
  {
    n:     "3",
    title: "Labor is covered",
    body:  "You pay nothing for the service labor on covered repairs. The coverage period is shown on your plan documentation.",
  },
  {
    n:     "4",
    title: "Coverage transfers",
    body:  "If you sell the home, PROTECT+ transfers to the new owner. Let us know and we update the record.",
  },
]

export default function OneCall() {
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
            If You Ever Need It
          </p>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1F2535] mb-4">
            One call. That's it.
          </h2>
          <p className="text-[18px] leading-relaxed text-[#5a6a7e] max-w-[480px]">
            No third-party claims. No paperwork. You call the same number you always call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              whileHover={{ y: -3 }}
              className="group bg-white border border-[#e5e8ed] rounded-2xl px-6 py-6 flex gap-5 items-start transition-shadow duration-300 hover:shadow-md cursor-default"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1F2535] group-hover:bg-[#96C83D] flex items-center justify-center transition-colors duration-300">
                <span className="text-[14px] font-black text-white">{step.n}</span>
              </div>
              <div>
                <p className="text-[17px] font-bold text-[#1F2535] mb-2">{step.title}</p>
                <p className="text-[15px] leading-relaxed text-[#5a6a7e]">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
