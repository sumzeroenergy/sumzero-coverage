"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/club-membership/welcome/Hero"
import FromTheOwner from "@/components/club-membership/welcome/FromTheOwner"
import WhatYouGet from "@/components/club-membership/welcome/WhatYouGet"
import FirstDays from "@/components/club-membership/welcome/FirstDays"
import WelcomeFaq from "@/components/club-membership/welcome/Faq"
import FinalCta from "@/components/club-membership/welcome/FinalCta"
import BookingModal from "@/components/BookingModal"
import RequestCallModal, { openRequestCallModal } from "@/components/RequestCallModal"
import ContactMessageModal from "@/components/ContactMessageModal"
import { LEAD_SUMMARIES } from "@/lib/lead-summaries"

const openContactSupport = () => openRequestCallModal(LEAD_SUMMARIES.CLUB_MEMBERSHIP_CALL_NOW)

export default function ClubMembershipWelcomePage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <BookingModal />
      <RequestCallModal />
      <ContactMessageModal />
      <Header
        navLinks={[]}
        ctaLabel="Contact Us"
        onCtaClick={openContactSupport}
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
