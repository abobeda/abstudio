import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alexandre Bobeda / AB Studio",
  description: "Visual Designer + Creative Coder",
  icons: {
    icon: "/AB-Logo25.jpg",
    shortcut: "/AB-Logo25.jpg",
    apple: "/AB-Logo25.jpg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
