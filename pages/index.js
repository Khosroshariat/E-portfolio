
import { Inter } from '@next/font/google'

import Hero from '@/components/main/Hero'
import About from '@/components/main/About'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import Contact from '@/components/main/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="h-full w-full">
      <div className="flex flex-col h-svh gap-20">
        <section>
        <Hero />
        </section>
        <section id="aboutme">
        <About />
        </section>
        <section id="skills">
        <Skills />
        </section>
        <section id="projects" >
        <Projects />
        </section>
        <section id="contact">
        <Contact />
        </section>
      </div>
      
    </main>
    </>
  )
}
