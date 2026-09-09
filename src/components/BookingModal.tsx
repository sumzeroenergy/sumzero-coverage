"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { X, CheckCircle } from "lucide-react"
import { leadTracking } from "@/lib/utm"
import confetti from "canvas-confetti"

interface FormState {
  firstName: string
  lastName:  string
  email:     string
  phone:     string
  address:   string
  message:   string
}

const EMPTY: FormState = {
  firstName: "",
  lastName:  "",
  email:     "",
  phone:     "",
  address:   "",
  message:   "",
}

export default function BookingModal() {
  const [open,    setOpen]    = useState(false)
  const [form,    setForm]    = useState<FormState>(EMPTY)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error,   setError]   = useState("")
  const [summaryTitle, setSummaryTitle] = useState("")
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ summaryTitle: string }>
      setOpen(true)
      setSuccess(false)
      setError("")
      setForm(EMPTY)
      setSummaryTitle(ce.detail?.summaryTitle ?? "")
    }
    window.addEventListener("sumzero:open-booking", handler)
    return () => window.removeEventListener("sumzero:open-booking", handler)
  }, [])

  useEffect(() => {
    if (!success || !confettiCanvasRef.current) return
    const myConfetti = confetti.create(confettiCanvasRef.current, {
      resize: true,
      useWorker: false,
    })
    myConfetti({
      particleCount: 60,
      spread:        70,
      startVelocity: 25,
      ticks:         80,
      origin:        { x: 0.5, y: 0.55 },
      colors:        ["#96C83D", "#7aaa28", "#4FC3F7", "#1F2535"],
      gravity:       1.1,
      scalar:        0.9,
    })
  }, [success])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else      document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  function set(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/book-lead", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ ...form, summaryTitle, ...leadTracking() }),
      })
      if (!res.ok) throw new Error("failed")
      setSuccess(true)
    } catch {
      setError("Something went wrong. Please call us at (508) 965-0046.")
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    "w-full border border-[#d0d7e2] rounded-lg px-4 py-3 text-[15px] text-[#1F2535] placeholder-[#a0aab8] focus:outline-none focus:border-[#96C83D] focus:ring-2 focus:ring-[#96C83D]/20 transition-all duration-200"

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop — blurs the site behind */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#0f1520]/60 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.95, y: 20  }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl w-full max-w-[560px] max-h-[90vh] overflow-y-auto border border-[#96C83D]/60" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(150,200,61,0.15)" }}>

              {/* Header — dark with teaser logo */}
              <div className="relative bg-[#0f1520] rounded-t-2xl flex flex-col items-center justify-center px-7 py-8">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
                <Image
                  src="/assets/club-membership/teaser-title.png"
                  alt="SumZero Club Membership"
                  width={320}
                  height={107}
                  className="h-auto w-auto max-w-[280px] object-contain"
                />
                <p className="text-[14px] text-white/50 mt-3">
                  We'll reach out to schedule your first inspection.
                </p>
              </div>

              {/* Body */}
              <div className="p-7">
                {success ? (
                  <div className="relative overflow-hidden flex flex-col items-center text-center py-10 gap-5">
                    <canvas
                      ref={confettiCanvasRef}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                    />
                    <div className="relative z-10 w-24 h-24 rounded-full bg-[#eef6db] flex items-center justify-center">
                      <CheckCircle size={56} className="text-[#96C83D]" />
                    </div>
                    <h3 className="relative z-10 text-xl font-black text-[#1F2535]">You're on the list.</h3>
                    <p className="relative z-10 text-[15px] text-[#5a6a7e] max-w-[360px]">
                      We received your request and will call you shortly to confirm your
                      first inspection. Welcome to the Comfort Club.
                    </p>
                    <button
                      onClick={() => setOpen(false)}
                      className="relative z-10 mt-2 bg-[#96C83D] hover:bg-[#7aaa28] text-white font-bold px-8 py-3 rounded-lg transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold text-[#1F2535] mb-1.5">
                          First name <span className="text-[#96C83D]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John"
                          value={form.firstName}
                          onChange={(e) => set("firstName", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#1F2535] mb-1.5">
                          Last name <span className="text-[#96C83D]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Smith"
                          value={form.lastName}
                          onChange={(e) => set("lastName", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#1F2535] mb-1.5">
                        Email <span className="text-[#96C83D]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#1F2535] mb-1.5">
                        Phone <span className="text-[#96C83D]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(508) 000-0000"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#1F2535] mb-1.5">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="123 Main St, Holliston, MA"
                        value={form.address}
                        onChange={(e) => set("address", e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-[#1F2535] mb-1.5">
                        Message <span className="text-[#5a6a7e] font-normal">(optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your system or any questions..."
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {error && (
                      <p className="text-[13px] text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#96C83D] hover:bg-[#7aaa28] disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#96C83D]/30 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide cursor-pointer mt-1"
                    >
                      {loading ? "Sending…" : "Yes, I'd Like to Learn More"}
                    </button>

                    <p className="text-[12px] text-[#5a6a7e] text-center">
                      No commitment, no charge today · We'll learn about your home and recommend the right plan for you.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
