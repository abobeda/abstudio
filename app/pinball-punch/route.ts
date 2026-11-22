const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.alexandrebobeda.pinballpunch&referrer=utm_source%3Dinstagram%26utm_medium%3Dbio"

export function GET() {
  return new Response(null, { status: 302, headers: { Location: PLAY_URL } })
}
