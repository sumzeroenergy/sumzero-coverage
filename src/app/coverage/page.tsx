"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/coverage/Hero"
import RequestCallModal, { openRequestCallModal } from "@/components/RequestCallModal"
import AddCoverageModal, { openAddCoverageModal } from "@/components/AddCoverageModal"

const NAV_LINKS: { label: string; href: string }[] = []

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <RequestCallModal />
      <AddCoverageModal />
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="Add Coverage"
        onCtaClick={openAddCoverageModal}
      />
      <Hero
        onRequestCall={openRequestCallModal}
        onAddCoverage={openAddCoverageModal}
      />
    </main>
  )
}
