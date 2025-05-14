"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = portfolioData.hero.title

  useEffect(() => {
    let currentIndex = 0
    let interval: NodeJS.Timeout

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }

    interval = setInterval(typeText, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(cursorInterval)
    }
  }, [fullText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-teal font-mono text-lg">{portfolioData.hero.greeting}</p>
          <h1 className="text-4xl md:text-6xl font-bold font-mono">{portfolioData.hero.name}</h1>
          <div className="h-12 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl text-foreground/80 font-mono">
              {text}
              <span className={`text-teal ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
            </h2>
          </div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">{portfolioData.hero.description}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {portfolioData.hero.cta.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={button.primary ? "default" : "outline"}
                className={
                  button.primary ? "bg-teal text-charcoal hover:bg-teal/80" : "border-teal text-teal hover:bg-teal/10"
                }
              >
                <Link href={button.href}>{button.text}</Link>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
