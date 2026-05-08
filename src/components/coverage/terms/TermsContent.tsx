"use client"

import { useState, useEffect } from "react"
import { BookOpen } from "lucide-react"

const SECTIONS = [
  { id: "parties",              label: "Parties",                 index: "A"  },
  { id: "warranty-period",      label: "Warranty Period",         index: "B"  },
  { id: "scope-of-coverage",    label: "Scope of Coverage",       index: "C"  },
  { id: "maintenance",          label: "Maintenance Requirements", index: "D" },
  { id: "exclusions",           label: "Exclusions",              index: "E"  },
  { id: "how-to-request",       label: "How to Request Service",  index: "F"  },
  { id: "dispute-resolution",   label: "Dispute Resolution",      index: "G"  },
  { id: "severability",         label: "Severability",            index: "H"  },
  { id: "transfer",             label: "Transfer",                index: "I"  },
  { id: "cancellation",         label: "Cancellation",            index: "J"  },
  { id: "massachusetts-notice", label: "Massachusetts Notice",    index: "MA" },
  { id: "entire-agreement",     label: "Entire Agreement",        index: "—"  },
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
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-md text-[15px] transition-all duration-200 cursor-pointer ${
              activeId === s.id
                ? "bg-[#96C83D]/10 text-[#1F2535] font-semibold"
                : "text-[#5a6a7e] hover:bg-[#f1f3f6] hover:text-[#1F2535]"
            }`}
          >
            <span className={`flex-shrink-0 w-7 h-6 rounded-full text-[10px] font-black flex items-center justify-center transition-colors duration-200 ${
              activeId === s.id ? "bg-[#96C83D] text-white" : "bg-[#f1f3f6] text-[#5a6a7e]"
            }`}>
              {s.index}
            </span>
            {s.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-8 rounded-full bg-[#96C83D] text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
        {index}
      </span>
      <h2 className="text-xl font-black text-[#1F2535] uppercase tracking-tight">{title}</h2>
      <div className="flex-1 h-[1px] bg-[#d0d7e2]" />
    </div>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="text-[15px] leading-relaxed text-[#3a4557] flex flex-col gap-4">{children}</div>
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5">
      <span className="w-1.5 h-1.5 rounded-full bg-[#96C83D] flex-shrink-0 mt-[9px]" />
      <p>{children}</p>
    </div>
  )
}

function NumBullet({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="w-5 h-5 rounded-full bg-[#96C83D]/15 text-[#96C83D] text-[11px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
      <p>{children}</p>
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

          <aside className="hidden lg:block w-80 flex-shrink-0">
            <SideNav activeId={activeId} />
          </aside>

          <div className="flex-1 min-w-0">

            {/* Intro box */}
            <div className="bg-[#0f1520] rounded-xl px-7 py-6 mb-12 text-[15px] leading-relaxed text-white/75">
              <span className="font-bold text-[#96C83D]">To use this warranty:</span>{" "}
              Call SumZero Energy Systems at{" "}
              <a href="tel:+15089650046" className="text-[#96C83D] font-semibold hover:text-white transition-colors cursor-pointer">(508) 965-0046</a>{" "}
              before arranging any service. All repairs require pre-authorization. Repairs arranged through a third party
              without SumZero&rsquo;s written approval are not covered and may void coverage on the affected component.
            </div>

            {/* A */}
            <div id="parties" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="A" title="Parties" />
              <Body>
                <p>Throughout this Warranty, &ldquo;You&rdquo; and &ldquo;Your&rdquo; refer to the Warranty Holder identified on the Schedule of Coverage. &ldquo;We,&rdquo; &ldquo;Us,&rdquo; and &ldquo;Our&rdquo; refer to SumZero Energy Systems (&ldquo;Dealer&rdquo;), the Obligor of this Warranty and the contractor responsible for all covered repairs.</p>
                <p>Magellan Service Corporation (&ldquo;Magellan&rdquo;) administers this Warranty on behalf of SumZero Energy Systems and has no financial obligations under this Warranty. Warranty program services are delivered through Conduit Warranty Solutions.</p>
              </Body>
            </div>

            {/* B */}
            <div id="warranty-period" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="B" title="Warranty Period" />
              <Body>
                <p>Coverage begins on the Effective Date shown on the Schedule of Coverage and remains in effect for the term selected (5 or 10 years, depending on plan selected), provided that:</p>
                <div className="flex flex-col gap-2 pl-1">
                  <Bullet>The Covered Address remains under the same ownership (unless transferred per Section I), and</Bullet>
                  <Bullet>The Covered Equipment is maintained in accordance with Section D of this Agreement.</Bullet>
                </div>
              </Body>
            </div>

            {/* C */}
            <div id="scope-of-coverage" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="C" title="Scope of Coverage" />
              <Body>
                <p>During the coverage period, SumZero Energy Systems will cover the following costs associated with failures of the Covered Equipment:</p>
                <div className="flex flex-col gap-2 pl-1">
                  <Bullet><span className="font-semibold text-[#1F2535]">Diagnostic labor</span> — technician time to identify the root cause of a covered failure.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Repair labor</span> — labor to remove, replace, and reinstall parts covered under the manufacturer&rsquo;s warranty.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Refrigerant</span> — cost of refrigerant required to restore proper system charge following a covered repair in which a leak has been permanently repaired or a covered component replaced. Refrigerant costs are not covered during diagnostic visits or leak checks alone.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Thermostat labor</span> — labor associated with thermostat repairs, not to exceed $250 over the life of this Warranty.</Bullet>
                </div>
                <p><span className="font-semibold text-[#1F2535]">Aggregate Limit:</span> The total amount payable across all covered repairs under this Warranty shall not exceed the amount shown on the Schedule of Coverage over the life of the Warranty. This Warranty covers labor and refrigerant only. The cost of replacement parts is covered separately under the manufacturer&rsquo;s warranty.</p>
              </Body>
            </div>

            {/* D */}
            <div id="maintenance" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="D" title="Maintenance Requirements" />
              <Body>
                <p>This Warranty remains valid only if the Covered Equipment is inspected by a qualified HVAC professional at minimum once per calendar year.</p>
                <p><span className="font-semibold text-[#1F2535]">What &ldquo;maintenance&rdquo; means:</span> A professional system inspection intended to verify safe operation, system performance, and overall system integrity.</p>
                <p><span className="font-semibold text-[#1F2535]">What maintenance does not include</span> — the following are not part of the annual maintenance requirement and are not covered by this Warranty:</p>
                <div className="flex flex-col gap-2 pl-1">
                  <Bullet>Air filters, humidifier canisters or pads, belts, oil filters</Bullet>
                  <Bullet>Refrigerants outside of a covered repair</Bullet>
                  <Bullet>Cleaning or washing of indoor or outdoor units</Bullet>
                  <Bullet>Materials or labor required to correct deficiencies identified during inspection</Bullet>
                </div>
                <p className="text-[#5a6a7e] italic text-[14px]">Any such items or services, if recommended during an inspection, must be separately authorized and billed.</p>
                <p><span className="font-semibold text-[#1F2535]">Preferred provider:</span> Annual maintenance performed by SumZero Energy Systems — including through the Comfort Club inspection program — satisfies this requirement and documents system condition in support of future claims.</p>
                <p><span className="font-semibold text-[#1F2535]">Third-party maintenance:</span> At SumZero&rsquo;s sole discretion, maintenance by a third-party HVAC contractor may be accepted only if the provider is approved in writing by SumZero prior to service, complete and verifiable records are provided upon request, and no damage, misconfiguration, or performance degradation attributable to that service is identified. Failure to meet these requirements may result in claim denial or suspension of coverage for affected components.</p>
              </Body>
            </div>

            {/* E */}
            <div id="exclusions" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="E" title="Exclusions — What Is Not Covered" />
              <Body>
                <p>The following are excluded from Limited Warranty coverage:</p>
                <div className="flex flex-col gap-2.5 pl-1">
                  <Bullet>Any labor cost associated with parts not covered by the manufacturer&rsquo;s warranty.</Bullet>
                  <Bullet>It may be necessary for the Service Provider to open walls, ceilings, floors, or other parts of the Covered Address to access the Covered Equipment. We are not responsible for costs incurred to access covered equipment, including but not limited to removal of baseboards, walls, doors, crane rental, and additional labor time. The Dealer will close any opening to a rough finish. We are not responsible for any restoration required to return any opening or access point to its original state.</Bullet>
                  <Bullet>Any repair that is considered routine maintenance by either the Covered Equipment manufacturer or Dealer.</Bullet>
                  <Bullet>Disposal charges, recycling fees, or any fees assessed by the Dealer to dispose of any part of the Covered Equipment or for recovery of refrigerant.</Bullet>
                  <Bullet>This Limited Warranty is not responsible for service delays outside our control, including but not limited to labor disputes, delays, or difficulties; part or equipment availability; or any delay causing a repair not to be completed in a timely manner.</Bullet>
                  <Bullet>This Limited Warranty only covers labor costs associated with the installation of parts covered by the manufacturer&rsquo;s warranty where the manufacturer is providing coverage for the part but not for the labor to install the covered part.</Bullet>
                  <Bullet>This Limited Warranty is not responsible for upgrades to existing covered equipment, or for repairs or replacements due to incompatibility of the existing Covered Equipment with a new part, component, or repair, or for changes to refrigerants, technologies, or when required by state, federal, or local codes.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Unauthorized Third-Party Repairs</span> — Any repair, modification, adjustment, or service performed by a contractor other than SumZero Energy Systems without SumZero&rsquo;s prior written authorization. Unauthorized repairs void coverage for affected components and are not eligible for reimbursement.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Failure to Contact SumZero Prior to Repair</span> — Costs incurred without prior notification to and authorization from SumZero Energy Systems. If You arrange repairs through another contractor before contacting SumZero, those costs are not covered and may result in suspension of coverage for the affected component.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Pre-Existing Conditions</span> — Any condition, failure, or deficiency that existed prior to the Effective Date of this Warranty.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Lack of Maintenance, Misuse, or Negligence</span> — Failures caused by improper use, abuse, neglect, or failure to meet the maintenance requirements of Section D.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Acts of God / Force Majeure</span> — Failures or damage caused by fire, flood, lightning, windstorms, hail, earthquakes, freezing temperatures, power surges, vandalism, acts of war, terrorism, civil unrest, or utility service interruptions.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Taxes and Non-Covered Charges</span> — Taxes, trip charges, diagnostic fees, or administrative charges not directly associated with a covered repair.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Cosmetic Deficiencies and Post-Installation Appearance</span> — Cosmetic conditions, aesthetic wear, or installation appearance issues are not covered under this Warranty. This includes but is not limited to: line hide covers displaced or degraded by weather or UV exposure, spray foam sealant erosion or shrinkage, insulation tape deterioration, conduit fittings, and exterior trim or protective covers. Any such conditions arising within the first year of installation must be reported during the standard one-year craftsmanship warranty period. After that period expires, cosmetic corrections and appearance-related repairs are the responsibility of the Warranty Holder.</Bullet>
                  <Bullet><span className="font-semibold text-[#1F2535]">Non-Covered Equipment</span> — Any system, component, or unit not identified on the Schedule of Coverage. Coverage is specific to the equipment and address listed on the Schedule of Coverage.</Bullet>
                </div>
                <div className="bg-[#1F2535]/5 border border-[#1F2535]/10 rounded-lg px-5 py-4 text-[13px] leading-relaxed text-[#3a4557] uppercase tracking-wide">
                  WE SHALL HAVE NO FURTHER LIABILITY OR OBLIGATION OF ANY NATURE WHATSOEVER ARISING OUT OF YOUR EXPRESS LIMITED WARRANTY, INCLUDING BUT NOT LIMITED TO LIABILITY OR OBLIGATION FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU. ANY IMPLIED WARRANTIES ACCOMPANYING THE SALE OF THE APPEARANCE PROTECTION PRODUCTS ARE LIMITED IN DURATION TO THE DURATION OF YOUR EXPRESS LIMITED WARRANTY. SOME STATES DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU. YOUR LIMITED WARRANTY IS GRANTED FOR YOUR SOLE BENEFIT, AND THAT OF SUCH TRANSFEREE AS PERMITTED. THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE.
                </div>
              </Body>
            </div>

            {/* F */}
            <div id="how-to-request" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="F" title="How to Request Service" />
              <Body>
                <div className="flex flex-col gap-2.5 pl-1">
                  <NumBullet n={1}>Contact SumZero Energy Systems directly at <a href="tel:+15089650046" className="text-[#96C83D] font-semibold hover:text-[#7aaa28] transition-colors cursor-pointer">(508) 965-0046</a> before arranging any service.</NumBullet>
                  <NumBullet n={2}>SumZero will diagnose the issue and determine coverage eligibility.</NumBullet>
                  <NumBullet n={3}>All covered repairs must be authorized and performed by SumZero Energy Systems or its authorized service partners.</NumBullet>
                  <NumBullet n={4}>All warranty services require pre-authorization. Do not arrange repairs through a third party without first contacting SumZero Energy Systems — unauthorized repairs are not covered and may void coverage on the affected component.</NumBullet>
                </div>
              </Body>
            </div>

            {/* G */}
            <div id="dispute-resolution" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="G" title="Dispute Resolution" />
              <Body>
                <p>Except where prohibited by law, You agree that in the event of a dispute related to this Warranty that cannot be resolved through direct discussion with SumZero Energy Systems:</p>
                <div className="flex flex-col gap-2.5 pl-1">
                  <NumBullet n={1}>You hereby waive all rights to bring legal action against Us. By accepting this Warranty, You knowingly waive Your right to litigate any claim in any state or federal court.</NumBullet>
                  <NumBullet n={2}>Any and all disputes, claims, and causes of action arising out of or connected to this Warranty shall be resolved individually, without resort to any form of class action or legal action.</NumBullet>
                  <NumBullet n={3}>You agree that any and all disputes, claims, and causes of action arising out of or connected to this Warranty shall be resolved exclusively by the American Arbitration Association in the state of New Mexico under its Commercial Arbitration Rules. All matters shall be submitted to arbitration regardless of how they arise, including contract, tort, common law, statutory, or regulatory duties or liability.</NumBullet>
                  <NumBullet n={4}>Any and all claims, judgments, and awards shall be limited to actual out-of-pocket costs incurred, to a maximum of $2,000 per claim. Attorney fees shall not be reimbursed or paid under any circumstances. The maximum settlement amount shall not exceed the aggregate limit payable under this Warranty.</NumBullet>
                </div>
              </Body>
            </div>

            {/* H */}
            <div id="severability" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="H" title="Severability" />
              <Body>
                <p>If any provision of this Warranty is found to be invalid, illegal, or unenforceable, that provision shall be excluded only to the extent of such invalidity, and all remaining provisions shall remain in full force and effect.</p>
              </Body>
            </div>

            {/* I */}
            <div id="transfer" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="I" title="Transfer" />
              <Body>
                <p>This Warranty may be transferred once to a subsequent homeowner of the Covered Address. To initiate a transfer, contact SumZero Energy Systems at <a href="tel:+15089650046" className="text-[#96C83D] font-semibold hover:text-[#7aaa28] transition-colors cursor-pointer">(508) 965-0046</a> and provide the name and address of the new owner. A $50 transfer fee applies. The Warranty may only be transferred once and only while it remains in effect.</p>
              </Body>
            </div>

            {/* J */}
            <div id="cancellation" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="J" title="Cancellation" />
              <Body>
                <p>This is a Limited Labor Warranty and cannot be cancelled once issued.</p>
              </Body>
            </div>

            {/* Massachusetts Notice */}
            <div id="massachusetts-notice" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="MA" title="Massachusetts Notice" />
              <Body>
                <p>You may return this Warranty within 20 days of the date it was mailed to You, or within 10 days if delivered at the time of sale. If You made no claim, the Warranty is void and the full purchase price will be refunded. The Administrator will pay a penalty of 10% per month on any refund not paid or credited within 45 days of return. These provisions apply only to the original purchaser.</p>
              </Body>
            </div>

            {/* Entire Agreement */}
            <div id="entire-agreement" className="mb-14 scroll-mt-[160px]">
              <SectionHeader index="—" title="Entire Agreement" />
              <Body>
                <p>This Warranty, together with the Schedule of Coverage provided at time of purchase, constitutes the entire agreement between the parties. No representations, promises, or conditions not contained herein shall modify these terms.</p>
              </Body>
            </div>

            {/* Contact footer */}
            <div className="bg-white rounded-xl border border-[#d0d7e2] px-7 py-6 text-[14px] text-[#5a6a7e]">
              <p className="font-bold text-[#1F2535] mb-2">Questions about your coverage?</p>
              <p>
                Call SumZero Energy Systems at{" "}
                <a href="tel:+15089650046" className="text-[#96C83D] font-semibold hover:text-[#7aaa28] transition-colors cursor-pointer">(508) 965-0046</a>{" "}
                or email{" "}
                <a href="mailto:ilija@sumzeroenergy.com" className="text-[#96C83D] font-semibold hover:text-[#7aaa28] transition-colors cursor-pointer">ilija@sumzeroenergy.com</a>.
              </p>
              <p className="mt-1 text-[#5a6a7e]">84 October Hill Road, Holliston, MA 01746</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
