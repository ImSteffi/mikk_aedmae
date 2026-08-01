import Image from "next/image";
import { OfferArrow } from "@/components/offer-arrow";

export function Hero() {
  return (
    <section id="avaleht" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_40%,rgba(225,6,0,0.12),transparent_50%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-12 pt-8 md:grid-cols-[1fr_1.05fr] md:gap-8 md:px-8 md:pb-16 md:pt-6 lg:min-h-[min(86vh,820px)]">
        <div className="relative z-20 order-2 max-w-xl md:order-1">
          <h1 className="rise-in font-[family-name:var(--font-display)] text-[clamp(3.4rem,8.2vw,5.6rem)] leading-[0.92] tracking-[0.02em] text-fg">
            TREENI KOOS{" "}
            <span className="text-accent">EESTI</span> TREENERIGA
          </h1>
          <p className="rise-in rise-in-delay-1 mt-5 max-w-[22rem] text-[0.95rem] leading-relaxed text-fg-muted md:text-base">
            Personaaltreening ja veebitreening, mis ehitab jõudu, distsipliini ja
            püsivaid harjumusi — sinu tempos, sinu{" "}
            <span className="font-semibold text-fg">eesmärkide järgi</span>.
          </p>
          <div className="rise-in rise-in-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <a href="#kontakt" className="btn-primary min-w-[11rem]">
              Alusta muutust
            </a>
            <a
              href="#pakkumised"
              className="btn-ghost inline-flex items-center justify-center gap-2.5 min-w-[11rem]"
            >
              Vaata pakkumisi
              <OfferArrow />
            </a>
          </div>

          {/* Stats teksti all — mitte näo peal (Emil: ära varja peamist visuaali) */}
          <div className="rise-in rise-in-delay-3 mt-8 hidden md:block">
            <HeroInfoCard />
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[420px] md:order-2 md:mx-0 md:max-w-none md:justify-self-end lg:max-w-[500px]">
          <div className="relative mx-auto aspect-[4/5] w-full">
            <Image
              src="/headshot.png"
              alt="Mikk — personaaltreener"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 90vw, 500px"
            />
          </div>

          {/* Mobiil: kaart foto ALL, nägu alati vaba */}
          <div className="rise-in rise-in-delay-3 mt-4 md:hidden">
            <HeroInfoCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroInfoCard() {
  return (
    <div className="border border-white/10 bg-[#111111]/95 px-4 py-3.5 sm:px-5 sm:py-4">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href="https://www.instagram.com/mikkaedmae/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-sm font-medium tracking-wide text-fg transition-colors duration-150 hover:text-accent"
        >
          <span
            aria-hidden
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/15 text-accent"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm10.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
          </span>
          @mikkaedmae
        </a>

        <span aria-hidden className="hidden h-8 w-px bg-white/15 sm:block" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.14em]">
          <span className="text-accent">Mikk</span>
          <span className="text-fg-muted"> · personaaltreener</span>
        </p>
      </div>

      <div className="mt-3.5 grid grid-cols-2 gap-3 border-t border-white/10 pt-3.5 sm:max-w-sm">
        <div>
          <p className="font-[family-name:var(--font-display)] text-3xl leading-none tracking-wide text-fg">
            200+
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-fg-muted">
            klienti
          </p>
        </div>
        <div>
          <p className="font-[family-name:var(--font-display)] text-3xl leading-none tracking-wide text-fg">
            10+
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-fg-muted">
            aastat kogemust
          </p>
        </div>
      </div>
    </div>
  );
}
