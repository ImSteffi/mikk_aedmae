const offers = [
  {
    title: "Veebitreening",
    body: "Personaalsed plaanid, nädalane tagasiside ja arengu jälgimine — treeni seal, kus sulle sobib.",
    icon: (
      <path
        d="M4 6h16v10H4V6zm2 12h4v2H6v-2zm6 0h6v2h-6v-2zM8 9h8v4H8V9z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Personaaltreening",
    body: "Individuaalsed treeningud saalis. Tehnika, jõud ja kindlus — trennid, mis päriselt edasi viivad.",
    icon: (
      <path
        d="M2 11h3v2H2v-2zm17 0h3v2h-3v-2zM7 10h10v4H7v-4zm-1-2v8H4V8h2zm12 0h2v8h-2V8z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Hübriidpakett",
    body: "Saalitrennid koos veebitoega. Sobib, kui tahad juhendamist kohapeal ja plaani igaks nädalaks.",
    icon: (
      <path
        d="M12 3l7 4v5c0 4.4-3 8.2-7 9-4-.8-7-4.6-7-9V7l7-4zm0 2.2L7 8v4.2c0 3.2 2.1 6.1 5 6.8 2.9-.7 5-3.6 5-6.8V8l-5-2.8z"
        fill="currentColor"
      />
    ),
  },
];

export function OfferSection() {
  return (
    <section id="pakkumised" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Tee uue vormini
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-wide text-fg md:text-6xl">
              MINU PAKKUMINE{" "}
              <span className="text-accent">SINULE</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-fg-muted md:text-right md:text-base">
            Vali formaat, mis sobib sinu elustiiliga. Sisu täpsustame koos —
            numbrid ja detailid lisame hiljem.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.45fr_0.85fr] lg:gap-5">
          <ul className="grid gap-4 sm:grid-cols-3">
            {offers.map((offer) => (
              <li
                key={offer.title}
                className="flex flex-col border border-white/[0.06] bg-[#121212] p-5 md:p-6"
              >
                <span className="mb-5 grid h-11 w-11 place-items-center text-accent">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
                    {offer.icon}
                  </svg>
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-fg">
                  {offer.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                  {offer.body}
                </p>
              </li>
            ))}
          </ul>

          <aside className="flex flex-col justify-between border border-white/[0.06] bg-[#161616] p-6 md:p-8">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-fg md:text-[2.35rem] md:leading-none">
                DETAILID PAKKUMISE KOHTA
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                Hinnad, kestus ja kohtumiste sagedus lepid kokku pärast lühikest
                vestlust — et plaan sobiks päriselt sinu nädalasse.
              </p>
            </div>
            <a href="#kontakt" className="btn-primary mt-8 self-start">
              Detailid ja hinnad
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
