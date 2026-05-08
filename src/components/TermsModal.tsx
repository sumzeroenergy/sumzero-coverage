"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"

export function openTermsModal() {
  window.dispatchEvent(new CustomEvent("sumzero:open-terms"))
}

export default function TermsModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener("sumzero:open-terms", handler)
    return () => window.removeEventListener("sumzero:open-terms", handler)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else      document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#0f1520]/60 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.95, y: 20  }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl w-full max-w-[700px] h-[88vh] flex flex-col overflow-hidden border border-[#96C83D]/60" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(150,200,61,0.15)" }}>

              {/* Header */}
              <div className="relative bg-[#0f1520] flex items-center justify-between px-7 py-5 flex-shrink-0">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#96C83D] mb-0.5">
                    Comfort Club
                  </p>
                  <h2 className="text-lg font-black text-white">Terms & Conditions</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Contract body */}
              <div className="flex-1 overflow-y-auto px-8 py-8 text-[14px] leading-[1.8] text-[#3a4557]">

                <p className="font-bold text-[#1F2535] text-[15px] mb-6">
                  SumZero Home Services Comfort Club Agreement (SCCA) — Terms & Conditions
                </p>

                <div className="flex flex-col gap-6">

                  <div>
                    <p className="font-bold text-[#1F2535] mb-2">1. Payment Terms</p>
                    <p>
                      The membership fee is $99 per system per year. Payment is made exclusively via credit card on file. By entering into this Agreement, the signee authorizes SUMZERO to bill through the credit card on file and confirms ownership or permission to use such card. This Agreement will automatically renew at the current rate unless cancellation is notified in writing 30 days prior to the renewal date. The Agreement may be canceled at any time via written notification; no refunds are provided for cancellations.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1F2535] mb-2">2. Agreement Conditions</p>
                    <p>
                      Signing of this Agreement is subject to systems inspection and approval. SUMZERO reserves the right to inspect the system before issuing or renewing an Agreement. Annual inspections for each piece of equipment will be conducted Monday through Friday, 8:00 AM to 4:00 PM, excluding holidays. This Agreement is transferable upon selling the home within the coverage period. SUMZERO may suspend or discontinue services if the Agreement is breached.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1F2535] mb-2">3. Scheduling</p>
                    <p>
                      The standard inspection season runs from January 1st to May 31st, extendable at SUMZERO's discretion. Inspections are scheduled by the company via call, text, or email, and customers will receive reminders for scheduling their annual inspection. A 24-hour notice is appreciated for appointment cancellations. A $50 "No-Show" fee applies for missed appointments.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1F2535] mb-2">4. Customer's Responsibility</p>
                    <p>
                      The customer agrees to operate all equipment according to manufacturers' and technicians' recommendations, and to promptly notify SUMZERO of any unusual operating conditions. Only SUMZERO's personnel shall be permitted to perform maintenance or repairs on covered systems. The customer shall provide a safe and reasonably clean area for all work to be performed.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1F2535] mb-2">5. Terminations and Suspensions</p>
                    <p>
                      SUMZERO may terminate this Agreement if it is breached. No refunds will be provided upon termination. Disputes must be submitted in writing within ten (10) days of the charge.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1F2535] mb-2">6. Agreement Services and Benefits Defined</p>
                    <p className="mb-3">
                      <span className="font-semibold text-[#1F2535]">A. Priority Service.</span> Members receive priority over non-members for repair services, typically same-day service with a maximum 24-hour waiting period. During high-demand periods, repairs are prioritized based on urgency, with top priority for safety-related repairs, medical necessities, and complete heating or cooling unavailability.
                    </p>
                    <p className="mb-3">
                      <span className="font-semibold text-[#1F2535]">B. System Inspections.</span> Club members receive a complimentary annual system inspection per system (valued at $149) to assess HVAC performance and identify potential issues. This differs from a comprehensive tune-up, which may incur additional costs.
                    </p>
                    <p className="mb-3">
                      <span className="font-semibold text-[#1F2535]">C. Discounted Repairs.</span> During the active agreement term, tune-up and repair services receive 15% off standard charges. Additional discounts include 10% off electrical services, 10% off plumbing services, 15% off tune-ups, and 5% off installations.
                    </p>
                    <p className="mb-3">
                      <span className="font-semibold text-[#1F2535]">D. Discounted Trip Charge.</span> Members receive a 50% discount on trip charges for both standard and weekend service calls based on current pricing during the agreement term.
                    </p>
                    <p className="mb-3">
                      <span className="font-semibold text-[#1F2535]">E. Referral Rewards.</span> For every successful referral resulting in a project totaling $10,000 or more, the referring member receives a $300 referral fee.
                    </p>
                    <p className="mb-3">
                      <span className="font-semibold text-[#1F2535]">F. Monthly Newsletter.</span> Club members receive a monthly newsletter including updates, tips, and exclusive offers.
                    </p>
                    <p>
                      <span className="font-semibold text-[#1F2535]">G. Exclusive Offers.</span> Members have access to exclusive offers, raffles, special deals, and promotions available only to club members.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1F2535] mb-2">7. General Terms</p>
                    <p>
                      SUMZERO is not liable for acts of nature, work by others, obsolescence, misuse, or negligence. This Agreement is governed by the laws of the State of Massachusetts. The customer agrees to pay attorneys' fees for enforcement. Both parties shall treat all information shared under this Agreement as confidential and shall not disclose it without the other party's consent.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
