"use client"

import { useState, useEffect } from "react"
import { AlertCircle, BookOpen } from "lucide-react"

const SECTIONS = [
  { id: "payment-terms",              label: "Payment Terms"             },
  { id: "agreement-conditions",       label: "Agreement Conditions"      },
  { id: "scheduling",                 label: "Scheduling"                },
  { id: "customer-responsibilities",  label: "Customer Responsibilities" },
  { id: "terminations-suspensions",   label: "Terminations & Suspensions"},
  { id: "services-benefits",          label: "Services & Benefits"       },
  { id: "general-terms",              label: "General Terms"             },
]

function SideNav({ activeId }: { activeId: string }) {
  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 160
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <div className="sticky top-[190px] bg-white rounded-2xl border border-[#d0d7e2] overflow-hidden">
      <div className="px-5 py-4 border-b border-[#d0d7e2] flex items-center gap-2">
        <BookOpen size={15} className="text-[#96C83D]" />
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#96C83D]">Contents</p>
      </div>
      <nav className="px-3 py-3 flex flex-col gap-0.5">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-[15px] transition-all duration-200 cursor-pointer ${
              activeId === s.id
                ? "bg-[#96C83D]/10 text-[#1F2535] font-semibold"
                : "text-[#5a6a7e] hover:bg-[#f1f3f6] hover:text-[#1F2535]"
            }`}
          >
            <span className={`flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center transition-colors duration-200 ${
              activeId === s.id ? "bg-[#96C83D] text-white" : "bg-[#f1f3f6] text-[#5a6a7e]"
            }`}>
              {i + 1}
            </span>
            {s.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-2 text-[15px] leading-relaxed text-[#3a4557]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#96C83D] flex-shrink-0 mt-[9px]" />
      <p><span className="font-semibold text-[#1F2535]">{label}:</span> {children}</p>
    </div>
  )
}

function SubSection({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="text-[15px] font-bold text-[#1F2535] mb-2">
        <span className="text-[#96C83D] mr-1">{letter}.</span> {title}
      </p>
      <div className="text-[15px] leading-relaxed text-[#3a4557] pl-4">{children}</div>
    </div>
  )
}

export default function TermsContent() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: "-30% 0px -60% 0px" }
      )
      o.observe(el)
      observers.push(o)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="bg-[#f1f3f6] py-16">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex gap-10 items-start">

          {/* Left — sticky nav */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <SideNav activeId={activeId} />
          </aside>

          {/* Right — content */}
          <div className="flex-1 min-w-0">

            {/* Intro box */}
            <div className="bg-[#0f1520] rounded-2xl px-7 py-7 mb-12 flex gap-5 items-center">
              <AlertCircle size={36} className="text-[#96C83D] flex-shrink-0" />
              <p className="text-[15px] leading-relaxed text-white/75">
                <span className="font-bold text-white">Please read these terms carefully before enrolling.</span>{" "}
                By signing a SumZero Comfort Club Agreement (SCCA), each party agrees to be bound by these Terms and Conditions,
                including signed proposals, payment terms, policies, practices, rules, standards, and guidelines provided in writing
                related to the services (collectively the &ldquo;Agreement&rdquo;).
              </p>
            </div>

            {/* Section 1 */}
            <div id="payment-terms" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={1} title="Payment Terms" />
              <div className="flex flex-col gap-3">
                <Item label="Membership fee">$99 per system per year.</Item>
                <Item label="Payment method">Exclusively via credit card on file.</Item>
                <Item label="Authorization">By signing this Agreement, you authorize SumZero to bill the credit card provided. The signee confirms ownership of or permission to use the credit card.</Item>
                <Item label="Automatic renewal">This Agreement will automatically renew at the current rate unless cancellation is requested in writing at least 30 days prior to the renewal date.</Item>
                <Item label="Cancellation">May be canceled at any time via written notification. No refunds are provided for cancellations after billing has processed.</Item>
              </div>
            </div>

            {/* Section 2 */}
            <div id="agreement-conditions" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={2} title="Agreement Conditions" />
              <div className="flex flex-col gap-3">
                <Item label="Inspection and approval">Enrollment is subject to system inspection and approval. SumZero reserves the right to inspect the system before issuing or renewing an Agreement.</Item>
                <Item label="Maintenance schedule">Annual inspections for each covered piece of equipment will be conducted Monday through Friday, 8:00 AM to 4:00 PM, excluding holidays.</Item>
                <Item label="Transferability">This Agreement is transferable upon sale of the home within the coverage period.</Item>
                <Item label="Suspension">SumZero may suspend or discontinue services if this Agreement is breached by the customer.</Item>
              </div>
            </div>

            {/* Section 3 */}
            <div id="scheduling" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={3} title="Scheduling" />
              <div className="flex flex-col gap-3">
                <Item label="Annual inspection window">Standard inspection season runs January 1st through May 31st, and may be extended at SumZero's discretion. Inspections are scheduled by the company via call, text, or email.</Item>
                <Item label="Reminders">Customers will receive reminders to schedule their annual inspection within the applicable window.</Item>
                <Item label="Missed appointments">A 24-hour notice is appreciated when canceling or rescheduling. A $50 no-show fee applies for missed appointments without prior notice.</Item>
              </div>
            </div>

            {/* Section 4 */}
            <div id="customer-responsibilities" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={4} title="Customer Responsibilities" />
              <div className="flex flex-col gap-3">
                <Item label="Operation">Equipment must be operated in accordance with manufacturer and technician recommendations.</Item>
                <Item label="Notifications">Promptly notify SumZero of unusual operating conditions or equipment performance issues.</Item>
                <Item label="Service personnel">Allow only SumZero personnel to perform maintenance or repairs on covered systems during the term of this Agreement.</Item>
                <Item label="Access">Provide a safe and reasonably accessible area for service personnel to perform work.</Item>
              </div>
            </div>

            {/* Section 5 */}
            <div id="terminations-suspensions" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={5} title="Terminations & Suspensions" />
              <div className="flex flex-col gap-3">
                <Item label="Termination by SumZero">SumZero may terminate this Agreement if the terms are breached by the customer. No refund will be provided upon termination for cause.</Item>
                <Item label="Dispute resolution">Billing disputes must be submitted in writing within ten (10) days of the charge date.</Item>
              </div>
            </div>

            {/* Section 6 */}
            <div id="services-benefits" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={6} title="Services & Benefits Defined" />
              <SubSection letter="A" title="Priority Service">
                <p>Club members receive priority scheduling over non-members for repair services. This is designed to provide same-day service in most cases, with a maximum wait of 24 hours from the time of request. During periods of high demand, repairs are prioritized by urgency — with top priority given to safety-related repairs, medical necessities, and situations where heating or cooling is completely unavailable.</p>
              </SubSection>
              <SubSection letter="B" title="Annual System Inspection">
                <p>Club members receive one complimentary annual inspection per covered system (valued at $149) to assess HVAC performance and identify potential issues. This inspection differs from a full tune-up, which involves additional maintenance tasks and may incur an extra cost.</p>
              </SubSection>
              <SubSection letter="C" title="Discounted Repairs">
                <p className="mb-3">During the active term of this Agreement, the following discounts apply:</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    ["Tune-ups and repair services", "15% off standard charges"],
                    ["Electrical services",           "10% off"],
                    ["Plumbing services",             "10% off"],
                    ["Installations",                 "5% off"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-[#d0d7e2] pb-1.5">
                      <span className="text-[#3a4557]">{label}</span>
                      <span className="font-semibold text-[#1F2535]">{value}</span>
                    </div>
                  ))}
                </div>
              </SubSection>
              <SubSection letter="D" title="Discounted Trip Charge">
                <p>Club members receive a 50% discount on the trip charge for both standard and weekend service calls. The discount is applied to the trip charge rate in effect at the time of service.</p>
              </SubSection>
              <SubSection letter="E" title="Referral Rewards">
                <p>For every successful referral of a new customer who completes a project totaling $10,000 or more, the referring Club member receives a $300 referral fee.</p>
              </SubSection>
              <SubSection letter="F" title="Monthly Newsletter">
                <p>Club members receive a monthly newsletter with seasonal tips, system maintenance reminders, and exclusive member offers.</p>
              </SubSection>
              <SubSection letter="G" title="Exclusive Offers">
                <p>Club members have access to exclusive offers, including raffles, special deals, and promotions available only to active members.</p>
              </SubSection>
            </div>

            {/* Section 7 */}
            <div id="general-terms" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={7} title="General Terms" />
              <div className="flex flex-col gap-3">
                <Item label="Exclusions">SumZero is not liable for damage caused by acts of nature, work performed by others, equipment obsolescence, misuse, or customer negligence.</Item>
                <Item label="Governing law">This Agreement is governed by the laws of the Commonwealth of Massachusetts. In the event of a dispute requiring legal action, the customer agrees to pay attorneys' fees incurred by SumZero in enforcing this Agreement.</Item>
                <Item label="Confidentiality">Both parties agree to treat information shared under this Agreement as confidential and not to disclose it to third parties without mutual written consent.</Item>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-8 rounded-full bg-[#96C83D] text-white text-[12px] font-black flex items-center justify-center flex-shrink-0">
        {n}
      </span>
      <h2 className="text-xl font-black text-[#1F2535] uppercase tracking-tight">{title}</h2>
      <div className="flex-1 h-[1px] bg-[#d0d7e2]" />
    </div>
  )
}
