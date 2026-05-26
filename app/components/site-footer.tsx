import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const visitDetails = [
  {
    label: "Find us",
    value: "42 Olive Street, Old Town",
    icon: MapPin,
  },
  {
    label: "Hours",
    value: "Open daily, 12:00 - 23:00",
    icon: Clock3,
  },
  {
    label: "Call",
    value: "+389 70 000 000",
    href: "tel:+38970000000",
    icon: Phone,
  },
  {
    label: "Email",
    value: "hello@asterandoak.com",
    href: "mailto:hello@asterandoak.com",
    icon: Mail,
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 overflow-hidden bg-(--color-primary) text-white">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-6 md:px-10">
        <div
          className="absolute -left-24 top-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-4 h-56 w-56 rounded-full bg-(--color-support)/20 blur-3xl"
          aria-hidden
        />

        <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visitDetails.map((detail) => {
            const Icon = detail.icon;
            const content = (
              <>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-(--color-accent)">
                  <Icon size={17} aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-white/45">
                    {detail.label}
                  </span>
                  <span className="mt-1 block text-sm text-white/80">{detail.value}</span>
                </span>
              </>
            );

            return detail.href ? (
              <a
                key={detail.label}
                href={detail.href}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-4 transition-colors hover:border-accent/50">
                {content}
              </a>
            ) : (
              <div
                key={detail.label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-4">
                {content}
              </div>
            );
          })}
        </div>

        <div className="relative mt-8 flex flex-col gap-3 text-xs uppercase tracking-[0.18em] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Aster &amp; Oak. Crafted for memorable evenings.</p>
          <p>Seasonal kitchen | Warm service | Old Town</p>
        </div>
      </div>
    </footer>
  );
}
