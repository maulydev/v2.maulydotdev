import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 pb-8">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
