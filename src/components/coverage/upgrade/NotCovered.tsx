"use client"

import { motion } from "motion/react"
import { XCircle } from "lucide-react"

const SYSTEMS_NOT_COVERED = [
  "Water filtration and softening systems",
  "Electrical panels, wiring, and service upgrades",
  "Plumbing — pipes, fixtures, water service",
  "Sump pumps and drainage systems",
  "Solar panels and battery storage",
  "Gas fireplaces and wood stoves",
  "Ductwork and air distribution",
]

const CLAIMS_DONT_INCLUDE = [
  "Routine maintenance — filters, cleaning, tune-ups",
  "Parts — covered separately by the manufacturer",
  "Repairs by any company other than SumZero",
  "Pre-existing conditions at time of warranty purchase — if the issue is known today, this warranty does not cover it",
  "Cosmetic issues: line hide, spray foam, insulation tape after year one",
  "Acts of God: floods, lightning, power surges, freezing",
  "Access and restoration costs — opening walls or floors",
]

function ExclusionList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#e8eaed]">
      {/* List header */}
      <div className="px-6 py-5 border-b border-[#e8eaed]">
        <span className="text-[#1F2535] text-[15px] font-bold tracking-[0.15em] uppercase">
          {label}
        </span>
      </div>

      {/* Items */}
      {items.map((item, i) => (
        <div
          key={i}
          className="group flex items-start gap-4 px-6 py-4 cursor-default transition-colors duration-150 hover:bg-red-50 border-b border-[#e8eaed] last:border-b-0"
        >
          <XCircle
            size={18}
            className="flex-shrink-0 mt-0.5 text-[#c8cdd5] group-hover:text-red-400 transition-colors duration-150"
          />
          <span className="text-[#1F2535] text-[15px] leading-relaxed group-hover:text-red-600 transition-colors duration-150">
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function NotCovered() {
  return (
    <section className="bg-[#f1f3f6] py-24">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-[#96C83D] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Full Transparency
          </p>
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-4">
            <span className="text-[#1F2535]">What This </span>
            <span className="text-[#96C83D]">Does Not Cover</span>
          </h2>
          <div className="mb-5 w-10 h-[3px] bg-[#96C83D] rounded-full" />
          <p className="text-[17px] leading-relaxed text-[#5a6a7e] max-w-[600px]">
            This is a labor warranty, not a home warranty. It covers the labor to diagnose and
            repair the systems listed above. The following are excluded.
          </p>
        </motion.div>

        {/* Two columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ExclusionList label="Systems Not Covered"     items={SYSTEMS_NOT_COVERED} />
          <ExclusionList label="What Claims Don't Include" items={CLAIMS_DONT_INCLUDE} />
        </motion.div>

      </div>
    </section>
  )
}
