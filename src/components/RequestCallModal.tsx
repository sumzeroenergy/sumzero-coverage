"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, CheckCircle } from "lucide-react"
import confetti from "canvas-confetti"

interface FormState {
  firstName: string
  lastName:  string
  phone:     string
}

const EMPTY: FormState = { firstName: "", lastName: "", phone: "" }

export function openRequestCallModal(summaryTitle: string) {
  window.dispatchEvent(new CustomEvent("sumzero:open-request-call", { detail: { summaryTitle } }))
}

export default function RequestCallModal() {
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
    window.addEventListener("sumzero:open-request-call", handler)
    return () => window.removeEventListener("sumzero:open-request-call", handler)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else      document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

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
        body:    JSON.stringify({ ...form, summaryTitle }),
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#0f1520]/60 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.95, y: 20  }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="bg-white rounded-2xl w-full max-w-[460px] overflow-hidden border border-[#96C83D]/60"
              style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(150,200,61,0.15)" }}
            >
              {/* Header */}
              <div className="relative bg-[#0f1520] flex items-center justify-between px-7 py-6 flex-shrink-0">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#96C83D] mb-0.5">
                    Extended Labor Warranty
                  </p>
                  <h2 className="text-lg font-black text-white">Request a Call</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
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
                    <h3 className="relative z-10 text-xl font-black text-[#1F2535]">Got it.</h3>
                    <p className="relative z-10 text-[15px] text-[#5a6a7e] max-w-[320px]">
                      We received your call request. A SumZero team member will be in touch.
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
                    <p className="text-[14px] text-[#5a6a7e] mb-1">
                      Leave your name and number — we'll call you back within one business day.
                    </p>

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
                      {loading ? "Sending…" : "Request Call Back"}
                    </button>

                    <p className="text-[12px] text-[#5a6a7e] text-center">
                      Mon – Fri, 8am – 5pm · (508) 965-0046
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
