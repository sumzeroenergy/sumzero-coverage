"use client"

import { useEffect } from "react"
import { capturaUtm } from "@/lib/utm"

export default function UtmCapture() {
  useEffect(() => {
    capturaUtm()
  }, [])
  return null
}
