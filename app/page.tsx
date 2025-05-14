import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
