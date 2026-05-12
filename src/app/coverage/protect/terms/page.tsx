"use client"

import { useRouter } from "next/navigation"
import Header from "@/components/layout/Header"
import Hero from "@/components/coverage/terms/Hero"
import TermsContent from "@/components/coverage/terms/TermsContent"

const NAV_LINKS: { label: string; href: string }[] = []

export default function ProtectTermsPage() {
  const router = useRouter()
  return (
    <main className="min-h-screen bg-[#0f1520]">
      <Header
        navLinks={NAV_LINKS}
        ctaLabel="SumZero PROTECT+"
        onCtaClick={() => router.push("/coverage")}
      />
      <Hero />
      <TermsContent />
    </main>
  )
}
