"use client"

import { Mail, Send } from "lucide-react"
import { motion } from "framer-motion"
import { Card3D } from "./card-3d"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
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
          Əlaqə
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-secondary mb-8 leading-relaxed">
              Sual, təklif və ya bir layihə haqqında danışmaq istəsəniz:
            </p>
            <div className="space-y-4">
              <Card3D>
                <motion.a
                  href="mailto:hello@emildost.com"
                  className="flex items-center gap-3 p-4 border border-border-subtle rounded-lg hover:border-primary transition group relative overflow-hidden"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(79,70,229,0.1) 0%, transparent 100%)",
                    }}
                  />
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <Mail className="w-5 h-5 group-hover:text-foreground transition" />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-sm text-text-tertiary">E-mail</p>
                    <p className="font-medium">hello@emildost.com</p>
                  </div>
                </motion.a>
              </Card3D>
              <Card3D>
                <motion.a
                  href="https://t.me/emildost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border-subtle rounded-lg hover:border-primary transition group relative overflow-hidden"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, transparent 100%)",
                    }}
                  />
                  <motion.div
                    whileHover={{ rotate: [0, 15, -15, 0], y: [0, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <Send className="w-5 h-5 group-hover:text-foreground transition" />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-sm text-text-tertiary">Telegram</p>
                    <p className="font-medium">@emildost</p>
                  </div>
                </motion.a>
              </Card3D>
            </div>
          </motion.div>
          <Card3D>
            <motion.div
              className="bg-bg-muted p-8 rounded-lg border border-border-subtle h-full"
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold mb-4">Tez Cevab Almaq Üçün:</h3>
              <ul className="text-sm text-text-secondary space-y-3">
                {[
                  "Telegram ən sürətli cavab yoludur",
                  "E-mailə 24 saat içində cavab verilir",
                  "Kurslar, layihələr və s. haqqında soruşa bilərsiniz",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  >
                    <span className="font-medium">→</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Card3D>
        </div>
      </div>
    </section>
  )
}
