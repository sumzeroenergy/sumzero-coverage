"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Clock } from "lucide-react"

export interface NavLink {
  label:    string
  href:     string
  onClick?: () => void
}

interface HeaderProps {
  navLinks: NavLink[]
  ctaLabel: string
  onCtaClick: () => void
}

const PHONE      = "(508) 965-0046"
const PHONE_HREF = "tel:+15089650046"
const HOURS      = "Mon – Fri  |  8:00 AM – 5:00 PM"

function scrollToSection(href: string) {
  const id = href.replace("#", "")
  const el = document.getElementById(id)
  if (!el) return
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 140
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16
  window.scrollTo({ top, behavior: "smooth" })
}

export default function Header({ navLinks, ctaLabel, onCtaClick }: HeaderProps) {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId,   setActiveId]   = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", "")).filter(Boolean)
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      o.observe(el)
      observers.push(o)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [navLinks])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${!scrolled ? "border-b border-white/10" : ""}`}>
      {/* Top info bar */}
      <div className="bg-[#1F2535]/90 border-b border-white/10">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-11 text-sm">
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={13} />
              <span>{HOURS}</span>
            </div>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 font-semibold text-[#96C83D] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <Phone size={13} />
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#0f1520]/80 shadow-2xl shadow-black/40 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <Image
                src="/assets/sumzero-logo-white.png"
                alt="SumZero Energy Systems"
                width={220}
                height={66}
                className="h-12 w-auto"
                priority
              />
            </a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "")
                const isActive = activeId === id
                return (
                  <button
                    key={link.href}
                    onClick={() => link.onClick ? link.onClick() : scrollToSection(link.href)}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 pb-0.5 cursor-pointer ${
                      isActive ? "text-[#96C83D]" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-[#96C83D] rounded-full" />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={onCtaClick}
                className="hidden sm:inline-flex items-center gap-2 bg-[#96C83D] hover:bg-[#7aaa28] text-white font-semibold px-6 py-3 rounded transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {ctaLabel}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                aria-label="Toggle menu"
              >
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-80 border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="bg-[#0f1520]/95 backdrop-blur-xl px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => { setMobileOpen(false); link.onClick ? link.onClick() : scrollToSection(link.href) }}
                className="text-white/80 hover:text-[#96C83D] text-base font-medium transition-colors py-1 cursor-pointer text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onCtaClick() }}
              className="mt-2 w-full bg-[#96C83D] hover:bg-[#7aaa28] text-white font-semibold px-6 py-3 rounded transition-colors cursor-pointer"
            >
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
