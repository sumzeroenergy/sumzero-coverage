"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/coverage/welcome/Hero"
import FromTheOwners from "@/components/coverage/welcome/FromTheOwners"
import ThreeLayers from "@/components/coverage/welcome/ThreeLayers"
import EligibleEquipment from "@/components/coverage/welcome/EligibleEquipment"
import OneCall from "@/components/coverage/welcome/OneCall"
import WhileYoureHere from "@/components/coverage/welcome/WhileYoureHere"
import Questions from "@/components/coverage/welcome/Questions"
import RequestCallModal, { openRequestCallModal } from "@/components/RequestCallModal"
import { LEAD_SUMMARIES } from "@/lib/lead-summaries"

const NAV_LINKS: { label: string; href: string }[] = []

const openSupport = () => openRequestCallModal(LEAD_SUMMARIES.PROTECT_PLUS_MEMBER_SUPPORT)

export default function CoverageWelcomePage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <RequestCallModal />
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="Talk to Support"
        onCtaClick={openSupport}
      />
      <Hero />
      <FromTheOwners />
      <ThreeLayers />
      <EligibleEquipment />
      <OneCall />
      <WhileYoureHere />
      <Questions />
    </main>
  )
}
