"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Globe, Layers, Server, Workflow } from "lucide-react"

const skills = [
  {
    category: "Front-End",
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    frameworks: ["React JS", "Next JS", "Tailwindcss", "Shadcn UI"],
  },
  {
    category: "Back-End",
    icon: <Server className="h-8 w-8 text-pink-500" />,
    items: ["Python", "Django Rest Framework"],
  },
  {
    category: "Version Control",
    icon: <Code2 className="h-8 w-8 text-rose-500" />,
    items: ["Git", "GitHub"],
  },
  {
    category: "Other Tools",
    icon: <Workflow className="h-8 w-8 text-purple-500" />,
    items: ["VS Code", "Postman", "Trello", "Slack", "Jira"],
  },
  {
    category: "Hosting",
    icon: <Database className="h-8 w-8 text-pink-500" />,
    items: ["Netlify", "Vercel"],
  },
  {
    category: "Languages",
    icon: <Layers className="h-8 w-8 text-rose-500" />,
    items: ["Ewe (Native)", "English"],
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-black/5 backdrop-blur-sm" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            I&apos;m a passionate Full Stack Developer with a focus on creating beautiful, functional, and user-friendly
            web applications. With expertise in both front-end and back-end technologies, I bring ideas to life with
            clean code and modern design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-none bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {skill.frameworks && (
                      <li className="mt-4">
                        <p className="text-sm text-muted-foreground mb-2">Frameworks:</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.frameworks.map((framework, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                              {framework}
                            </span>
                          ))}
                        </div>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-500">Gaming</span>
            <span className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-500">
              Re-inventing the wheel coding challenge
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
