// "use client";

// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Menu } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// const Header = () => {
//   const navItems = [
//     { href: "/#about", label: "About" },
//     { href: "/#projects", label: "Projects" },
//     { href: "/projects", label: "Showroom" },
//     { href: "/#contact", label: "Contact" },
//   ];

//   return (
//     <header className="bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-rose-500/50 shadow-lg sticky top-0 z-50 backdrop-blur">
//       <nav className="container mx-auto px-6 md:px-4 py-4 flex justify-between items-center">
//         {/* Site Title */}
//         <div className="text-white text-2xl font-bold">
//           <Link href="/">Mauly dotDev</Link>
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-4">
//           {navItems.map((item) => (
//             <li key={item.href}>
//               <Button asChild variant="ghost" className="hover:bg-pink-500/30">
//                 <Link
//                   href={item.href}
//                   className="text-white text-lg hover:text-gray-200 transition-colors"
//                 >
//                   {item.label}
//                 </Link>
//               </Button>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Nav */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Menu className="text-white" size={32} />
//             </SheetTrigger>
//             <SheetContent
//               side="bottom"
//               className="bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-rose-500/50"
//             >
//               <div className="flex flex-col space-y-4 mt-8">
//                 {navItems.map((item) => (
//                   <Button asChild variant="ghost" key={item.href} className="hover:bg-pink-500/30">
//                     <Link
//                       href={item.href}
//                       className="text-white hover:text-gray-200 transition-colors text-xl"
//                     >
//                       {item.label}
//                     </Link>
//                   </Button>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = navLinks.map((link) => link.href.replace("#", "")).filter(Boolean)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setSheetOpen(false)

    // If it's a hash link, handle smooth scrolling
    if (href.startsWith("#")) {
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link
          href="#"
          className="text-xl md:text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
          onClick={() => handleNavClick("#")}
        >
          Mauly dotDev
        </Link>

        {isDesktop ? (
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "") || (link.href === "#" && activeSection === "")

              return (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  className={`relative px-4 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Button>
              )
            })}
            <Button
              className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              size="sm"
              onClick={() => handleNavClick("#contact")}
            >
              Hire Me
            </Button>
          </nav>
        ) : (
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px] bg-background/95 backdrop-blur-lg border-l border-white/10"
            >
              <div className="flex flex-col h-full">
                {/* <div className="flex justify-end mb-6">
                  <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div> */}
                <nav className="flex flex-col space-y-4 mt-8">
                  <AnimatePresence>
                    {navLinks.map((link) => {
                      const isActive =
                        activeSection === link.href.replace("#", "") || (link.href === "#" && activeSection === "")

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            variant="ghost"
                            size="lg"
                            className={`w-full justify-start ${
                              isActive ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground"
                            }`}
                            onClick={() => handleNavClick(link.href)}
                          >
                            {link.label}
                          </Button>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                </nav>
                <div className="mt-auto pt-6">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    onClick={() => handleNavClick("#contact")}
                  >
                    Hire Me
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </motion.header>
  )
}
