"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/club-membership/terms/Hero"
import TermsContent from "@/components/club-membership/terms/TermsContent"
import BookingModal from "@/components/BookingModal"
import { openBookingModal } from "@/lib/booking-modal"

const NAV_LINKS: { label: string; href: string }[] = []

export default function ClubMembershipTermsPage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <BookingModal />
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="Join the Club"
        onCtaClick={openBookingModal}
      />
      <Hero />
      <TermsContent />
    </main>
  )
}
