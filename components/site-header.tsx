"use client";

import { useState } from "react";
import { brand } from "@/lib/brand";

const links = [
  { href: "/#avaleht", label: "Avaleht" },
  { href: "/#minust", label: "Minust" },
  { href: "/#treeningkavad", label: "Kavad" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-8">
        <a href="/#avaleht" className="flex min-w-0 items-center gap-2.5 group">
          <span
            aria-hidden
            className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-accent text-[10px] font-bold text-white transition-transform duration-150 ease-[var(--ease-out)] group-active:scale-[0.97]"
          >
            {brand.mark}
          </span>
          <span className="truncate font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-fg sm:text-2xl">
            {brand.shortName}
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Põhinavigatsioon"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors duration-150 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialIcon label="Instagram" href="/#kontakt">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm10.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          </SocialIcon>
          <SocialIcon label="Facebook" href="/#kontakt">
            <path d="M14 3h3v3h-3c-.6 0-1 .4-1 1v2h4l-.5 3H13v8h-3v-8H8V9h2V7c0-2.2 1.8-4 4-4z" />
          </SocialIcon>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-fg lg:hidden active:scale-[0.97] transition-transform duration-150 ease-[var(--ease-out)]"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Sulge menüü" : "Ava menüü"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-fg transition-transform duration-200 ease-[var(--ease-out)] ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-full bg-fg transition-opacity duration-150 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-full bg-fg transition-transform duration-200 ease-[var(--ease-out)] ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border bg-bg lg:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-[var(--ease-out)] ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col px-5 py-3" aria-label="Mobiilimenüü">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-base text-fg-muted transition-colors hover:text-fg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SocialIcon({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center text-fg-muted transition-colors duration-150 hover:text-fg active:scale-[0.97]"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        {children}
      </svg>
    </a>
  );
}
