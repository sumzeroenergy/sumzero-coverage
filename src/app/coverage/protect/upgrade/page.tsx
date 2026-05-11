"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/coverage/upgrade/Hero"
import Pricing from "@/components/coverage/upgrade/Pricing"
import ClaimCovers from "@/components/coverage/upgrade/ClaimCovers"
import SystemsCovered from "@/components/coverage/upgrade/SystemsCovered"
import HowItWorks from "@/components/coverage/upgrade/HowItWorks"
import ClubCta from "@/components/coverage/upgrade/ClubCta"
import NotCovered from "@/components/coverage/upgrade/NotCovered"
import Faq from "@/components/coverage/upgrade/Faq"
import FinalCta from "@/components/coverage/upgrade/FinalCta"
import AddCoverageModal, { openAddCoverageModal } from "@/components/AddCoverageModal"
import RequestCallModal from "@/components/RequestCallModal"

export default function ProtectUpgradePage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <AddCoverageModal />
      <RequestCallModal />
      <Header
        navLinks={[]}
        ctaLabel="Get Protected Today"
        onCtaClick={openAddCoverageModal}
      />
      <Hero onGetProtected={openAddCoverageModal} />
      <Pricing onGetProtected={openAddCoverageModal} />
      <ClaimCovers />
      <SystemsCovered />
      <HowItWorks />
      <ClubCta />
      <NotCovered />
      <Faq />
      <FinalCta onGetProtected={openAddCoverageModal} />
    </main>
  )
}
