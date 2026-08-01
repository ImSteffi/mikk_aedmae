const INSTAGRAM = "https://www.instagram.com/mikkaedmae/";
const FACEBOOK =
  "https://www.facebook.com/profile.php?id=100002497901197";

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
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center sm:w-auto sm:self-start"
            >
              Instagram · @mikkaedmae
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full justify-center sm:w-auto sm:self-start"
            >
              Facebook
            </a>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-fg-muted sm:flex-row sm:items-center">
          <p className="font-[family-name:var(--font-display)] text-xl tracking-[0.14em] text-fg">
            MIKK
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fg"
            >
              @mikkaedmae
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fg"
            >
              Facebook
            </a>
            <p>© {new Date().getFullYear()} Mikk. Kõik õigused kaitstud.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
