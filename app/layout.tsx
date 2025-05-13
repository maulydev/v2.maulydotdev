import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Full Stack Developer",
  description:
    "Portfolio of Ernest Kumashie, a Full Stack Developer specializing in React, Next.js, and Django",
  keywords: [
    "React",
    "Next.js",
    "Django",
    "Python",
    "JavaScript",
    "Tailwind CSS",
    "Full Stack Developer",
    "Portfolio",
    "Ernest Kumashie",
    "Ho, Ghana",
    "Ghana",
    "Full Stack Developer in Ho, Ghana",
  ],
  creator: "Ernest Kumashie",
  publisher: "Ernest Kumashie",
  applicationName: "Ernest Kumashie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
