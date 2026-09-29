import Image from "next/image"
import Link from "next/link"
import {
  RiInstagramFill,
  RiThreadsFill,
  RiTwitterXLine,
  RiLinkedinBoxFill,
} from "@remixicon/react"
import { ParallaxBanner } from "@/components/parallax-banner"
import { PinballPunchTeaser } from "@/components/pinball-punch-teaser"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/alexandrebobeda/",
    icon: RiInstagramFill,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@alexandrebobeda",
    icon: RiThreadsFill,
  },
  {
    name: "X",
    href: "https://x.com/alexandrebobeda",
    icon: RiTwitterXLine,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexandrebobeda/",
    icon: RiLinkedinBoxFill,
  },
]

const featuredProjects = [
  {
    title: "Grafite",
    alt: "Grafite - Local-first moodboards for Windows",
    src: "/work/grafite.webp",
    href: "https://www.grafite.app/",
  },
  {
    title: "OpenZero",
    alt: "OpenZero",
    src: "/work/openzero.webp",
    href: "https://www.openzero.com.br/",
  },
]

const projects = [
  {
    title: "Uno",
    alt: "AI Voice Chatbot – iPad mockup by AB Studio",
    src: "/work/uno.webp",
    href: "https://www.behance.net/gallery/227844709/Uno",
  },
  {
    title: "Vinyl",
    alt: "Vinyl record with colorful light reflections",
    src: "/work/vynil.webp",
    href: "https://www.behance.net/gallery/215530981/Vinyl",
  },
  {
    title: "Tecmo Brutalist Pixel Typeface",
    alt: "Tecmo brutalist pixel font on a handheld gaming device",
    src: "/work/tecmo.webp",
    href: "https://www.behance.net/gallery/113773857/Tecmo-Brutalist-Pixel-Typeface",
  },
  {
    title: "CyberGirlz Yuki",
    alt: "Cybergirlz NFT exhibition at NFT Paris 2023",
    src: "/work/cybergirlz.webp",
    href: "https://www.behance.net/gallery/165953051/CyberGirlz-Yuki-KnownOrigin-(NFT-Paris-2023)",
  },
  {
    title: "Beyond the Wreckages",
    alt: "BTW – anime-style mecha illustration",
    src: "/work/btw.webp",
    href: "https://www.behance.net/gallery/165951527/Beyond-the-Wreckages-Nifty-Gateway",
  },
  {
    title: "Escapade Pictures",
    alt: "Escapade Pictures brand identity on TV mockup",
    src: "/work/escapade.webp",
    href: "https://www.behance.net/gallery/222790801/Escapade-Pictures",
  },
  {
    title: "T-shirt Design",
    alt: "Nature's Symphony of Life t-shirt design",
    src: "/work/tee.webp",
    href: "https://www.behance.net/gallery/213754773/T-shirt-Design",
  },
  {
    title: "Jurassic World Fallen Kingdom",
    alt: "Jurassic World Fallen Kingdom retro illustrated poster",
    src: "/work/jp.webp",
    href: "https://www.behance.net/gallery/113772531/Jurassic-World-Fallen-Kingdom",
  },
  {
    title: "Akira",
    alt: "Akira book cover mockup",
    src: "/work/akira.webp",
    href: "https://www.behance.net/gallery/63022773/Akira-(book-cover)",
  },
]

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white font-mono text-sm leading-relaxed text-gray-900 selection:bg-[#5B8A87] selection:text-white">
      {/* 1. ABOVE THE FOLD HERO - Viewport centered logo */}
      <section className="h-screen min-h-screen w-full flex items-center justify-center p-6 bg-white relative">
        <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[560px] aspect-[800/280] transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/bobeda.png"
            alt="Bobeda"
            fill
            priority
            sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 480px, 560px"
            className="object-contain"
          />
        </div>
      </section>

      {/* 2. PINBALL PUNCH TEASER */}
      <PinballPunchTeaser />

      {/* 3. SOCIAL STRIP - #222222 Background with Remix Icons */}
      <section className="bg-[#222222] py-20 sm:py-24 md:py-28 px-6 w-full">
        <div className="max-w-xl mx-auto flex items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {socialLinks.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="text-white hover:text-[#5B8A87] transition-all duration-200 transform hover:scale-110 active:scale-95"
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
              </a>
            )
          })}
        </div>
      </section>

      {/* 4. PARALLAX 1 - space.jpg */}
      <ParallaxBanner
        src="/space.jpg"
        alt="Space exploration"
        heightClass="h-[360px] sm:h-[420px] md:h-[480px]"
        objectPosition="center 40%"
      />

      {/* 4. PAST WORK SECTION */}
      <section id="past-work" className="py-16 md:py-24 px-6 max-w-4xl mx-auto w-full">
        <div className="space-y-6">
          <h2 className="text-[#5B8A87] text-lg font-bold">Past work</h2>
          
          <div className="space-y-4">
            {/* Top row: 2 featured large squares with 16px gap */}
            <div className="grid grid-cols-2 gap-4">
              {featuredProjects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden bg-gray-100 group relative block focus:outline-none focus:ring-2 focus:ring-[#5B8A87]"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 424px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                </Link>
              ))}
            </div>

            {/* Remaining work thumbs in 3-column grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden bg-gray-100 group relative block focus:outline-none focus:ring-2 focus:ring-[#5B8A87]"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-gray-200" />
      </div>

      {/* 5. BIO SECTION - Hi there! */}
      <section id="bio" className="py-16 md:py-24 px-6 max-w-4xl mx-auto w-full">
        <div className="space-y-6">
          <h2 className="text-[#5B8A87] text-lg font-bold">Hi there!</h2>
          <div className="space-y-4 md:space-y-6 text-gray-800 leading-relaxed">
            <p>
              I&apos;m Alexandre Bobeda, a visual designer, AI product designer, creative coder and UX/Copywriter who bridges creativity and art with code.
            </p>
            <p>
              I thrive ✨ at the intersection of design, art, writing, and development, but I&apos;ve also crafted visual
              identities and digital experiences for major Brazilian companies like Petrobras, Vale, and Ambev. I also contributed to UX, marketing, and design at a fintech, CloudWalk.
            </p>
            <p>
              I recently developed and released{" "}
              <a
                href="https://openzero.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-[#5B8A87] transition-colors"
              >
                OpenZero
              </a>
              , a generative AI platform for image and video creation, as well as{" "}
              <a
                href="https://userecipfy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-[#5B8A87] transition-colors"
              >
                Recipfy
              </a>
              , an AI tool that leverages OCR technology to scan and organize recipes.
            </p>
            <p>
              During the web3 craze, I created NFTs that sold on major markets like NiftyGateway and KnownOrigin, in addition to having my work showcased at NFT Paris 2023. I’ve also worked on illustration projects deeply connected to my roots, beginning in the early ’90s, while releasing Tecmo—a brutalist pixel typeface inspired by ’80s bitmap fonts—and authoring some books published worldwide through Apple iBooks, Amazon, and Kobo Rakuten.
            </p>
            <p>I live in Rio de Janeiro, Brazil.</p>
          </div>
        </div>
      </section>

      {/* 6. PARALLAX 2 - alexandre-bobeda.png */}
      <ParallaxBanner
        src="/alexandre-bobeda.png"
        alt="Alexandre Bobeda"
        heightClass="h-[380px] sm:h-[460px] md:h-[540px]"
        objectPosition="center 20%"
      />

      {/* 7. CONTACT SECTION - Let's Connect */}
      <section id="contact" className="py-16 md:py-24 px-6 max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          <h2 className="text-[#5B8A87] text-lg font-bold">{"Let's Connect"}</h2>
          <p className="text-gray-800">
            <Link
              href="mailto:abobeda@gmail.com?subject=Let's%20work%20together!"
              className="text-[#5B8A87] underline hover:text-black transition-colors"
            >
              Reach me out
            </Link>{" "}
            if you&apos;re interested in working together.
          </p>
        </div>
      </section>

      {/* FOOTER - Mirwais style with copyright and ^ Top */}
      <footer className="border-t border-gray-200 py-8 px-6 max-w-4xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 Alexandre Bobeda / AB Studio</p>
        <a
          href="#top"
          className="hover:text-black hover:underline transition-colors flex items-center gap-1 font-semibold"
        >
          ^ Top
        </a>
      </footer>
    </div>
  )
}
