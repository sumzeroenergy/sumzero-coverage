"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <>
      {/* Compact hero */}
      <section className="relative bg-[#0f1520] pt-40 pb-10">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/assets/club-membership/teaser-title.png"
                alt="SumZero Club Membership"
                width={520}
                height={173}
                className="w-auto h-auto max-w-[280px]"
                priority
              />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-black uppercase leading-tight tracking-tight text-white mb-2">
              Terms &amp; Conditions
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] text-white/40 font-medium">
              SumZero Energy Systems LLC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb bar */}
      <div className="bg-[#96C83D]">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-1.5 py-3 text-[13px]">
            <Link
              href="/club-membership"
              className="text-[#0f1520] hover:text-white transition-colors duration-200 font-semibold cursor-pointer"
            >
              Club Membership
            </Link>
            <ChevronRight size={13} className="text-[#0f1520]/50" />
            <span className="text-[#0f1520]/70 font-medium">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </>
  )
}
