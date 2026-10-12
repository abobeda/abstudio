import type { Metadata } from "next"
import { GamePolicyPage } from "@/components/game-policy-page"

export const metadata: Metadata = {
  title: "Pinball Punch Terms of Service | Alexandre Bobeda / AB Studio",
  description: "Terms for playing Pinball Punch, including eligibility, game progress, and optional rewarded advertisements.",
  alternates: { canonical: "https://www.alexandrebobeda.com/pinball-punch/terms" },
}

export default function TermsPage() {
  return <GamePolicyPage policy="terms" />
}
