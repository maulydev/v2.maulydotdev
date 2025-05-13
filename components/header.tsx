"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/projects", label: "Showroom" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-rose-500/50 shadow-lg sticky top-0 z-50 backdrop-blur">
      <nav className="container mx-auto px-6 md:px-4 py-4 flex justify-between items-center">
        {/* Site Title */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">Mauly dotDev</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Button asChild variant="ghost" className="hover:bg-pink-500/30">
                <Link
                  href={item.href}
                  className="text-white text-lg hover:text-gray-200 transition-colors"
                >
                  {item.label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="text-white" size={32} />
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-rose-500/50"
            >
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button asChild variant="ghost" key={item.href} className="hover:bg-pink-500/30">
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-200 transition-colors text-xl"
                    >
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
