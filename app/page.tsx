import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Courses } from "@/components/courses"
import { Social } from "@/components/social"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Courses />
      <Social />
      <Contact />
      <Footer />
    </main>
  )
}
