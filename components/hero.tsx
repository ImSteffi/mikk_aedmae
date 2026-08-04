import Image from "next/image";
import { OfferArrow } from "@/components/offer-arrow";
import { brand } from "@/lib/brand";

export function Hero() {
  return (
    <section id="avaleht" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_40%,rgba(225,6,0,0.14),transparent_52%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-14 pt-10 md:grid-cols-[1fr_1fr] md:gap-10 md:px-8 md:pb-20 md:pt-12 lg:min-h-[min(82vh,800px)]">
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
              href="#treeningkavad"
              className="btn-ghost inline-flex items-center justify-center gap-2.5 min-w-[11rem]"
            >
              Vaata kavasid
              <OfferArrow />
            </a>
          </div>

          <div className="rise-in rise-in-delay-3 mt-8 max-w-md">
            <HeroInfoCard />
          </div>
        </div>

        <div className="rise-in rise-in-delay-1 relative order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden md:max-w-none">
            <Image
              src="/images/hero.jpg"
              alt="Treening saalis — dummy foto (Unsplash)"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 90vw, 480px"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroInfoCard() {
  return (
    <div className="border border-white/10 bg-[#111111]/95 px-4 py-3.5 sm:px-5 sm:py-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em]">
        <span className="text-accent">{brand.shortName}</span>
        <span className="text-fg-muted"> · {brand.tagline}</span>
      </p>

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
