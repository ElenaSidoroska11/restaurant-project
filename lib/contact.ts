export const contactHero = {
  eyebrow: "Contact",
  title: "Visit Aster & Oak",
  description:
    "Whether you are planning a date night or a celebration dinner, our team is here to make your visit seamless and memorable.",
} as const;

export const restaurantInfo = {
  address: "42 Olive Street, Old Town",
  phoneDisplay: "+389 70 000 000",
  phoneTel: "+38970000000",
  email: "hello@asterandoak.com",
} as const;

export type OpeningHoursRow = {
  label: string;
  hours: string;
  /** When false, no bottom border (last row) */
  showDivider?: boolean;
};

export const openingHoursRows: OpeningHoursRow[] = [
  { label: "Monday - Thursday", hours: "12:00 - 22:00", showDivider: true },
  { label: "Friday - Saturday", hours: "12:00 - 23:00", showDivider: true },
  { label: "Sunday", hours: "12:00 - 21:00", showDivider: false },
];

export const openingHoursNote = "Kitchen closes 30 minutes before closing time";

/** OpenStreetMap embed for Ohrid, North Macedonia */
export const mapEmbed = {
  title: "Aster and Oak location in Ohrid, North Macedonia",
  src: "https://www.openstreetmap.org/export/embed.html?bbox=20.7800%2C41.0900%2C20.8300%2C41.1300&layer=mapnik&marker=41.1130%2C20.8020",
} as const;

export type SocialNetwork = "instagram" | "facebook" | "tiktok";

export type SocialLink = {
  network: SocialNetwork;
  label: string;
  href: string;
};

export const followUsBlurb =
  "Stay updated with seasonal menus, behind-the-scenes clips, and special events.";

export const socialLinks: SocialLink[] = [
  { network: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { network: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { network: "tiktok", label: "TikTok", href: "https://www.tiktok.com/" },
];
