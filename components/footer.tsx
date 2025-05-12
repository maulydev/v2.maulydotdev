"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <h2 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
              Mauly dotDev
            </h2>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer based in Ho, Ghana
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-500/10 hover:text-purple-500 transition-colors"
              asChild
            >
              <a
                href="https://github.com/maulydev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-500/10 hover:text-purple-500 transition-colors"
              asChild
            >
              <a
                href="https://linkedin.com/in/maulydotdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-500/10 hover:text-purple-500 transition-colors"
              asChild
            >
              <a
                href="https://twitter.com/maulydotdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-500/10 hover:text-purple-500 transition-colors"
              asChild
            >
              <a href="mailto:mauly.dev@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Mauly dotDev. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
