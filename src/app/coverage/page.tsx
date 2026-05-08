"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/coverage/Hero"
import PromiseBar from "@/components/coverage/PromiseBar"
import InstallationPromise from "@/components/coverage/InstallationPromise"
import RequestCallModal, { openRequestCallModal } from "@/components/RequestCallModal"
import AddCoverageModal, { openAddCoverageModal } from "@/components/AddCoverageModal"
import BookingModal from "@/components/BookingModal"
import { openBookingModal } from "@/lib/booking-modal"

const NAV_LINKS: { label: string; href: string }[] = []

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <RequestCallModal />
      <AddCoverageModal />
      <BookingModal />
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="Add Coverage"
        onCtaClick={openAddCoverageModal}
      />
      <Hero
        onAddCoverage={openAddCoverageModal}
        onJoinClub={openBookingModal}
      />
      <PromiseBar />
      <InstallationPromise />
    </main>
  )
}
