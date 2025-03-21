import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creative Developer Portfolio",
  description: "A portfolio showcasing creative development work",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}



import './globals.css'