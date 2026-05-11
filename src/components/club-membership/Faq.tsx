"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, X } from "lucide-react"

const FAQS = [
  {
    q: "What exactly am I paying $99 for?",
    a: "$99 covers one professional 16-point inspection of your system, priority placement in our scheduling queue, and member pricing on any work that comes up afterward. The technician evaluates your system, documents every finding, and gives you a written report. Nothing is cleaned, replaced, or charged beyond the $99 unless you approve it first.",
  },
  {
    q: "Does the inspection include a tune-up or cleaning?",
    a: "No — and that's intentional. We inspect first and recommend second. If the system is running well and doesn't need cleaning, the technician documents that and leaves. You pay $99 and nothing more. If cleaning or maintenance is warranted, the technician explains exactly what they found and what it costs before doing anything. You decide.",
  },
  {
    q: "My system is fairly new. Is this still worth it?",
    a: "Yes — especially for new equipment. Most manufacturers require documented annual maintenance to keep the warranty valid. Without a written inspection record, a parts claim can be denied even on a system still under warranty. The $99 inspection creates that documentation. It's the cheapest protection available on a new install.",
  },
  {
    q: "What happens when my system breaks down?",
    a: "You go to the front of the queue ahead of non-members. Our target is same-day service. If it's a weekend call, the diagnostic is $99 — the standard non-member rate is $199. Any repairs that follow come in at 10% off. One weekend service call as a member more than covers the cost of a full year of membership.",
  },
  {
    q: "Is there a contract? What if I want to cancel?",
    a: "No contract, no penalty. Cancel any time with written notice. If you cancel or lapse for more than 90 consecutive days, your Loyalty Credit balance is forfeited. Re-enrollment starts the credit at zero. Membership can also be transferred to a new homeowner if you sell within SumZero's service area.",
  },
  {
    q: "What is the Loyalty Credit?",
    a: "Every year you stay enrolled, $99 per system accumulates as a Loyalty Credit. That credit applies toward new equipment installation — heat pumps, mini-splits, water heaters, and more. It stacks with the 5% member installation discount. Two systems over three years is $594 coming off your next install invoice before the 5% is applied.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-[#f1f3f6] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Common Questions
          </p>
          <h2 className="text-6xl sm:text-7xl font-black text-[#1F2535] leading-[1.05]">
            What people ask before joining
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="border-t border-[#d0d7e2]">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-[#d0d7e2]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left cursor-pointer group"
                >
                  <span className="text-[20px] font-bold text-[#1F2535] leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "bg-[#96C83D]" : "bg-[#1F2535] group-hover:bg-[#2d3748]"
                    }`}
                  >
                    {isOpen
                      ? <X size={15} className="text-white" />
                      : <Plus size={15} className="text-white" />
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
                      <p className="text-[#5a6a7e] text-[19px] leading-relaxed pb-8 max-w-[780px]">
                        {faq.a}
                      </p>
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
