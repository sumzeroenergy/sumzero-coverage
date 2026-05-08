"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/coverage/terms/Hero"
import TermsContent from "@/components/coverage/terms/TermsContent"
import AddCoverageModal, { openAddCoverageModal } from "@/components/AddCoverageModal"

const NAV_LINKS: { label: string; href: string }[] = []

export default function ProtectTermsPage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <AddCoverageModal />
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="SumZero PROTECT+"
        onCtaClick={openAddCoverageModal}
      />
      <Hero />
      <TermsContent />
    </main>
  )
}
