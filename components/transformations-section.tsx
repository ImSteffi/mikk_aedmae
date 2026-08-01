const slots = ["Enne / pärast 1", "Enne / pärast 2", "Enne / pärast 3"];

export function TransformationsSection() {
  return (
    <section
      id="tulemused"
      className="border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide text-fg md:text-6xl">
          TULEMUSED
        </h2>
        <p className="mt-3 max-w-lg text-sm text-fg-muted md:text-base">
          Siia tulevad hiljem enne- ja pärastfotod. Praegu on kohatäited.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {slots.map((label) => (
            <li
              key={label}
              className="relative aspect-[4/5] border border-dashed border-white/15 bg-bg-card"
            >
              <div className="absolute inset-0 grid place-items-center p-6 text-center">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-fg-muted">
                    FOTO
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-fg-muted/80">
                    {label}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
