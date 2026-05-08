"use client"

import Header from "@/components/layout/Header"
import RequestCallModal, { openRequestCallModal } from "@/components/RequestCallModal"
import AddCoverageModal, { openAddCoverageModal } from "@/components/AddCoverageModal"

const NAV_LINKS: { label: string; href: string }[] = []

export default function CoverageWelcomePage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <RequestCallModal />
      <AddCoverageModal />
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="Add Coverage"
        onCtaClick={openAddCoverageModal}
      />
    </main>
  )
}
