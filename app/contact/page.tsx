import {
  contactHero,
  followUsBlurb,
  mapEmbed,
  openingHoursNote,
  openingHoursRows,
  restaurantInfo,
  socialLinks,
  type SocialNetwork,
} from "@/lib/contact";
import { Camera, Music2, Users } from "lucide-react";

const socialLinkClassName =
  "group flex items-center justify-between rounded-xl border border-(--color-border) px-4 py-3 text-(--color-text) transition-colors hover:border-(--color-primary) hover:text-(--color-primary)";

function SocialIcon({ network }: { network: SocialNetwork }) {
  switch (network) {
    case "instagram":
      return <Camera size={18} />;
    case "facebook":
      return <Users size={18} />;
    case "tiktok":
      return <Music2 size={18} />;
    default:
      return null;
  }
}

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
      <section className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">{contactHero.eyebrow}</p>
        <h1 className="mt-3 text-4xl text-(--color-primary) md:text-5xl">{contactHero.title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-(--color-text-muted) md:text-base">
          {contactHero.description}
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 shadow-sm">
          <h2 className="text-2xl">Restaurant Info</h2>
          <div className="mt-5 space-y-5 text-sm text-(--color-text-muted)">
            <div>
              <p className="text-xs uppercase tracking-[0.2em]">Address</p>
              <p className="mt-2 text-base text-(--color-text)">{restaurantInfo.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em]">Phone</p>
              <a href={`tel:${restaurantInfo.phoneTel}`} className="mt-2 block text-base text-(--color-text) hover:underline">
                {restaurantInfo.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em]">Email</p>
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="mt-2 block text-base text-(--color-text) hover:underline"
              >
                {restaurantInfo.email}
              </a>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 shadow-sm">
          <h2 className="text-2xl">Opening Hours</h2>
          <ul className="mt-5 space-y-3 text-sm text-(--color-text-muted)">
            {openingHoursRows.map((row) => (
              <li
                key={row.label}
                className={`flex items-center justify-between pb-2 ${row.showDivider ? "border-b border-(--color-border)" : ""}`}
              >
                <span>{row.label}</span>
                <span className="font-medium text-(--color-text)">{row.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs uppercase tracking-[0.15em] text-(--color-text-muted)">{openingHoursNote}</p>
        </article>
      </section>

      <section className="mt-6 grid gap-6 md:grid-cols-3">
        <article className="md:col-span-2 rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 shadow-sm">
          <h2 className="text-2xl">Location</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-(--color-border)">
            <iframe title={mapEmbed.title} src={mapEmbed.src} className="min-h-80 w-full" loading="lazy" />
          </div>
        </article>

        <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 shadow-sm">
          <h2 className="text-2xl">Follow Us</h2>
          <p className="mt-3 text-sm text-(--color-text-muted)">{followUsBlurb}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {socialLinks.map((link) => (
              <li key={link.network}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={socialLinkClassName}>
                  <span className="flex items-center gap-3">
                    <SocialIcon network={link.network} />
                    {link.label}
                  </span>
                  <span className="text-xs uppercase tracking-wide opacity-75 group-hover:opacity-100">Open</span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
