"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "React Native Developer",
    company: "Trebnet Digitals",
    location: "Ho, Ghana",
    period: "FEB 2025",
    description:
      "As a React Native Developer at Trebnet Digitals, I have contributed to the development of cutting-edge mobile applications for our clients.",
    type: "contract",
  },
  {
    title: "React/Next JS Frontend Developer",
    company: "Atmos Technologies",
    location: "Ho, Ghana",
    period: "OCT 2023 - 2025",
    description:
      "As a Frontend Developer at Atmos Technologies, I have actively shaped our web applications' user interface and overall user experience.",
    type: "work",
  },
  {
    title: "Teaching Assistant",
    company: "Ho Technical University",
    location: "Ho, Ghana",
    period: "NOV 2022 - SEPT 2023",
    description:
      "Provided tailored tutoring and guidance to students, fostering their proficiency in Python programming. Guided individuals in developing a strong foundation in computer literacy, encompassing areas such as software utilization and digital competence.",
    type: "NSS",
  },
  {
    title: "API Developer",
    company: "Trebnet Digitals",
    location: "Ho, Ghana",
    period: "OCT 2022",
    description:
      "As an API Developer at Trebnet Digitals, I have contributed to the development of robust and scalable APIs, ensuring seamless integration and functionality for our applications.",
    type: "contract",
  },
];

const education = [
  {
    degree:
      "Bachelor of Technology in Information and Communication Technology",
    institution: "Ho Technical University",
    location: "Ho, Ghana",
    period: "SEPT 2022 - SEPT 2024",
    type: "education",
  },
  {
    degree:
      "Higher National Diploma in Information and Communication Technology",
    institution: "Ho Technical University",
    location: "Ho, Ghana",
    period: "SEPT 2019 - JUN 2022",
    type: "education",
  },
];

export default function Experience() {
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
    <section
      id="experience"
      className="py-20 bg-black/5 backdrop-blur-sm"
      ref={ref}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto text-lg">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <Briefcase className="h-6 w-6 text-purple-500" />
              Work Experience
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent"
            >
              {experiences.map((experience, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="w-3 h-3 bg-purple-500 rounded-full" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                      <Card className="border-none bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                        <CardHeader className="p-6 pb-3">
                          <div className="flex justify-between items-center flex-wrap gap-2">
                            <CardTitle className="text-lg">
                              {experience.title}
                            </CardTitle>
                            <Badge
                              variant="outline"
                              className="bg-purple-500/10 text-purple-500"
                            >
                              {experience.period}
                            </Badge>
                          </div>
                          <CardDescription>
                            {experience.company} • {experience.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 pt-0">
                          <p className="text-muted-foreground">
                            {experience.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <GraduationCap className="h-6 w-6 text-pink-500" />
              Education
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-pink-500 before:to-transparent"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="w-3 h-3 bg-pink-500 rounded-full" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                      <Card className="border-none bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                        <CardHeader className="p-6 pb-3">
                          <div className="flex justify-between items-center flex-wrap gap-2">
                            <CardTitle className="text-lg">
                              {edu.degree}
                            </CardTitle>
                            <Badge
                              variant="outline"
                              className="bg-pink-500/10 text-pink-500"
                            >
                              {edu.period}
                            </Badge>
                          </div>
                          <CardDescription>
                            {edu.institution} • {edu.location}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
