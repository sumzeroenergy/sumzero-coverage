"use client"

import { motion } from "motion/react"

const GROUPS = [
  {
    title: "Heat Pumps & Cooling",
    items: [
      { name: "Ductless Mini-Split Heat Pump",    years: "10 yr", primary: true },
      { name: "Central Heat Pump System",          years: "10 yr", primary: true },
      { name: "Ducted Heat Pump",                  years: "10 yr", primary: true },
      { name: "Cold Climate Heat Pump (CCAP)",     years: "10 yr", primary: true },
      { name: "Central Air Conditioning",          years: "10 yr", primary: true },
      { name: "Air Handler / Fan Coil",            years: "10 yr", primary: true },
    ],
  },
  {
    title: "Heating",
    items: [
      { name: "Gas Furnace",        years: "10 yr", primary: true },
      { name: "Gas Boiler",         years: "10 yr", primary: true },
      { name: "Oil Heating System", years: "10 yr", primary: true },
    ],
  },
  {
    title: "Water Heating",
    items: [
      { name: "Heat Pump Water Heater",            years: "10 yr", primary: true  },
      { name: "Tankless Water Heater",             years: "10 yr", primary: true  },
      { name: "Tank Water Heater (Electric or Gas)", years: "5 yr", primary: false },
    ],
  },
  {
    title: "Indoor Air Quality",
    items: [
      { name: "ERV / HRV Unit",           years: "5 yr", primary: false },
      { name: "Whole-Home Humidifier",    years: "5 yr", primary: false },
      { name: "Whole-Home Dehumidifier",  years: "5 yr", primary: false },
    ],
  },
]

function TableCard({ title, items }: typeof GROUPS[0]) {
  return (
    <div className="bg-white border border-[#e5e8ed] rounded-2xl overflow-hidden">
      <div className="px-6 py-5 border-b border-[#e5e8ed]">
        <p className="text-[11px] font-black tracking-[0.2em] uppercase text-[#1F2535]">{title}</p>
      </div>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={item.name}
            className={`flex items-center justify-between px-6 py-3.5 transition-colors duration-150 hover:bg-[#f5f7fa] cursor-default ${
              i < items.length - 1 ? "border-b border-[#e5e8ed]" : ""
            }`}
          >
            <span className="text-[15px] text-[#3a4557]">{item.name}</span>
            <span
              className={`flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full ml-4 ${
                item.primary
                  ? "bg-[#96C83D]/15 text-[#4a6a1a]"
                  : "bg-[#d0d7e2]/60 text-[#5a6a7e]"
              }`}
            >
              {item.years}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function EligibleEquipment() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[17px] font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-4">
            Eligible Equipment
          </p>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1F2535] mb-4">
            Every system we install. Clearly defined.
          </h2>
          <p className="text-[18px] leading-relaxed text-[#5a6a7e] max-w-[600px]">
            PROTECT+ covers the systems below. Almost everything carries 10-year coverage — the only
            exceptions are tank water heaters (electric or gas) and indoor air quality equipment,
            which carry 5-year coverage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {GROUPS.map((group) => (
            <TableCard key={group.title} {...group} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
