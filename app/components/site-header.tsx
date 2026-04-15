import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-(--color-text)">
          Aster <span className="text-(--color-accent)">&amp;</span> Oak
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5 text-sm font-medium text-(--color-text-muted) md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition-colors hover:text-(--color-text)" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
