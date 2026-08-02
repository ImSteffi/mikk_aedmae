import { brand } from "@/lib/brand";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 border border-border bg-bg-elevated p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide text-fg md:text-6xl">
              VÕTA{" "}
              <span className="text-accent">ÜHENDUST</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
              Kirjuta lühidalt oma eesmärgist ja kogemusest. Vastan esimesel
              võimalusel ja lepime kokku järgmise sammu.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <a
              href="mailto:treener@example.com"
              className="btn-primary w-full justify-center sm:w-auto sm:self-start"
            >
              treener@example.com
            </a>
            <p className="text-xs text-fg-muted">
              Demo-kontakt — asenda oma e-posti ja sotsiaalmeediaga.
            </p>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-fg-muted sm:flex-row sm:items-center">
          <p className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-fg">
            {brand.shortName}
          </p>
          <p>
            © {new Date().getFullYear()} {brand.name}. Kõik õigused kaitstud.
          </p>
        </footer>
      </div>
    </section>
  );
}
