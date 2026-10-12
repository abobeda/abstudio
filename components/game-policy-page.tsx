import { readFile } from "node:fs/promises"
import path from "node:path"
import Image from "next/image"
import Link from "next/link"
import Markdown from "react-markdown"
import { PinballPunchLegalLinks } from "@/components/pinball-punch-legal-links"
import headerImage from "@/public/privacy-terms-header.webp"
import whiteLogo from "@/public/bobeda-white.webp"

const policies = {
  privacy: { title: "Privacy Policy", file: "privacy-policy.md" },
  terms: { title: "Terms of Service", file: "terms-of-service.md" },
}

export async function GamePolicyPage({ policy }: { policy: keyof typeof policies }) {
  const { title, file } = policies[policy]
  const source = await readFile(path.join(process.cwd(), "public", "legal", file), "utf8")
  // The document title is already displayed as the banner's accessible heading.
  const body = source.replace(/^# [^\r\n]*\r?\n/, "")

  return (
    <div className="game-policy-page">
      <a href="#policy-content" className="game-policy-skip">Skip to policy</a>
      <main>
        <header className="game-policy-header">
          <Image
            src={headerImage}
            alt="Blink, the Pinball Punch ball, floating above a green futuristic city"
            fill
            priority
            sizes="(max-width: 1040px) 100vw, 1040px"
            className="game-policy-artwork"
          />
          <div className="game-policy-shade" aria-hidden="true" />
          <Link href="/" aria-label="Bobeda studio home" className="game-policy-logo">
            <Image src={whiteLogo} alt="Bobeda" sizes="(max-width: 640px) 88px, 144px" priority />
          </Link>
          <div className="game-policy-title">
            <p>Pinball Punch</p>
            <h1>{title}</h1>
          </div>
        </header>

        <div className="game-policy-content">
          <div className="game-policy-navigation">
            <Link href="/#pinball-punch" className="game-legal-link">Back to Pinball Punch</Link>
            <PinballPunchLegalLinks currentPath={`/pinball-punch/${policy}`} />
          </div>
          <article id="policy-content" tabIndex={-1} aria-label={`Pinball Punch ${title}`} className="game-policy-copy">
            <Markdown>{body}</Markdown>
          </article>
          <footer className="game-policy-footer">
            <p>Alexandre Bobeda / AB Studio</p>
            <PinballPunchLegalLinks currentPath={`/pinball-punch/${policy}`} />
          </footer>
        </div>
      </main>
    </div>
  )
}
