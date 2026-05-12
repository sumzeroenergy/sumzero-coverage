"use client"

import { useRouter } from "next/navigation"
import Header from "@/components/layout/Header"
import Hero from "@/components/club-membership/terms/Hero"
import TermsContent from "@/components/club-membership/terms/TermsContent"

const NAV_LINKS: { label: string; href: string }[] = []

export default function ClubMembershipTermsPage() {
  const router = useRouter()
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="Learn about the Club"
        onCtaClick={() => router.push("/club-membership")}
      />
      <Hero />
      <TermsContent />
    </main>
  )
}
