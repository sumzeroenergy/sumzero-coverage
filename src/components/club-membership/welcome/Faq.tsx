"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, X } from "lucide-react"

const FAQS = [
  {
    q: "What is SumZero Club Membership?",
    a: "Club Membership is our annual inspection-based program. For $99 per system per year, you get a professional 16-point system inspection, priority placement in our service queue, and preferred member pricing on any work that comes up. We inspect first and recommend second — nothing is cleaned, tuned, or replaced automatically. If your system is healthy, the inspection is the whole visit.",
  },
  {
    q: "What's the difference between an inspection and maintenance?",
    a: "An inspection is an evaluation — the technician assesses your system, documents findings, and gives you a written report. Nothing is touched. Maintenance is physical work: cleaning coils, washing components, lubricating parts. That's only recommended when the inspection shows it's actually needed. If your system is running well, you pay $99 and nothing else.",
  },
  {
    q: "Does my system get cleaned automatically every year?",
    a: "No — and that's intentional. Cleaning is only recommended when the inspection shows the system needs it. A system operating efficiently in a clean home doesn't need the same service as one in a dusty basement. If maintenance is warranted, your technician will explain what they found and what it costs. You approve or decline. Member pricing applies either way.",
  },
  {
    q: "What does the 16-point inspection actually include?",
    a: "The technician evaluates 16 specific points on each enrolled system: performance, safety controls, electrical connections, airflow, pressure readings, combustion analysis where applicable, and more. Every point is documented. You get a written report with findings and any recommendations before we ask for approval to do anything further.",
  },
  {
    q: "When does my annual inspection happen?",
    a: "Our standard inspection season runs January 1st through May 31st. We reach out to schedule — you don't need to call or remember to book. The technician comes Monday through Friday, 8 AM to 4 PM. You'll never need to chase an appointment.",
  },
  {
    q: "What discounts do I get as a member?",
    a: "Service and repairs: 10% off. Tune-ups: 10% off. Electrical services: 10% off. Plumbing services: 10% off. New equipment installation and significant system modifications: 5% off. Weekend trip charge: 50% off ($99 instead of $199). All discounts apply automatically at time of service — no coupon, no asking.",
  },
  {
    q: "How does the Loyalty Credit work?",
    a: "Every year of active membership, $99 per enrolled system accumulates as a Loyalty Credit toward new equipment installation. A member with two systems enrolled for three years has $594 in credit — applied to the installation invoice when it's time to replace a system. It stacks with the 5% member installation discount. Credit stays active as long as membership is active; a lapse of more than 90 days forfeits the balance.",
  },
  {
    q: "What does priority service actually mean?",
    a: "When you call, you go to the front of the scheduling queue ahead of non-members. In most cases that means same-day service, with a 24-hour maximum from the time of your request. During high-demand periods, we prioritize by urgency — safety issues first, then no-heat or no-cooling situations, then everything else. Members are always ahead of non-members within each category.",
  },
  {
    q: "What if I need a repair?",
    a: "Repairs are billed separately at your member rate (10% off). If the technician finds an issue during an inspection, they explain what it is and what it costs before doing anything — you decide. If you call in with a no-heat or no-cool situation, a diagnostic charge applies: $99 for members on weekends (non-members pay $199).",
  },
  {
    q: "Does membership protect my manufacturer warranty?",
    a: "Yes. Most manufacturers require documented annual maintenance to keep the warranty valid. Without it, a parts claim can be denied even on equipment still under warranty. The Club Membership inspection satisfies that requirement and produces a written record of annual system evaluation.",
  },
  {
    q: "Which systems are covered?",
    a: "Gas furnace, gas boiler, central AC and heat pump, ductless mini-split, Energy Recovery Ventilator (ERV), humidifier (steam and by-pass), tankless or heat pump water heater, and oil heating system (oil boiler or oil furnace). Each system enrolls separately at $99/year.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. Cancel any time with written notice — benefits end at cancellation. No partial refunds after billing processes. There's no contract and no penalty for leaving. If membership lapses more than 90 days, your Loyalty Credit balance is forfeited; re-enrollment starts fresh at zero.",
  },
  {
    q: "Is membership transferable if I sell my home?",
    a: "Yes. Membership can be transferred to the new homeowner within SumZero's service area during the active coverage period.",
  },
  {
    q: "How does the $300 referral reward work?",
    a: "Refer a friend, neighbor, or family member. If they complete a project of $10,000 or more with SumZero, you receive a $300 reward. No limit on referrals.",
  },
]

export default function WelcomeFaq() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section className="bg-[#f1f3f6] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Questions
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-[#1F2535] leading-[1.05]">
            Things members ask
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-[#e8eaed] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left cursor-pointer"
                >
                  <span className="text-[19px] font-bold text-[#1F2535] leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "bg-[#96C83D]" : "bg-[#e8eaed]"
                    }`}
                  >
                    {isOpen
                      ? <X size={14} className="text-[#0f1520]" strokeWidth={2.5} />
                      : <Plus size={14} className="text-[#5a6a7e]" strokeWidth={2.5} />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="border-t border-[#e8eaed] px-8 py-6">
                        <p className="text-[#5a6a7e] text-[18px] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
