export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-(--color-text-muted) md:px-10 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Aster &amp; Oak. Crafted for memorable evenings.</p>
        <p>Open daily: 12:00 - 23:00 | 42 Olive Street, Old Town</p>
      </div>
    </footer>
  );
}
