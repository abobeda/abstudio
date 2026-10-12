import Link from "next/link"

const legalLinks = [
  { href: "/pinball-punch/privacy", label: "Privacy Policy" },
  { href: "/pinball-punch/terms", label: "Terms of Service" },
]

export function PinballPunchLegalLinks({ currentPath }: { currentPath?: string }) {
  return (
    <nav aria-label="Pinball Punch legal" className="game-legal-links">
      {legalLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          aria-current={currentPath === href ? "page" : undefined}
          className="game-legal-link"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
