"use client"

import React from "react"

interface ParallaxBannerProps {
  src: string
  alt: string
  heightClass?: string
  objectPosition?: string
  overlayOpacity?: string
}

export function ParallaxBanner({
  src,
  alt,
  heightClass = "h-[340px] sm:h-[420px] md:h-[480px]",
  objectPosition = "center center",
  overlayOpacity = "bg-black/10",
}: ParallaxBannerProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative w-full ${heightClass} overflow-hidden bg-neutral-950 bg-fixed bg-no-repeat bg-cover`}
      style={{
        backgroundImage: `url("${src}")`,
        backgroundPosition: objectPosition,
      }}
    >
      <div className={`absolute inset-0 ${overlayOpacity} pointer-events-none`} />
    </div>
  )
}
