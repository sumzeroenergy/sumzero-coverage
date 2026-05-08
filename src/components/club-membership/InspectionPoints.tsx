"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ClipboardList } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

const TABS = [
  {
    label: "Heat Pump / AC",
    points: [
      "Visual inspection of indoor and outdoor unit condition",
      "Thermostat operation and staging verification",
      "Air filter inspection (vacuum existing or replace customer-supplied)",
      "Condensate drain line inspection for leaks or blockage indicators",
      "Evaporator coil visual inspection (accessible areas only)",
      "Blower wheel and housing visual inspection",
      "Blower motor condition evaluation",
      "Line set insulation condition inspection",
      "Outdoor condenser coil visual condition assessment",
      "Condenser fan motor inspection",
      "Refrigerant system performance diagnostics (superheat/subcool data)",
      "Voltage and amperage measurement of major components",
      "Capacitor and contactor operational testing",
      "Inspection of safety controls, pressure switches, and sensors",
      "Airflow and system performance evaluation",
      "Written report with findings, photos where applicable, and recommendations",
    ],
  },
  {
    label: "Mini-Split",
    points: [
      "System operation verification across all modes",
      "Thermostat or controller communication check",
      "Air filter inspection (vacuum existing or replace customer-supplied)",
      "Condensate drain line inspection for leaks or blockage indicators",
      "Evaporator coil visual inspection (accessible areas only)",
      "Blower wheel and housing visual inspection",
      "Blower motor condition evaluation",
      "Line set insulation condition inspection",
      "Outdoor condenser coil visual condition assessment",
      "Condenser fan motor inspection",
      "Refrigerant system performance diagnostics (superheat/subcool data)",
      "Voltage and amperage measurement of major components",
      "Capacitor and contactor operational testing",
      "Inspection of safety controls, pressure switches, and sensors",
      "Airflow and system performance evaluation",
      "Written report with findings, photos where applicable, and recommendations",
    ],
  },
  {
    label: "Gas Furnace",
    points: [
      "Visual inspection of overall system condition (cabinet, wiring, blower compartment)",
      "Inspection for visible corrosion, leaks, or physical damage",
      "Verification of venting system integrity and combustion air openings",
      "Flame signal and safety circuit operational check",
      "Inspection of pilot assembly and flame sensor condition",
      "High-limit and safety control response verification",
      "Measurement of motor amperage draw",
      "Inspection of blower motor and wheel condition",
      "Visual inspection of belts (if applicable)",
      "Inspection of gas piping and shut-off valve accessibility",
      "Manifold gas pressure verification (where accessible)",
      "Electrical connection inspection for security and signs of overheating",
      "Airflow and temperature rise evaluation",
      "Thermostat operation and communication check",
      "Inspection of heat exchanger area for visible abnormalities",
      "Written evaluation with documented findings and recommendations",
    ],
  },
  {
    label: "Oil System",
    points: [
      "Visual inspection of entire heating system",
      "Oil burner assembly condition inspection",
      "Combustion chamber visual inspection",
      "Heat exchanger inspection for visible soot or damage",
      "Fuel oil line and filter housing inspection",
      "Fuel pump pressure verification",
      "Ignition system inspection",
      "Flame observation and burner operation check",
      "Draft and venting system inspection",
      "Electrical wiring and control inspection",
      "Safety control and limit switch testing",
      "Leak inspection (oil, exhaust, system components)",
      "Thermostat operation verification",
      "System startup and shutdown sequence observation",
      "Overall combustion and performance evaluation",
      "Written condition report with recommendations",
    ],
  },
  {
    label: "Water Heater",
    points: [
      "Visual inspection for leaks, corrosion, or physical damage",
      "Water piping and connection inspection",
      "Venting system condition and clearance verification",
      "Gas line or electrical supply inspection",
      "Combustion chamber visual inspection (if applicable)",
      "Burner assembly inspection (no cleaning)",
      "Ignition system operational check",
      "Heat exchanger visual inspection",
      "Condensate drain inspection",
      "Sensor and safety control testing",
      "Electrical connection inspection",
      "Temperature setting verification",
      "System startup and operational observation",
      "Hot water delivery consistency test",
      "Performance evaluation under load",
      "Written findings and recommendations",
    ],
  },
  {
    label: "ERV",
    points: [
      "Visual inspection of ERV cabinet and mounting",
      "Control operation verification",
      "Supply and exhaust airflow operation check",
      "Filter inspection (vacuum existing or replace customer-supplied)",
      "Heat exchange core visual inspection",
      "Duct connection inspection at unit",
      "Drain line inspection (if applicable)",
      "Fan and motor operational check",
      "Electrical connection inspection",
      "Temperature sensor verification",
      "Humidity control inspection",
      "Defrost cycle observation (if applicable)",
      "Emergency shut-off function test",
      "Power consumption observation",
      "Overall system performance evaluation",
      "Written assessment with recommendations",
    ],
  },
  {
    label: "Humidifier",
    points: [
      "Visual inspection of humidifier cabinet and mounting",
      "Control and humidistat operation verification",
      "System operational response check",
      "Water supply connection inspection",
      "Drain line inspection",
      "Solenoid valve operational check",
      "Electrical wiring inspection",
      "Fan and motor inspection (if applicable)",
      "Temperature and humidity response evaluation",
      "Safety shut-off verification",
      "Water panel or canister condition inspection (no replacement)",
      "Steam dispersion or bypass duct inspection",
      "Power consumption observation",
      "Leak inspection at all visible connections",
      "System integration with HVAC operation check",
      "Documented findings and recommendations",
    ],
  },
]

export default function InspectionPoints() {
  const [activeTab, setActiveTab] = useState(0)

  const points = TABS[activeTab].points
  const left  = points.filter((_, i) => i % 2 === 0)
  const right = points.filter((_, i) => i % 2 === 1)

  return (
    <>
      {/* Geometric divider — white to grey */}
      <div className="w-full bg-white leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 block"
          fill="#f1f3f6"
        >
          <polygon points="0,0 1440,80 0,80" />
        </svg>
      </div>

      <section id="inspection" className="bg-[#f1f3f6] py-24">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Section header */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 text-base font-bold tracking-wide uppercase text-[#5a6a7e] mb-3"
            >
              <ClipboardList size={17} />
              The 16-point inspection
            </motion.p>

            <h2 className="text-5xl sm:text-6xl font-black text-[#1F2535] mb-4">
              <StaggeredText
                as="span"
                text="What your technician"
                segmentBy="words"
                direction="bottom"
                blur={true}
                delay={70}
                duration={0.6}
                easing={[0.22, 1, 0.36, 1] as never}
                className="text-[#1F2535]"
              />
              <StaggeredText
                as="span"
                text="actually checks."
                segmentBy="words"
                direction="bottom"
                blur={true}
                delay={70}
                duration={0.6}
                easing={[0.22, 1, 0.36, 1] as never}
                className="text-[#1F2535]"
              />
            </h2>

            <motion.p
              initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17px] leading-relaxed text-[#5a6a7e] max-w-[680px]"
            >
              Select your system type. Every inspection ends with a written report, documented
              findings, and a clear explanation of any recommendations.
            </motion.p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 rounded-lg border transition-colors duration-200 cursor-pointer ${
                  activeTab === i
                    ? "bg-[#0f1520] text-white border-[#0f1520]"
                    : "bg-white text-[#5a6a7e] border-[#d0d7e2] hover:bg-[#96C83D] hover:text-white hover:border-[#96C83D]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Points grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {left.map((text, i) => {
                const n = i * 2 + 1
                const rightText = right[i]
                const rn = i * 2 + 2
                return [
                  <motion.div
                    key={`l-${i}`}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="group bg-white border border-[#e8eaed] rounded-lg px-5 py-4 flex items-start gap-4 transition-colors duration-200 hover:bg-[#96C83D] hover:border-[#96C83D] cursor-default"
                  >
                    <span className="text-[#96C83D] group-hover:text-white font-bold text-base w-7 flex-shrink-0 transition-colors duration-200">
                      {String(n).padStart(2, "0")}
                    </span>
                    <p className="text-[#1F2535] group-hover:text-white text-[17px] leading-relaxed transition-colors duration-200">
                      {text}
                    </p>
                  </motion.div>,
                  rightText && (
                    <motion.div
                      key={`r-${i}`}
                      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: i * 0.05 + 0.025, ease: [0.22, 1, 0.36, 1] }}
                      className="group bg-white border border-[#e8eaed] rounded-lg px-5 py-4 flex items-start gap-4 transition-colors duration-200 hover:bg-[#96C83D] hover:border-[#96C83D] cursor-default"
                    >
                      <span className="text-[#96C83D] group-hover:text-white font-bold text-base w-7 flex-shrink-0 transition-colors duration-200">
                        {String(rn).padStart(2, "0")}
                      </span>
                      <p className="text-[#1F2535] group-hover:text-white text-[17px] leading-relaxed transition-colors duration-200">
                        {rightText}
                      </p>
                    </motion.div>
                  ),
                ]
              })}
            </motion.div>
          </AnimatePresence>

          {/* Footer note */}
          <div className="mt-6 bg-white border border-[#e8eaed] rounded-lg px-6 py-5">
            <p className="text-[15px] leading-relaxed text-[#5a6a7e]">
              <span className="font-bold text-[#1F2535]">Seven system types covered. </span>
              Gas furnace, central AC & heat pump, ductless mini-split, ERV, humidifier, tankless
              & heat pump water heater, oil heating systems. Additional inspection visits available
              at $99/system.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
