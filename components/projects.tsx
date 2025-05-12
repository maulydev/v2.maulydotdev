"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Movr",
    description:
      "A fullstack movie sharing platform for movie lovers, where users can share their favourite movies for other users to watch.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2024",
    link: "https://movr.vercel.app",
    github: "https://github.com/maulydev/movr",
    tags: ["Next JS", "Tailwind CSS"],
  },
  {
    title: "GhostTalk",
    description:
      "A fullstack web app allows a user to share his/her profile link and receive honest feedback from friends and family without revealing their identity.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2023",
    link: "https://ghosttalk.netlify.app",
    github: "https://github.com/maulydev/ghosttalk",
    tags: ["React JS", "Django Rest Framework", "Tailwind CSS"],
  },
  {
    title: "Gospel Corner",
    description:
      "A blog website for sharing the gospel and inspirational messages.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2023",
    link: "https://gospelcorner.vercel.app",
    github: "https://github.com/maulydev/gospel-corner",
    tags: ["React JS", "Django Rest Framework", "Tailwind CSS"],
  },
  {
    title: "Open Shortener",
    description:
      "A fullstack open URL Shortener. It provides a simple and efficient way to shorten long URLs, making them easier to share and manage.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2023",
    link: "https://opsh.vercel.app",
    github: "https://github.com/maulydev/open-shortener",
    tags: ["Next JS", "Tailwind CSS"],
  },
  {
    title: "SimpliDB",
    description: "A python package to simplify sqlite3 database operations.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2022",
    link: "https://pypi.org/project/simplidb/",
    github: "https://github.com/maulydev/simplidb",
    tags: ["Python", "SQLite3"],
  },
  {
    title: "GitBoard",
    description: "GitHub profile in colors.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2022",
    link: "https://gitboard-one.vercel.app",
    github: "https://github.com/maulydev/gitboard",
    tags: ["Next JS", "GitHub API", "Tailwind CSS"],
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            Here are some of the projects I&apos;ve worked on. Each project
            represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <Card className="h-full overflow-hidden border-none bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Badge
                      variant="outline"
                      className="bg-black/50 backdrop-blur-sm"
                    >
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-sm -z-10"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
