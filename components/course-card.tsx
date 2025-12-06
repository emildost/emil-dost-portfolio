import { ExternalLink } from "lucide-react"

interface CourseCardProps {
  course: {
    name: string
    description: string
    link: string
  }
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <a
      href={course.link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 border border-border-subtle rounded-lg hover:border-primary transition group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-lg group-hover:text-foreground transition">{course.name}</h3>
        <ExternalLink className="w-5 h-5 text-text-tertiary group-hover:text-foreground transition" />
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">{course.description}</p>
    </a>
  )
}
