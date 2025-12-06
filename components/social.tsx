"use client"

import { BsInstagram, BsLinkedin, BsYoutube, BsBehance } from "react-icons/bs"
import { motion } from "framer-motion"
import { Card3D } from "./card-3d"

export function Social() {
  const socials = [
    {
      platform: "Instagram",
      url: "https://instagram.com/emilldost",
      icon: BsInstagram,
      color: "rgba(225, 48, 108, 0.2)",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/emildost",
      icon: BsLinkedin,
      color: "rgba(10, 102, 194, 0.2)",
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@emildost",
      icon: BsYoutube,
      color: "rgba(255, 0, 0, 0.2)",
    },
    {
      platform: "Behance",
      url: "https://behance.net/emildost",
      icon: BsBehance,
      color: "rgba(0, 87, 255, 0.2)",
    },
  ]

  return (
    <section className="py-20 px-6 bg-bg-muted relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sosialda mən
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <Card3D key={social.platform} className="h-full">
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border-subtle rounded-lg hover:border-primary transition flex flex-col items-center gap-2 bg-card py-6 h-full relative overflow-hidden group"
                  style={{
                    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${social.color} 0%, transparent 100%)`,
                    }}
                  />
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <span className="text-sm font-medium relative z-10">{social.platform}</span>
                </motion.a>
              </Card3D>
            )
          })}
        </div>
      </div>
    </section>
  )
}
