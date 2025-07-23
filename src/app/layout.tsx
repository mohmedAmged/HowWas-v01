// File: app/layout.tsx

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// SEO Metadata
export const metadata: Metadata = {
  title: "Howwaz – The Global Trust Platform",
  description: "Build and measure business trust, powered by EchoScore.",
}

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#0f0f0f] text-white font-sans">
        {children}
      </body>
    </html>
  )
}
