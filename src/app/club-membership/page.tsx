"use client"

import Header from "@/components/layout/Header"
import Hero from "@/components/club-membership/Hero"
import WhyItMatters from "@/components/club-membership/WhyItMatters"
import WhatWeFind from "@/components/club-membership/WhatWeFind"
import CtaSection from "@/components/club-membership/CtaSection"
import SystemsCovered from "@/components/club-membership/SystemsCovered"
import MaintenanceUmbrella from "@/components/club-membership/MaintenanceUmbrella"
import MembershipPricing from "@/components/club-membership/MembershipPricing"
import InspectionPoints from "@/components/club-membership/InspectionPoints"
import ProtectCta from "@/components/club-membership/ProtectCta"
import Faq from "@/components/club-membership/Faq"
import FinalCta from "@/components/club-membership/FinalCta"
import BookingModal from "@/components/BookingModal"
import { openBookingModal } from "@/lib/booking-modal"
import { LEAD_SUMMARIES } from "@/lib/lead-summaries"

const NAV_LINKS = [
  { label: "Why It Matters",  href: "#why-it-matters" },
  { label: "What We Find",    href: "#what-we-find" },
  { label: "How It Works",    href: "#how-it-works" },
  { label: "Pricing",         href: "#pricing" },
  { label: "The Inspection",  href: "#inspection" },
  { label: "Terms",           href: "#terms", onClick: () => window.open("/club-membership/terms", "_blank", "noopener,noreferrer") },
]

const openClubMembership = () => openBookingModal(LEAD_SUMMARIES.CLUB_MEMBERSHIP)

export default function ClubMembershipPage() {
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <BookingModal />
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="Join the Club"
        onCtaClick={openClubMembership}
      />
      <Hero onJoinClick={openClubMembership} />
      <WhyItMatters />
      <WhatWeFind />
      <CtaSection onJoinClick={openClubMembership} />
      <SystemsCovered />
      <MaintenanceUmbrella />
      <MembershipPricing onJoinClick={openClubMembership} />
      <InspectionPoints />
      <ProtectCta />
      <Faq />
      <FinalCta />
    </main>
  )
}
