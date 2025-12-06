"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="pt-32 pb-20 px-6 perspective-1000">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <motion.h1
              className="text-5xl font-bold leading-tight mb-4 md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                textShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              {"UX/UI Dizayner və Təlimçi"}
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Dizayner. Sadə həllər yaratmağı sevən biri.
            </motion.p>
            <motion.p
              className="text-sm italic mb-8 p-4 border-l-2 border-border-subtle text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                backdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              Hər şey istifadəçidən başlayır
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#courses"
                className="px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-80 transition rounded-2xl relative overflow-hidden"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transform: "translateZ(20px)",
                }}
              >
                Kurslara bax
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border border-primary rounded hover:bg-bg-muted transition rounded-2xl"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  transform: "translateZ(20px)",
                }}
              >
                Əlaqə Saxla
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <motion.div
              className="w-full aspect-square bg-bg-muted rounded-4xl flex items-center justify-center relative"
              style={{
                boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
                transform: "translateZ(50px)",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/images/20250930-152026.jpg"
                alt="Emil Dost"
                className="w-full h-full object-cover rounded-4xl"
                style={{
                  filter: "contrast(1.1) brightness(1.05)",
                }}
              />
              <div
                className="absolute inset-0 rounded-4xl"
                style={{
                  background: "linear-gradient(135deg, rgba(79,70,229,0.2) 0%, rgba(139,92,246,0.2) 100%)",
                  mixBlendMode: "overlay",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
