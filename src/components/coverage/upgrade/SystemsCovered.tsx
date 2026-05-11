"use client"

import { motion } from "motion/react"

const GROUPS = [
  {
    label: "Heat Pumps & Cooling",
    items: [
      { name: "Ductless Mini-Split Heat Pump",     years: 10 },
      { name: "Multi-Zone Heat Pump System",        years: 10 },
      { name: "Central Ducted Heat Pump",           years: 10 },
      { name: "Central Air Conditioning (A/C)",     years: 10 },
    ],
  },
  {
    label: "Furnaces & Air Handlers",
    items: [
      { name: "Gas Furnace",  years: 10 },
      { name: "Oil Furnace",  years: 10 },
    ],
  },
  {
    label: "Water Heaters",
    items: [
      { name: "Gas Water Heater — Chimney Vented",  years: 5  },
      { name: "Oil Water Heater — Chimney Vented",  years: 5  },
      { name: "Tankless Water Heater",              years: 10 },
      { name: "Heat Pump Water Heater",             years: 10 },
    ],
  },
  {
    label: "Boilers",
    items: [
      { name: "Oil or Gas Boiler — Floor Mounted, Chimney Vented", years: 10 },
      { name: "Condensing Gas Boiler",                             years: 10 },
    ],
  },
  {
    label: "Indoor Air Quality",
    items: [
      { name: "ERV / HRV Energy Recovery Ventilator", years: 5 },
      { name: "Whole-Home Humidifier",                years: 5 },
      { name: "Whole-Home Dehumidifier",              years: 5 },
    ],
  },
]

function YearBadge({ years }: { years: number }) {
  if (years === 10) {
    return (
      <span className="inline-flex items-center justify-center bg-[#96C83D] text-[#0f1520] text-[11px] font-black tracking-[0.15em] uppercase px-3 py-1.5 rounded-md min-w-[58px]">
        10 YR
      </span>
    )
  }
  return (
    <span className="inline-flex items-center justify-center bg-[#141c2a] border border-[#96C83D]/40 text-[#96C83D] text-[11px] font-black tracking-[0.15em] uppercase px-3 py-1.5 rounded-md min-w-[58px]">
      5 YR
    </span>
  )
}

export default function SystemsCovered() {
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
            Coverage by System Type
          </p>
          <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-4">
            <span className="text-[#1F2535]">Every System. </span>
            <span className="text-[#96C83D]">Clearly Defined.</span>
          </h2>
          <div className="w-10 h-[3px] bg-[#96C83D] rounded-full" />
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl overflow-hidden border border-[#d0d7e2]"
        >
          {/* Table header */}
          <div className="bg-[#1a2233] px-6 py-4 flex items-center justify-between">
            <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">System</span>
            <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">Warranty Term</span>
          </div>

          {/* Groups */}
          {GROUPS.map((group, gi) => (
            <div key={group.label}>
              {/* Group header */}
              <div className="bg-[#0f1520] px-6 py-3">
                <span className="text-[#96C83D] text-[11px] font-bold tracking-[0.2em] uppercase">
                  {group.label}
                </span>
              </div>

              {/* Items */}
              {group.items.map((item, ii) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between px-6 py-4 ${
                    ii < group.items.length - 1 ? "border-b border-[#e8eaed]" : ""
                  } ${gi < GROUPS.length - 1 || ii < group.items.length - 1 ? "bg-white" : "bg-white"}`}
                >
                  <span className="text-[#1F2535] text-[15px]">{item.name}</span>
                  <YearBadge years={item.years} />
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-6 mt-5"
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center bg-[#96C83D] text-[#0f1520] text-[11px] font-black tracking-[0.15em] uppercase px-3 py-1.5 rounded-md">
              10 YR
            </span>
            <span className="text-[#5a6a7e] text-[13px]">High-efficiency / modern systems</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center bg-[#141c2a] border border-[#96C83D]/40 text-[#96C83D] text-[11px] font-black tracking-[0.15em] uppercase px-3 py-1.5 rounded-md">
              5 YR
            </span>
            <span className="text-[#5a6a7e] text-[13px]">Standard / conventional systems</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
