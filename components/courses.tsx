"use client"

import { CourseCard } from "./course-card"
import { motion } from "framer-motion"
import { Card3D } from "./card-3d"

export function Courses() {
  const courses = [
    {
      name: "Atomic UX/UI Design",
      description: "Yeni başlayanlar üçün real praktikaya əsaslanan və atomik UX/UI kursu",
      link: "https://t.me/emildost",
    },
    {
      name: "Figma Fast Design",
      description: "Sürətli öyrənmə üçün Figma təlimi",
      link: "https://t.me/emildost",
    },
  ]

  return (
    <section id="courses" className="py-20 px-6 relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
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
          Kurslarım
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <Card3D className="mt-6">
          <motion.div
            className="p-8 rounded-lg border px-8 bg-popover-foreground text-card border-muted-foreground relative overflow-hidden"
            style={{
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-2">Medium Bloglarım</h3>
            <p className="mb-4 text-ring">Dizayn haqqında bilgilər və məqalələr</p>
            <motion.a
              href="https://medium.com/@emildost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-medium text-card overline inline-block"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              Bir bax
            </motion.a>
          </motion.div>
        </Card3D>
      </div>
    </section>
  )
}
