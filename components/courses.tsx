import { CourseCard } from "./course-card"

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
    <section id="courses" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Kurslarım</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <div className="p-8 rounded-lg border mt-6 px-8 bg-popover-foreground text-card border-muted-foreground">
          <h3 className="font-semibold mb-2">Medium Bloglarım</h3>
          <p className="mb-4 text-ring">Dizayn haqqında bilgilər və məqalələr</p>
          <a
            href="https://medium.com/@emildost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-medium text-card overline"
          >
            Bir bax  
          </a>
        </div>
      </div>
    </section>
  )
}
