"use client"

import { useState, useEffect } from "react"
import { AlertCircle, BookOpen } from "lucide-react"

const SECTIONS = [
  { id: "payment-terms",              label: "Payment Terms"              },
  { id: "agreement-conditions",       label: "Agreement Conditions"       },
  { id: "scheduling",                 label: "Scheduling"                 },
  { id: "customer-responsibilities",  label: "Customer's Responsibility"  },
  { id: "terminations-suspensions",   label: "Terminations & Suspensions" },
  { id: "services-benefits",          label: "Services & Benefits"        },
  { id: "general-terms",              label: "General Terms"              },
]

function SideNav({ activeId }: { activeId: string }) {
  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 160
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <div className="sticky top-[170px] bg-white rounded-xl border border-[#d0d7e2] overflow-hidden self-start">
      <div className="px-5 py-4 border-b border-[#d0d7e2] flex items-center gap-2">
        <BookOpen size={15} className="text-[#96C83D]" />
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#96C83D]">Contents</p>
      </div>
      <nav className="px-3 py-3 flex flex-col gap-0.5">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-md text-[15px] transition-all duration-200 cursor-pointer ${
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
        <div className="flex gap-16">

          {/* Left — sticky nav */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <SideNav activeId={activeId} />
          </aside>

          {/* Right — content */}
          <div className="flex-1 min-w-0">

            {/* Intro box */}
            <div className="bg-[#0f1520] rounded-xl px-7 py-7 mb-12 flex gap-5 items-center">
              <AlertCircle size={36} className="text-[#96C83D] flex-shrink-0" />
              <p className="text-[15px] leading-relaxed text-white/75">
                <span className="font-bold text-white">Please read these terms and conditions carefully before using the Service.</span>{" "}
                By signing the SUMZERO SCMA, each party agrees to be bound by these Terms and Conditions,
                including signed proposals, payment terms, policies, practices, rules, standards, and guidelines
                provided in writing related to the Services (collectively the &ldquo;Agreement&rdquo;).
              </p>
            </div>

            {/* Section 1 */}
            <div id="payment-terms" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={1} title="Payment Terms" />
              <div className="flex flex-col gap-3">
                <Item label="Membership fee">$99 per system per year.</Item>
                <Item label="Payment Method">Exclusively via credit card on file.</Item>
                <Item label="Authorization">By signing this Agreement, authorization is given to SUMZERO to bill through the credit card. The signee confirms ownership or permission for use of the credit card.</Item>
                <Item label="Automatic Renewal">This Agreement will automatically renew at the current rate unless cancellation is notified in writing 30 days prior.</Item>
                <Item label="Cancellation">Can be canceled at any time via written notification. No refunds are provided for cancellations.</Item>
              </div>
            </div>

            {/* Section 2 */}
            <div id="agreement-conditions" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={2} title="Agreement Conditions" />
              <div className="flex flex-col gap-3">
                <Item label="Inspection and Approval">Signing is subject to systems inspection and approval. SUMZERO reserves the right to inspect the system before issuing or renewing an Agreement.</Item>
                <Item label="Maintenance Schedule">Annual inspections for each piece of equipment will be conducted Monday through Friday, 8:00 AM to 4:00 PM, excluding holidays.</Item>
                <Item label="Transferability">This agreement is transferable upon selling the home within the coverage period.</Item>
                <Item label="Suspension">SUMZERO may suspend or discontinue services if the Agreement is breached.</Item>
              </div>
            </div>

            {/* Section 3 */}
            <div id="scheduling" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={3} title="Scheduling" />
              <div className="flex flex-col gap-3">
                <Item label="Annual Inspection">Standard season from January 1st to May 31st, extendable by SUMZERO. Inspections are scheduled by the company via call, text, or email.</Item>
                <Item label="Reminders">Customers will receive reminders for scheduling their annual inspection.</Item>
                <Item label="Appointment Cancellations">A 24-hour notice is appreciated. A $50 &ldquo;No-Show&rdquo; fee applies for missed appointments.</Item>
              </div>
            </div>

            {/* Section 4 */}
            <div id="customer-responsibilities" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={4} title="Customer's Responsibility" />
              <div className="flex flex-col gap-3">
                <Item label="Operation">Equipment must be operated according to manufacturers&apos; and technicians&apos; recommendations.</Item>
                <Item label="Notifications">Promptly notify SUMZERO of unusual operating conditions.</Item>
                <Item label="Service Personnel">Allow only SUMZERO&apos;s personnel for maintenance or repairs.</Item>
                <Item label="Safe Working Conditions">Provide a safe and reasonably accessible area for the work.</Item>
              </div>
            </div>

            {/* Section 5 */}
            <div id="terminations-suspensions" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={5} title="Terminations & Suspensions" />
              <div className="flex flex-col gap-3">
                <Item label="Suspension/Termination">SUMZERO may terminate the Agreement if it is breached. No refunds will be provided.</Item>
                <Item label="Dispute Resolution">Disputes must be submitted in writing within ten (10) days of the charge.</Item>
              </div>
            </div>

            {/* Section 6 */}
            <div id="services-benefits" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={6} title="Agreement Services and Benefits Defined" />
              <SubSection letter="A" title="Priority Service">
                <p>As a Club Membership member, you are given priority over non-members for repair services. This ensures a typical same-day service, with a maximum waiting period of 24 hours from the time of your service request. During times of high demand, repairs are prioritized based on urgency, with top priority given to safety-related repairs, medical necessities, and situations where heating or cooling is completely unavailable.</p>
              </SubSection>
              <SubSection letter="B" title="Systems Inspections">
                <p>Club members receive a complimentary annual system inspection per system (valued at $149) to assess HVAC performance and identify any potential issues. Please note that this inspection service differs from a comprehensive tune-up, which involves additional maintenance tasks and may incur an extra cost.</p>
              </SubSection>
              <SubSection letter="C" title="Member Discounts">
                <p className="mb-3">As an active Club Membership member, the following discounts apply on services performed by SUMZERO:</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    ["Tune-up and repair services",                                  "10% off standard charges"],
                    ["Electrical services",                                           "10% off"],
                    ["Plumbing services",                                             "10% off"],
                    ["New equipment installation and significant system modifications", "5% off"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-[#d0d7e2] pb-1.5">
                      <span className="text-[#3a4557]">{label}</span>
                      <span className="font-semibold text-[#1F2535]">{value}</span>
                    </div>
                  ))}
                </div>
              </SubSection>
              <SubSection letter="D" title="Discounted Trip Charge">
                <p>Customers under this Agreement receive a 50% discount on the trip charge. This applies to both standard and weekend service calls. The discount is based on the current trip charge prices in effect during the term of the Agreement.</p>
              </SubSection>
              <SubSection letter="E" title="Referral Rewards">
                <p>Club members are entitled to exclusive Referral Rewards. For every successful referral of a new customer who undertakes a project totaling $10,000 or more, the referring member receives a $300 referral fee.</p>
              </SubSection>
              <SubSection letter="F" title="Monthly Newsletter">
                <p>Club members will receive a Monthly Newsletter as part of their membership. The newsletter includes updates, tips, and exclusive offers, catering to the needs and interests of the members.</p>
              </SubSection>
              <SubSection letter="G" title="Exclusive Offers">
                <p>Club members have access to exclusive offers, including raffles, special deals, and promotions. These offers provide unique opportunities to save on select products and services, available only to Club members.</p>
              </SubSection>
              <SubSection letter="H" title="Loyalty Credit">
                <p className="mb-3">Each year of active Club Membership earns a Loyalty Credit equal to $99 per enrolled system. This credit accumulates annually on each membership renewal date and is redeemable exclusively toward the purchase of new equipment installation at the member&apos;s service address.</p>
                <p className="font-semibold text-[#1F2535] mb-2">Loyalty Credit terms:</p>
                <div className="flex flex-col gap-2">
                  {[
                    "Credit accumulates at $99 per enrolled system for each full membership year completed.",
                    "Credit is redeemable only toward new equipment installation and significant system modifications — not toward service calls, repairs, tune-ups, trip charges, or maintenance visits.",
                    "Loyalty Credit may be combined with the applicable member installation discount (5% off installations). Both benefits apply to the same job.",
                    "Credit balance remains active as long as the membership is continuously active. A lapse in membership of more than 90 consecutive days results in forfeiture of the accumulated credit balance.",
                    "Upon re-enrollment following a lapse, the Loyalty Credit balance starts at zero regardless of prior membership history.",
                    "Credit has no cash value and is non-transferable.",
                    "Credit is applied as a line-item reduction on the installation invoice at the time of sale, subject to SUMZERO's confirmation of the current credit balance.",
                  ].map((text, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#96C83D] flex-shrink-0 mt-[8px]" />
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </SubSection>
            </div>

            {/* Section 7 */}
            <div id="general-terms" className="mb-14 scroll-mt-[160px]">
              <SectionHeader n={7} title="General Terms" />
              <div className="flex flex-col gap-3">
                <Item label="Exclusions">SUMZERO is not liable for acts of nature, work by others, obsolescence, misuse, or negligence.</Item>
                <Item label="Disputes">Governed by the laws of the State of Massachusetts. Customer agrees to pay attorneys&apos; fees for enforcement.</Item>
                <Item label="Confidentiality">Both parties shall treat information as confidential and not disclose without consent.</Item>
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
