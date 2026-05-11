"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "My system has been running fine for 3 years. Why would I need this now?",
    a: "Heat pump compressors and inverter boards are the expensive failures — and they tend to show up between years 5 and 10, not year 1. That's exactly when the manufacturer's labor warranty has already expired and you're fully exposed. The system running fine today is not a reason to skip coverage. It's the reason you can still buy it.",
  },
  {
    q: "What exactly is covered versus what the manufacturer covers?",
    a: "The manufacturer covers the defective part itself — they send you a new compressor, board, or coil. This warranty covers the labor to diagnose the failure, remove the old part, install the new one, and put the system back in service. Labor runs $200–$600 per visit. Refrigerant adds another $150–$400. That's what this is protecting against.",
  },
  {
    q: "Can I add a warranty if I have a known issue with my system right now?",
    a: "No. The warranty effective date is the purchase date — it does not cover any condition that exists or is known at time of purchase. If there's an open issue, we need to resolve it first. Call us, we'll assess the situation.",
  },
  {
    q: "Do I have to use Comfort Club? What if I get maintenance from someone else?",
    a: "Comfort Club is not required — but the annual inspection is. If you use a third-party HVAC company for maintenance, you need our prior written approval before doing so. That's a warranty requirement, not a preference. Comfort Club is the simplest path because it automatically satisfies the requirement and creates a documented record.",
  },
  {
    q: "What happens if I sell my house?",
    a: "The warranty transfers with the home. It's an asset you're leaving for the next buyer — a documented, active labor warranty on a professionally installed system. That's a real selling point, and we can provide documentation to include in the closing package.",
  },
  {
    q: "I have two systems — a heat pump and a furnace. Do I need two warranties?",
    a: "Each warranty covers one outdoor unit and its associated indoor components. If you have two separate systems (e.g., a heat pump and a furnace), each requires its own warranty.",
  },
  {
    q: "Who actually administers this warranty?",
    a: "SumZero is the obligor — we're responsible for performing the repairs. Magellan Service Corporation handles the paperwork and claims administration. Massachusetts law requires that warranty programs of this type be administered through a licensed entity with sufficient reserves. That's the structure we operate inside.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-[#0f1520] pt-18 pb-12 overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgb(150,200,61) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Green glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#96C83D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-2">
            Common Questions
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight">
            FAQ
          </h2>
          <div className="mt-2 w-10 h-[3px] bg-[#96C83D] rounded-full" />
        </motion.div>

        {/* Accordion */}
        <div>
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`relative border-b border-white/10 last:border-b-0 px-5 -mx-5 transition-colors duration-300 ${isOpen ? "bg-white/[0.05]" : ""}`}
              >
                {/* Left accent bar when open */}
                {isOpen && (
                  <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-[#96C83D] rounded-full" />
                )}

                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group cursor-pointer"
                >
                  <span className={`text-[17px] font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#96C83D]/15 border border-[#96C83D]/30 flex items-center justify-center transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                  >
                    <ChevronDown size={15} className="text-[#96C83D]" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && faq.a && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="text-white/60 text-[17px] leading-relaxed pb-8 mb-2">
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
