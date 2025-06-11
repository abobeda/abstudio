"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white font-mono text-sm leading-relaxed">
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Image src="/AB-Logo25.jpg" alt="AB Studio Logo" width={32} height={32} className="rounded" />
            <span className="font-medium">Alexandre Bobeda</span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 hover:text-[#d97757]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 md:hidden">
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <div className="text-gray-600 space-y-1">
                <p>Visual Designer</p>
                <p>Writer</p>
                <p>Founder of Recipfy</p>
                <p>Design-Dev-Writer</p>
                <p>Author</p>
                <p>Rio de Janeiro, Brazil</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <Link
                href="https://x.com/alexandrebobeda"
                className="flex items-center gap-2 text-[#d97757] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                X <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alexandrebobeda/"
                className="flex items-center gap-2 text-[#d97757] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.instagram.com/alexandrebobeda/"
                className="flex items-center gap-2 text-[#d97757] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Instagram <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.behance.net/alexandrebobeda/"
                className="flex items-center gap-2 text-[#d97757] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Behance <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <aside className="hidden md:block w-64 min-h-screen p-6 border-r border-gray-200 fixed left-0 top-0">
          <div className="space-y-6">
            {/* Logo */}
            <div className="w-12 h-12">
              <Image src="/AB-Logo25.jpg" alt="AB Studio Logo" width={48} height={48} className="rounded" />
            </div>

            {/* Name and title */}
            <div className="space-y-2">
              <h1 className="font-medium">Alexandre Bobeda</h1>
              <div className="text-gray-600 space-y-1">
                <p>Visual Designer</p>
                <p>Writer</p>
                <p>Founder of Recipfy</p>
                <p>Design-Dev-Writer</p>
                <p>Author</p>
                <p>Rio de Janeiro, Brazil</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <Link
                href="https://x.com/alexandrebobeda"
                className="flex items-center gap-2 text-[#d97757] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alexandrebobeda/"
                className="flex items-center gap-2 text-[#d97757] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.instagram.com/alexandrebobeda/"
                className="flex items-center gap-2 text-[#d97757] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.behance.net/alexandrebobeda/"
                className="flex items-center gap-2 text-[#d97757] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content - Adjusted for mobile */}
        <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-4xl mt-16 md:mt-0">
          <div className="space-y-6 md:space-y-8">
            {/* Greeting */}
            <h2 className="text-[#d97757] text-lg">Hi there!</h2>

            {/* Main Bio */}
            <div className="space-y-4 md:space-y-6 text-gray-800">
              <p>
                I'm Alexandre Bobeda, the creator of{" "}
                <Link href="https://www.userecipfy.com/" className="text-[#d97757] hover:underline">
                  Recipfy
                </Link>
                , my first bootstrapped app, and a visual and graphic designer who bridges creativity with code.
              </p>

              <p>
                I thrive ✨ at the intersection of design, writing, and development, but I've also crafted visual
                identities and digital experiences for major Brazilian companies like{" "}
                <Link href="https://www.cloudwalk.io/" className="text-[#d97757] hover:underline">
                  CloudWalk
                </Link>
                ,{" "}
                <Link href="https://petrobras.com.br/" className="text-[#d97757] hover:underline">
                  Petrobras
                </Link>
                ,{" "}
                <Link href="https://vale.com/" className="text-[#d97757] hover:underline">
                  Vale
                </Link>
                , and{" "}
                <Link href="https://www.ambev.com.br/" className="text-[#d97757] hover:underline">
                  Ambev
                </Link>
                .
              </p>

              <p>
                During the web3 craze, I created NFTs that sold on major markets like{" "}
                <Link href="https://www.niftygateway.com/" className="text-[#d97757] hover:underline">
                  NiftyGateway
                </Link>{" "}
                and{" "}
                <Link href="https://knownorigin.io/" className="text-[#d97757] hover:underline">
                  KnownOrigin
                </Link>
                , in addition to having my work showcased at NFT Paris 2023. I've also released Tecmo, a brutalist pixel
                typeface inspired by old bitmap fonts from the '80s, and authored several books published worldwide on
                Apple iBooks, Amazon, and Kobo Rakuten.
              </p>

              <p>I live in Rio de Janeiro, Brazil.</p>
            </div>

            <hr className="border-gray-300" />

            {/* Let's Hang Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{"Let's Connect"}</h3>
              <p className="text-gray-800">
                <Link
                  href="mailto:hello@alexbobeda.com?subject=Let's%20work%20together!"
                  className="text-[#d97757] hover:underline"
                >
                  Reach me out
                </Link>{" "}
                if you're interested in working together.
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-xs">© 2025 Alexandre Bobeda / AB Studio</p>
          </footer>
        </main>
      </div>
    </div>
  )
}
