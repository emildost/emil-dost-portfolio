"use client"

import { ExternalLink } from "lucide-react"
import { Card3D } from "./card-3d"

interface CourseCardProps {
  course: {
    name: string
    description: string
    link: string
  }
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card3D>
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 border border-border-subtle rounded-lg hover:border-primary transition group relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(139,92,246,0.1) 100%)",
          }}
        />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg group-hover:text-foreground transition">{course.name}</h3>
            <ExternalLink className="w-5 h-5 text-text-tertiary group-hover:text-foreground transition group-hover:rotate-45 duration-300" />
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">{course.description}</p>
        </div>
      </a>
    </Card3D>
  )
}
