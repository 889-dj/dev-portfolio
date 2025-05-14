"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Twitter } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    isSubmitting: false,
    isSubmitted: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, isSubmitting: true }))

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormState({
      name: "",
      email: "",
      message: "",
      isSubmitting: false,
      isSubmitted: true,
    })

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
  }

  const SocialIcon = ({ platform }: { platform: string }) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal">#</span> {portfolioData.contact.title}
        </motion.h2>

        <motion.p
          className="text-center text-white/70 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {portfolioData.contact.description}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-mono text-xl mb-4 text-teal">Contact Info</h3>
              <p className="font-mono text-foreground/70 mb-2">
                <span className="text-teal">$</span> echo $EMAIL
              </p>
              <p className="font-mono mb-6">{portfolioData.contact.email}</p>

              <p className="font-mono text-foreground/70 mb-2">
                <span className="text-teal">$</span> ls social_links
              </p>
              <div className="flex gap-4">
                {portfolioData.contact.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-lg hover:border-teal/50 hover:text-teal transition-colors"
                    aria-label={social.platform}
                  >
                    <SocialIcon platform={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="font-mono text-sm text-white/70">
                  <span className="text-teal">$</span> input --name
                </div>
                <Input
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  className="bg-card/30 border-border focus:border-teal"
                />
              </div>

              <div className="space-y-2">
                <div className="font-mono text-sm text-white/70">
                  <span className="text-teal">$</span> input --email
                </div>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className="bg-card/30 border-border focus:border-teal"
                />
              </div>

              <div className="space-y-2">
                <div className="font-mono text-sm text-white/70">
                  <span className="text-teal">$</span> input --message
                </div>
                <Textarea
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  required
                  className="bg-card/30 border-border focus:border-teal min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                disabled={formState.isSubmitting}
                className="w-full bg-teal text-charcoal hover:bg-teal/80 font-mono"
              >
                {formState.isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <span className="mr-2">Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
