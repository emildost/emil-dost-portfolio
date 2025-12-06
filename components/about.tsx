"use client"

import { motion } from "framer-motion"
import { Card3D } from "./card-3d"

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-bg-muted relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Haqqımda
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-secondary leading-relaxed text-lg mb-6">
              3 ildən çoxdu bu sahədəyəm. Layihələrdə sürət, sadəlik və müştərilərin ehtiyaclarına önəm verirəm. Sahəni öyrənmək istəyənlər üçün dərslər, videolar və praktiki tapşırıqlar hazırlayıram.
            </p>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-semibold mb-2">Bilirəm:</h3>
                <ul className="text-text-secondary space-y-1">
                  {["UX Design", "UI Design", "Figma", "Adobe CC"].map((skill, i) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
          <Card3D>
            <div
              className="bg-background p-6 rounded-lg border border-border-subtle h-full"
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="font-semibold mb-4">Edirəm</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                {["Vebsyat", "Tətbiq", "Konsultasiya", "Tədris"].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  )
}
