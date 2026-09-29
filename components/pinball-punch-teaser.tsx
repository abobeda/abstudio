import Image from "next/image"

export function PinballPunchTeaser() {
  return (
    <section className="relative w-full aspect-[1920/900] overflow-hidden bg-[#0d4523] select-none">
      {/* Background */}
      <Image
        src="/pinball-punch-bg.webp"
        alt="Pinball Punch Background"
        fill
        sizes="100vw"
        priority
        className="object-cover pointer-events-none"
      />

      {/* Ball Character: size 714x714, x=168, y=152 on 1920x900 */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "8.75%", // 168 / 1920
          top: "16.89%", // 152 / 900
          width: "37.19%", // 714 / 1920
          height: "79.33%", // 714 / 900
        }}
      >
        <Image
          src="/ball.webp"
          alt="Pinball Punch Ball Character"
          fill
          sizes="(max-width: 768px) 40vw, 714px"
          className="object-contain"
        />
      </div>

      {/* Logo & Coming Soon: x=1131, y=70, w=743 on 1920x900 */}
      <div
        className="absolute flex flex-col items-center pointer-events-none"
        style={{
          left: "58.91%", // 1131 / 1920
          top: "7.78%", // 70 / 900
          width: "38.70%", // 743 / 1920
        }}
      >
        <Image
          src="/pinball-punch-logo.webp"
          alt="Pinball Punch"
          width={743}
          height={249}
          priority
          className="w-full h-auto object-contain"
        />
        <p
          className="text-center font-bold uppercase tracking-wider text-[#112316] mt-[3%]"
          style={{
            fontFamily: "'Noka Bold', sans-serif",
            fontSize: "clamp(11px, 1.45vw, 28px)",
          }}
        >
          COMING SOON...
        </p>
      </div>

      {/* Google Play Badge: x=1345, y=736, w=314 on 1920x900 */}
      <div
        className="absolute"
        style={{
          left: "70.05%", // 1345 / 1920
          top: "81.78%", // 736 / 900
          width: "16.35%", // 314 / 1920
        }}
      >
        <Image
          src="/google-play.webp"
          alt="Get it on Google Play"
          width={314}
          height={93}
          className="w-full h-auto object-contain drop-shadow hover:scale-105 transition-transform duration-200"
        />
      </div>
    </section>
  )
}
