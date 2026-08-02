import Link from "next/link";
import {
  genderLabel,
  plansByGender,
  type Plan,
  type PlanGender,
} from "@/lib/plans";

export function PlansSection() {
  return (
    <section id="treeningkavad" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Valmis programmid
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-wide text-fg md:text-6xl">
            TREENING<span className="text-accent">KAVAD</span>
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-fg-muted md:text-base">
            Vali sobiv kava — meestele ja naistele eraldi. Iga kava sisaldab
            harjutuste pilte, nõuandeid ja PDF-faili.
          </p>
        </div>

        <GenderBlock gender="mehed" />
        <GenderBlock gender="naised" className="mt-14 md:mt-16" />
      </div>
    </section>
  );
}

function GenderBlock({
  gender,
  className = "",
}: {
  gender: PlanGender;
  className?: string;
}) {
  const items = plansByGender(gender);

  return (
    <div className={className}>
      <h3 className="mb-5 font-[family-name:var(--font-display)] text-3xl tracking-[0.12em] text-fg md:text-4xl">
        {genderLabel(gender).toUpperCase()}
      </h3>
      <ul className="grid gap-4 sm:grid-cols-3">
        {items.map((plan) => (
          <li key={plan.slug}>
            <PlanCard plan={plan} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <Link
      href={`/kavad/${plan.slug}`}
      className="group flex h-full flex-col border border-white/[0.06] bg-[#121212] p-5 transition-[border-color,transform] duration-200 ease-[var(--ease-out)] hover:border-white/20 active:scale-[0.99] md:p-6"
    >
      <h4 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-fg md:text-[1.75rem]">
        {plan.title}
      </h4>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
        {plan.description}
      </p>
      <div className="mt-6 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
        <p className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-accent">
          {plan.price}€
        </p>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fg-muted transition-colors group-hover:text-fg">
          Vaata →
        </span>
      </div>
    </Link>
  );
}
