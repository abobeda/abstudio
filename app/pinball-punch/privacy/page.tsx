import type { Metadata } from "next"
import { GamePolicyPage } from "@/components/game-policy-page"

export const metadata: Metadata = {
  title: "Pinball Punch Privacy Policy | Alexandre Bobeda / AB Studio",
  description: "How Pinball Punch handles game progress, advertising, analytics, and your privacy choices.",
  alternates: { canonical: "https://www.alexandrebobeda.com/pinball-punch/privacy" },
}

export default function PrivacyPage() {
  return <GamePolicyPage policy="privacy" />
}
