"use client"

import { useState, useEffect } from "react"

const SECTIONS = [
  { id: "payment-terms",           label: "Payment Terms"           },
  { id: "agreement-conditions",    label: "Agreement Conditions"    },
  { id: "scheduling",              label: "Scheduling"              },
  { id: "customer-responsibilities", label: "Customer Responsibilities" },
  { id: "terminations-suspensions", label: "Terminations & Suspensions" },
  { id: "services-benefits",       label: "Services & Benefits"    },
  { id: "general-terms",           label: "General Terms"          },
]

function SideNav({ activeId }: { activeId: string }) {
  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 160
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <div className="sticky top-[156px] bg-white rounded-2xl border border-[#d0d7e2] overflow-hidden">
      <div className="px-5 py-4 border-b border-[#d0d7e2]">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#96C83D]">Contents</p>
      </div>
      <nav className="px-3 py-3 flex flex-col gap-0.5">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition-all duration-200 cursor-pointer ${
              activeId === s.id
                ? "bg-[#96C83D]/10 text-[#1F2535] font-semibold"
                : "text-[#5a6a7e] hover:bg-[#f1f3f6] hover:text-[#1F2535]"
            }`}
          >
            <span
              className={`flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center transition-colors duration-200 ${
                activeId === s.id
                  ? "bg-[#96C83D] text-white"
                  : "bg-[#f1f3f6] text-[#5a6a7e]"
              }`}
            >
              {i + 1}
            </span>
            {s.label}
          </button>
        ))}
      </nav>
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
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <SideNav activeId={activeId} />
          </aside>

          {/* Right — content (placeholder until copy arrives) */}
          <div className="flex-1 min-w-0">
            {SECTIONS.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className="mb-14 scroll-mt-[160px]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#96C83D] text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <h2 className="text-xl font-black text-[#1F2535] uppercase tracking-tight">
                    {s.label}
                  </h2>
                </div>
                <div className="h-[1px] bg-[#d0d7e2] mb-5" />
                <p className="text-[15px] text-[#5a6a7e] italic">
                  Content coming soon…
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
