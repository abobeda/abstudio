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
            <span className="font-bold">Alexandre Bobeda</span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 hover:text-[#5B8A87]"
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
                <p>Product Designer</p>
                <p>Creative coder</p>
                <p>Writer</p>
                <p>Design × software × art × AI</p>
                <p>Rio de Janeiro, Brazil</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <Link
                href="https://x.com/alexandrebobeda"
                className="flex items-center gap-2 text-[#5B8A87] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                X <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.instagram.com/alexandrebobeda"
                className="flex items-center gap-2 text-[#5B8A87] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Instagram <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alexandrebobeda/"
                className="flex items-center gap-2 text-[#5B8A87] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.behance.net/alexandrebobeda/"
                className="flex items-center gap-2 text-[#5B8A87] hover:underline"
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
              <h1 className="font-bold">Alexandre Bobeda</h1>
              <div className="text-gray-600 space-y-1">
                <p>Visual Designer</p>
                <p>Product Designer</p>
                <p>Creative coder</p>
                <p>Writer</p>
                <p>Design × software × art × AI</p>
                <p>Rio de Janeiro, Brazil</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <Link
                href="https://x.com/alexandrebobeda"
                className="flex items-center gap-2 text-[#5B8A87] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.instagram.com/alexandrebobeda/"
                className="flex items-center gap-2 text-[#5B8A87] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alexandrebobeda/"
                className="flex items-center gap-2 text-[#5B8A87] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.behance.net/alexandrebobeda/"
                className="flex items-center gap-2 text-[#5B8A87] hover:underline"
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
            <h2 className="text-[#5B8A87] text-lg">Hi there!</h2>

            {/* Main Bio */}
            <div className="space-y-4 md:space-y-6 text-gray-800">
              <p>
                I'm Alexandre Bobeda, a visual designer, AI product designer, creative coder and UX/Copywriter who bridges creativity and art with code.
              </p>

              <p>
                I thrive ✨ at the intersection of design, art, writing, and development, but I've also crafted visual
                identities and digital experiences for major Brazilian companies like Petrobras, Vale, and Ambev. I also contributed to UX, marketing, and design at a fintech, CloudWalk.
                </p>

                <p>
I recently developed and released 
<a href="https://openzero.com.br" target="_blank"><b>OpenZero</b></a>, 
a generative AI platform for image and video creation, as well as 
<a href="https://userecipfy.com" target="_blank"><b>Recipfy</b></a>, 
an AI tool that leverages OCR technology to scan and organize recipes.
</p>



              <p>
                During the web3 craze, I created NFTs that sold on major markets like NiftyGateway and KnownOrigin, in addition to having my work showcased at NFT Paris 2023. I’ve also worked on illustration projects deeply connected to my roots, beginning in the early ’90s, while releasing Tecmo—a brutalist pixel typeface inspired by ’80s bitmap fonts—and authoring some books published worldwide through Apple iBooks, Amazon, and Kobo Rakuten.
              </p>

              <p>I live in Rio de Janeiro, Brazil.</p>
            </div>

            <hr className="border-gray-300" />

            {/* Past Work Section */}
            <div className="space-y-4">
              <h2 className="text-[#5B8A87] text-lg">Past work</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                <Link href="https://www.behance.net/gallery/227844709/Uno" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image
                    src="/work/uno.webp"
                    alt="AI Voice Chatbot – iPad mockup by AB Studio"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                {/* Row 1 – slots 2 & 3 */}
                <Link href="https://www.behance.net/gallery/215530981/Vinyl" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image src="/work/vynil.webp" alt="Vinyl record with colorful light reflections" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <Link href="https://www.behance.net/gallery/113773857/Tecmo-Brutalist-Pixel-Typeface" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image src="/work/tecmo.webp" alt="Tecmo brutalist pixel font on a handheld gaming device" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
                {/* Row 2 */}
                <Link href="https://www.behance.net/gallery/165953051/CyberGirlz-Yuki-KnownOrigin-(NFT-Paris-2023)" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image src="/work/cybergirlz.webp" alt="Cybergirlz NFT exhibition at NFT Paris 2023" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <Link href="https://www.behance.net/gallery/165951527/Beyond-the-Wreckages-Nifty-Gateway" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image src="/work/btw.webp" alt="BTW – anime-style mecha illustration" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <Link href="https://www.behance.net/gallery/222790801/Escapade-Pictures" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image src="/work/escapade.webp" alt="Escapade Pictures brand identity on TV mockup" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
                {/* Row 3 */}
                <Link href="https://www.behance.net/gallery/213754773/T-shirt-Design" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image src="/work/tee.webp" alt="Nature's Symphony of Life t-shirt design" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <Link href="https://www.behance.net/gallery/113772531/Jurassic-World-Fallen-Kingdom" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image src="/work/jp.webp" alt="Jurassic World Fallen Kingdom retro illustrated poster" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <Link href="https://www.behance.net/gallery/63022773/Akira-(book-cover)" target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image src="/work/akira.webp" alt="Akira book cover mockup" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* Let's Hang Section */}
            <div className="space-y-4">
              <h2 className="text-[#5B8A87] text-lg">{"Let's Connect"}</h2>
              <p className="text-gray-800">
                <Link
                  href="mailto:abobeda@gmail.com?subject=Let's%20work%20together!"
                  className="text-[#5B8A87] hover:underline"
                >
                  Reach me out
                </Link>{" "}
                if you're interested in working together.
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-xs">© 2026 Alexandre Bobeda / AB Studio</p>
          </footer>
        </main>
      </div>
    </div>
  )
}
