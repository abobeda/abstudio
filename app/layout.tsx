import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alexandre Bobeda / AB Studio",
  description: "Visual Designer + Writer + Coder",
  generator: "v0.dev",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/AB-Logo25.jpg",
    shortcut: "/AB-Logo25.jpg",
    apple: "/AB-Logo25.jpg",
  },
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
