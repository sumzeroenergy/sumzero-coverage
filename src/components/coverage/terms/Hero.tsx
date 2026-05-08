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
                src="/assets/protect/protect-title-logo.png"
                alt="SumZero PROTECT+"
                width={520}
                height={173}
                className="w-auto h-auto max-w-[280px]"
                priority
              />
            </div>

            {/* Label */}
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#96C83D] mb-2">
              Extended Limited Labor Warranty
            </p>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-black uppercase leading-tight tracking-tight text-white mb-3">
              Terms &amp; Conditions
            </h1>

            {/* Obligor line */}
            <p className="text-[14px] text-white/50">
              <span className="font-bold text-white/70">Obligor:</span> SumZero Energy Systems
              <span className="mx-3 text-white/20">|</span>
              <span className="font-bold text-white/70">Administrator:</span> Magellan Service Corporation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb bar */}
      <div className="bg-[#96C83D]">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-1.5 py-3 text-[13px]">
            <span className="text-[#0f1520]/60 font-medium cursor-default">
              SumZero Worry Promise
            </span>
            <ChevronRight size={13} className="text-[#0f1520]/40" />
            <Link
              href="/coverage/protect/welcome"
              className="text-[#0f1520] hover:text-white transition-colors duration-200 font-semibold cursor-pointer"
            >
              PROTECT+
            </Link>
            <ChevronRight size={13} className="text-[#0f1520]/40" />
            <span className="text-[#0f1520]/70 font-medium">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </>
  )
}
