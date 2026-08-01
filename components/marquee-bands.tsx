const WORDS = [
  "MOTIVATSIOON",
  "DISTSIPLIIN",
  "JÕUD",
  "TULEMUSED",
  "FOOKUS",
  "ENERGIA",
];

export function MarqueeBands() {
  return (
    <section
      aria-hidden
      className="relative z-20 overflow-x-clip py-10 md:py-12"
    >
      {/*
        Rotatsioon lõikab nurki ära — seega lint peab olema ~200vw
        ja tsentreeritud, et kataks alati kogu viewporti.
      */}
      <div className="relative h-28 md:h-36">
        <Band
          className="top-2 rotate-[-3.5deg] bg-[#1c1c1c] text-[#cfcfcf]"
          direction="left"
        />
        <Band
          className="top-[3.4rem] rotate-[2.8deg] bg-accent text-white md:top-16"
          direction="right"
        />
      </div>
    </section>
  );
}

function Band({
  className,
  direction,
}: {
  className: string;
  direction: "left" | "right";
}) {
  // Kaks identset poole — animatsioon liigub -50%
  const half = [...WORDS, ...WORDS, ...WORDS];
  const track = [...half, ...half];

  return (
    <div
      className={`absolute top-0 left-1/2 w-[200vw] -translate-x-1/2 overflow-hidden py-3 shadow-[0_12px_32px_rgba(0,0,0,0.4)] md:py-3.5 ${className}`}
    >
      <div
        className={`flex w-max gap-10 whitespace-nowrap px-6 font-[family-name:var(--font-display)] text-[1.55rem] tracking-[0.2em] md:text-[1.9rem] ${
          direction === "left" ? "marquee-track-left" : "marquee-track-right"
        }`}
      >
        {track.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-10">
            {word}
            <span className="text-[0.45em] opacity-55">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
