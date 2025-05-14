"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { portfolioData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal">#</span> {portfolioData.about.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden border-2 border-teal">
              <Image
                src={portfolioData.about.image || "/placeholder.svg"}
                alt="Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-teal/10"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-foreground/80 leading-relaxed">{portfolioData.about.bio}</p>

            <div className="space-y-4">
              <h3 className="text-xl font-mono font-semibold text-teal">Skills</h3>
              <div className="space-y-3">
                {portfolioData.about.skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-mono mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-charcoal border border-teal/50 text-white hover:bg-teal/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-mono font-semibold text-teal">Experience</h3>
              <div className="space-y-4">
                {portfolioData.about.experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-teal/30 pl-4 py-1">
                    <h4 className="font-mono font-medium">
                      {job.position} <span className="text-teal">@</span> {job.company}
                    </h4>
                    <p className="text-sm text-foreground/60 font-mono">{job.period}</p>
                    <p className="text-foreground/80 mt-1">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
