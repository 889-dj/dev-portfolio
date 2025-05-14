"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold font-mono text-teal hover:opacity-80 transition-opacity">
          {portfolioData.navbar.logo}
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {portfolioData.navbar.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-teal transition-colors font-mono text-sm"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>

        {isOpen && (
          <div className="fixed inset-0 bg-background z-50 flex flex-col p-5">
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-foreground" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
              {portfolioData.navbar.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-teal transition-colors font-mono text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggle />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
