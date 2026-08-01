"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PhotoSlotProps = {
  /** Failinimi public/images/ all, nt "hero.jpg" */
  file: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Kui fail on olemas public/images/ all → näitab fotot.
 * Kui ei → selge kohatäide sama failinimega.
 */
export function PhotoSlot({
  file,
  alt,
  className = "",
  priority = false,
}: PhotoSlotProps) {
  const src = `/images/${file}`;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new window.Image();
    img.onload = () => {
      if (!cancelled) setReady(true);
    };
    img.onerror = () => {
      if (!cancelled) setReady(false);
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#151515] ${className}`}>
      {ready ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 768px) 90vw, 480px"
        />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#222_0%,#151515_65%)]"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-[32%] h-24 w-24 -translate-x-1/2 rounded-full bg-[#2a2a2a] md:h-28 md:w-28"
          />
          <div
            aria-hidden
            className="absolute bottom-[18%] left-1/2 h-40 w-44 -translate-x-1/2 rounded-t-[100px] bg-[#2a2a2a] md:h-48 md:w-52"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-5 pt-16 text-center">
            <p className="font-[family-name:var(--font-display)] text-lg tracking-[0.14em] text-fg-muted">
              LISA FOTO
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-fg-muted/70">
              public/images/{file}
            </p>
          </div>
          <span className="sr-only">{alt}</span>
        </>
      )}
    </div>
  );
}
