import { OfferArrow } from "@/components/offer-arrow";
import { PhotoSlot } from "@/components/photo-slot";

const points = [
  {
    title: "Individuaalne lähenemine",
    body: "Pole ühte plaani kõigile. Vaatan sinu taset, aega ja eesmärke — ja ehitan selle peale.",
  },
  {
    title: "Tehnika ja ohutus",
    body: "Õige tehnika enne suuri raskusi. Nii saad tulemusi ilma vigastusteta.",
  },
  {
    title: "Terve mõistus ja tasakaal",
    body: "Treening peab sobima eluga. Püsiv areng, mitte läbipõlemine — järjepidevus võidab lühiajalise äärmuse.",
  },
];

export function TrustSection() {
  return (
    <section id="minust" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:gap-14 md:px-8 lg:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden bg-[#121212]">
          <PhotoSlot
            file="trust.jpg"
            alt="Mikk treeningul"
            className="absolute inset-0 h-full w-full grayscale contrast-125"
          />
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Unusta valmisplaanid
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-wide text-fg md:text-6xl">
            MIKS MIND{" "}
            <span className="text-accent">USALDADA?</span>
          </h2>

          <ul className="mt-10 space-y-7">
            {points.map((point) => (
              <li key={point.title}>
                <div className="mb-2 flex items-center gap-3">
                  <span aria-hidden className="h-[2px] w-9 shrink-0 bg-accent" />
                  <h3 className="text-lg font-semibold text-fg">{point.title}</h3>
                </div>
                <p className="pl-12 text-sm leading-relaxed text-fg-muted md:text-[0.95rem]">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#kontakt" className="btn-primary">
              Minust lähemalt
            </a>
            <a
              href="#pakkumised"
              className="btn-ghost inline-flex items-center justify-center gap-2.5"
            >
              Vaata pakkumisi
              <OfferArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
