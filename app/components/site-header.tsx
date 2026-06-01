"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
];

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkClassName =
  "rounded-full px-4 py-2 text-(--color-text-muted) transition-colors hover:bg-(--color-background) hover:text-(--color-text)";

const mobileNavLinkClassName =
  "block rounded-xl px-4 py-3 text-(--color-text-muted) transition-colors hover:bg-(--color-background) hover:text-(--color-text)";

const activeNavLinkClassName =
  "bg-(--color-background) font-semibold !text-(--color-primary) hover:!text-(--color-primary)";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-(--color-text)">
          Aster <span className="text-(--color-accent)">&amp;</span> Oak
        </Link>
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-5 text-sm font-medium md:gap-8">
            {navLinks.map((link) => {
              const isActive = isNavLinkActive(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={cn(navLinkClassName, isActive && activeNavLinkClassName)}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          className="rounded-full border border-(--color-border) p-2 text-(--color-text) transition-colors hover:border-(--color-accent) hover:text-(--color-accent) md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>
      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-(--color-border) px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = isNavLinkActive(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={cn(mobileNavLinkClassName, isActive && activeNavLinkClassName)}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
