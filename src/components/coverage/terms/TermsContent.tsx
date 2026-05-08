"use client"

import { useState, useEffect } from "react"
import { AlertCircle, BookOpen } from "lucide-react"

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

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-2 text-[15px] leading-relaxed text-[#3a4557]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#96C83D] flex-shrink-0 mt-[9px]" />
      <p><span className="font-semibold text-[#1F2535]">{label}:</span> {children}</p>
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
                <span className="font-bold text-white">Please read these terms carefully before purchasing coverage.</span>{" "}
                By enrolling in SumZero PROTECT+, each party agrees to be bound by these Terms and Conditions,
                including the scope of coverage, exclusions, and all related policies and guidelines
                (collectively the &ldquo;Agreement&rdquo;).
              </p>
            </div>

            {SECTIONS.map((s) => (
              <div key={s.id} id={s.id} className="mb-14 scroll-mt-[160px]">
                <SectionHeader index={s.index} title={s.label} />
                <p className="text-[15px] text-[#5a6a7e] italic">Content coming soon…</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
