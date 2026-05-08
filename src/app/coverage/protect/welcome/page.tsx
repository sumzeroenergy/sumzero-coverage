"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/coverage/welcome/Hero"
import FromTheOwners from "@/components/coverage/welcome/FromTheOwners"
import AddCoverageModal, { openAddCoverageModal } from "@/components/AddCoverageModal"

const NAV_LINKS: { label: string; href: string }[] = []

export default function CoverageWelcomePage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <AddCoverageModal />
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="Add Coverage"
        onCtaClick={openAddCoverageModal}
      />
      <Hero />
      <FromTheOwners />
    </main>
  )
}
