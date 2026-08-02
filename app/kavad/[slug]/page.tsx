import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/brand";
import {
  genderLabel,
  getPlan,
  plans,
} from "@/lib/plans";

export function generateStaticParams() {
  return plans.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getPlan(slug);
  if (!plan) return { title: "Kava ei leitud" };
  return {
    title: `${plan.title} · ${genderLabel(plan.gender)} — ${brand.name}`,
    description: plan.description,
  };
}

export default async function PlanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getPlan(slug);
  if (!plan) notFound();

  return (
    <>
      <SiteHeader />
      <main className="border-b border-border py-12 md:py-20">
        <div className="mx-auto max-w-xl px-5 md:px-8">
          <Link
            href="/#treeningkavad"
            className="inline-flex text-sm text-fg-muted transition-colors hover:text-fg"
          >
            ← Tagasi kavade juurde
          </Link>

          <div className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              {genderLabel(plan.gender)}
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-wide text-fg md:text-6xl">
              {plan.title}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted md:text-base">
              {plan.description}
            </p>

            <ul className="mt-8 space-y-3">
              {plan.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm text-fg md:text-base"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <p className="font-[family-name:var(--font-display)] text-5xl tracking-wide text-accent">
                {plan.price}€
              </p>
              <a href="/#kontakt" className="btn-primary min-w-[10rem]">
                Osta kava
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
