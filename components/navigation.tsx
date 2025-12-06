"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
        background: scrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0.6)",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Emil Dost
        </motion.a>
        <div className="flex gap-8">
          {[
            { href: "#about", label: "Haqqımda" },
            { href: "#courses", label: "Kurs" },
            { href: "#contact", label: "Əlaqə" },
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm hover:opacity-60 transition relative"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
