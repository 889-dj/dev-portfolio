"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background/50 dark:bg-charcoal/50">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal">#</span> Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Card className="overflow-hidden bg-card border border-border transition-all duration-300 hover:border-teal/50 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div
            className={`absolute inset-0 bg-teal/10 transition-opacity duration-300 ${isHovered ? "opacity-60" : "opacity-0"}`}
          ></div>

          <div
            className={`absolute top-0 right-0 p-3 flex gap-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            {project.links.map((link: any, i: number) => (
              <Link
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 dark:bg-charcoal/80 text-foreground hover:text-teal p-2 rounded-full transition-colors"
              >
                {link.type === "github" ? <Github className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}
              </Link>
            ))}
          </div>
        </div>

        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold font-mono mb-2 text-foreground group-hover:text-teal transition-colors">
            {project.title}
          </h3>
          <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag: string, i: number) => (
              <Badge key={i} variant="outline" className="bg-transparent border-teal/30 text-foreground/70 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
