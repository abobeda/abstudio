import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-mono text-sm leading-relaxed">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen p-6 border-r border-gray-200 fixed left-0 top-0">
          <div className="space-y-6">
            {/* Logo */}
            <div className="w-12 h-12">
              <img src="/AB-Logo25.jpg" alt="AB Studio Logo" className="w-12 h-12 object-contain rounded" />
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

        {/* Main Content */}
        <main className="flex-1 ml-64 p-12 max-w-4xl">
          <div className="space-y-8">
            {/* Greeting */}
            <h2 className="text-[#d97757] text-lg">Hey y'all.</h2>

            {/* Main Bio */}
            <div className="space-y-6 text-gray-800">
              <p>
                I'm Alexandre Bobeda, the founder of{" "}
                <Link href="https://www.userecipfy.com/" className="text-[#d97757] hover:underline">
                  Recipfy
                </Link>
                , my first bootstrapped app, and a visual and graphic designer who bridges creativity with code.
              </p>

              <p>
                I thrive ✨ at the intersection of design, writing, and development, but I've also crafted visual identities and digital
                experiences for major Brazilian companies like{" "}
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
              <h3 className="text-lg font-medium">{"Let’s Connect"}</h3>
              <p className="text-gray-800">
                <Link href="mailto:hello@alexbobeda.com?subject=Let's%20work%20together!" className="text-[#d97757] hover:underline">Reach me out</Link> if you're
                interested in working together.
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-xs">© 2025 Alexandre Bobeda / AB Studio</p>
          </footer>
        </main>
      </div>
    </div>
  )
}
