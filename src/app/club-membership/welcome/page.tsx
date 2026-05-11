"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/club-membership/welcome/Hero"
import FromTheOwner from "@/components/club-membership/welcome/FromTheOwner"
import WhatYouGet from "@/components/club-membership/welcome/WhatYouGet"
import FirstDays from "@/components/club-membership/welcome/FirstDays"
import WelcomeFaq from "@/components/club-membership/welcome/Faq"
import FinalCta from "@/components/club-membership/welcome/FinalCta"
import BookingModal from "@/components/BookingModal"
import RequestCallModal from "@/components/RequestCallModal"
import { openBookingModal } from "@/lib/booking-modal"

export default function ClubMembershipWelcomePage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <BookingModal />
      <RequestCallModal />
      <Header
        navLinks={[]}
        ctaLabel="Schedule Inspection"
        onCtaClick={openBookingModal}
      />
      <Hero />
      <FromTheOwner />
      <WhatYouGet />
      <FirstDays />
      <WelcomeFaq />
      <FinalCta />
    </main>
  )
}
