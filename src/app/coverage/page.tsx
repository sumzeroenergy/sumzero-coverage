"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/coverage/Hero"
import PromiseBar from "@/components/coverage/PromiseBar"
import InstallationPromise from "@/components/coverage/InstallationPromise"
import HowItWorks from "@/components/coverage/HowItWorks"
import LayerOne from "@/components/coverage/LayerOne"
import LayerTwo from "@/components/coverage/LayerTwo"
import LayerThree from "@/components/coverage/LayerThree"
import Timeline from "@/components/coverage/Timeline"
import FinalCta from "@/components/coverage/FinalCta"
import RequestCallModal, { openRequestCallModal } from "@/components/RequestCallModal"
import AddCoverageModal, { openAddCoverageModal } from "@/components/AddCoverageModal"
import BookingModal from "@/components/BookingModal"
import { openBookingModal } from "@/lib/booking-modal"
import { LEAD_SUMMARIES } from "@/lib/lead-summaries"

const NAV_LINKS: { label: string; href: string }[] = []

const openProtectPlus    = () => openAddCoverageModal(LEAD_SUMMARIES.PROTECT_PLUS)
const openClubMembership = () => openBookingModal(LEAD_SUMMARIES.CLUB_MEMBERSHIP)

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <RequestCallModal />
      <AddCoverageModal />
      <BookingModal />
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="Add Coverage"
        onCtaClick={openProtectPlus}
      />
      <Hero />
      <PromiseBar />
      <InstallationPromise />
      <HowItWorks />
      <LayerOne />
      <LayerTwo />
      <LayerThree onAddCoverage={openProtectPlus} />
      <Timeline />
      <FinalCta onJoinClub={openClubMembership} />
    </main>
  )
}
