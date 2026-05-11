"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Phone } from "lucide-react"

const PHONE      = "(508) 965-0046"
const PHONE_HREF = "tel:+15089650046"

interface CtaSectionProps {
  onJoinClick: () => void
}

export default function CtaSection({ onJoinClick }: CtaSectionProps) {
  return (
    <>
      {/* Geometric divider — white to dark */}
      <div className="w-full bg-white leading-[0] pt-24">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-18 block"
          fill="#0f1520"
        >
          <polygon points="0,72 1440,0 1440,72" />
        </svg>
      </div>

      <section className="relative bg-[#0f1520] overflow-visible pb-0">

        {/* Same tiled bg-logo pattern as hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/club-membership/bg-logo.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "320px",
            opacity: 0.055,
            maskImage: "radial-gradient(ellipse 80% 60% at 40% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 40% 50%, black 0%, transparent 100%)",
          }}
        />

        <div className="relative max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">

            {/* Left — content controls section height */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="py-14"
            >
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-6">
                $99 gets a trained technician in your home.{" "}
                <span className="text-[#96C83D]">That's the whole product.</span>
              </h2>

              <p className="text-[17px] leading-relaxed text-white/60 max-w-[480px] mb-10">
                No pressure. They inspect, document, and tell you what they found.
                You decide what happens next.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <button
                  onClick={onJoinClick}
                  className="bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold px-10 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide cursor-pointer"
                >
                  Join Comfort Club
                </button>

                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-white/60 hover:text-white font-semibold text-[17px] transition-colors duration-200 cursor-pointer"
                >
                  <Phone size={16} className="text-[#96C83D]" />
                  {PHONE}
                </a>
              </div>
            </motion.div>

            {/* Right — absolutely positioned so it doesn't affect section height */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block absolute right-0 bottom-0 overflow-hidden"
              style={{ right: "-4rem" }}
            >
              <Image
                src="/assets/club-membership/Dan Club Membership.png"
                alt="Dan — SumZero Service Leader Technician"
                width={600}
                height={780}
                className="h-[720px] w-auto object-contain object-right-bottom"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
                style={{ background: "linear-gradient(to top, #0f1520 0%, transparent 100%)" }}
              />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
