"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"
import StaggeredText from "@/components/react-bits/staggered-text"

export default function ProtectCta() {
  return (
    <>
      {/* Geometric divider — grey (#f1f3f6) to dark (#0f1520) */}
      <div className="w-full bg-[#f1f3f6] leading-[0]">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-18 block"
          fill="#0f1520"
        >
          <polygon points="0,72 1440,0 1440,72" />
        </svg>
      </div>

      <section className="relative bg-[#0f1520] overflow-hidden py-28">

        {/* Background — van photo, soft radial fade from edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/club-membership/Electric_service_van_in_driveway.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.13,
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
          }}
        />

        <div className="relative max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — content */}
            <div>
              <motion.p
                initial={{ opacity: 0, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-base font-bold tracking-wide uppercase text-[#96C83D] mb-5"
              >
                Also from SumZero
              </motion.p>

              {/* Teaser title image */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6"
              >
                <Image
                  src="/assets/club-membership/teaser-title-protect.png"
                  alt="SumZero PROTECT"
                  width={400}
                  height={120}
                  className="h-auto w-auto max-w-[360px] object-contain"
                />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-8">
                <StaggeredText
                  as="div"
                  text="Want coverage if"
                  segmentBy="words"
                  direction="bottom"
                  blur={true}
                  delay={70}
                  duration={0.6}
                  easing={[0.22, 1, 0.36, 1] as never}
                  className="text-white"
                />
                <StaggeredText
                  as="div"
                  text="something breaks anyway?"
                  segmentBy="words"
                  direction="bottom"
                  blur={true}
                  delay={70}
                  duration={0.6}
                  easing={[0.22, 1, 0.36, 1] as never}
                  className="text-white"
                />
              </h2>

              <motion.p
                initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[17px] leading-relaxed text-white/60 mb-10"
              >
                SumZero PROTECT is a separate extended labor warranty — 5 or 10 years of covered
                labor on eligible equipment failures. Comfort Club keeps your systems inspected.
                PROTECT is a financial backstop if something fails regardless. Two different
                products, two different purposes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href="/coverage"
                  className="inline-flex items-center gap-3 bg-[#96C83D] hover:bg-[#7aaa28] text-white font-black text-[15px] tracking-wide uppercase px-10 py-4 rounded-lg transition-all duration-200 hover:shadow-[0_0_32px_rgba(150,200,61,0.45)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  Learn about PROTECT
                  <ExternalLink size={17} className="transition-transform duration-200 group-hover:scale-110" />
                </a>
              </motion.div>
            </div>

            {/* Right — PROTECT logo */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center lg:justify-end"
            >
              <Image
                src="/assets/club-membership/Logo-Sumzero-Protect-Plus.png"
                alt="SumZero Protect Plus"
                width={420}
                height={420}
                className="w-full max-w-[380px] h-auto object-contain"
              />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
