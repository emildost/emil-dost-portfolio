"use client"

import { useState, useEffect } from "react"

export function Footer() {
  const [time, setTime] = useState<string>("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("az-AZ", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Baku",
      })
      setTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="border-t border-border-subtle py-8 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary">
          <div className="flex flex-col gap-1">
            
            <p className="text-xs">Heç bir hüquq qorunmur. Çünki, dünya belə bir yerdi.</p>
          </div>
          <p>Saytı özüm elədim (v0 ilə) </p>
        </div>
      </div>
    </footer>
  )
}
