"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { categories, getMenuItemsByCategory, type MenuCategory } from "@/lib/menu";

const itemGalleryImages: Record<string, string[]> = {
  "Smoked Eggplant Dip": [
    "/menu/starters/smoked-eggplant/smoked-eggplant-dip-1.png",
    "/menu/starters/smoked-eggplant/smoked-eggplant-dip-2.png",
    "/menu/starters/smoked-eggplant/smoked-eggplant-dip-3.png",
    "/menu/starters/smoked-eggplant/smoked-eggplant-dip-4.png",
  ],
  "Citrus Calamari": [
    "/menu/starters/citrus-calamari/citrus-calamari-1.png",
    "/menu/starters/citrus-calamari/citrus-calamari-2.png",
    "/menu/starters/citrus-calamari/citrus-calamari-3.png",
    "/menu/starters/citrus-calamari/citrus-calamari-4.png",
  ],
  "Roasted Beet Carpaccio": [
    "/menu/starters/roasted-beet-carpaccio/roasted-beet-carpaccio-1.png",
    "/menu/starters/roasted-beet-carpaccio/roasted-beet-carpaccio-2.png",
    "/menu/starters/roasted-beet-carpaccio/roasted-beet-carpaccio-3.png",
    "/menu/starters/roasted-beet-carpaccio/roasted-beet-carpaccio-4.png",
  ],
  "Grilled Halloumi Skewers": [
    "/menu/starters/grilled-halloumi-skewers/grilled-halloumi-skewers-1.png",
    "/menu/starters/grilled-halloumi-skewers/grilled-halloumi-skewers-2.png",
    "/menu/starters/grilled-halloumi-skewers/grilled-halloumi-skewers-3.png",
    "/menu/starters/grilled-halloumi-skewers/grilled-halloumi-skewers-4.png",
  ],
  "Octopus & Chickpea Salad": [
    "/menu/starters/octopus-and-chickpea-salad/octopus-and-chickpea-salad-1.png",
    "/menu/starters/octopus-and-chickpea-salad/octopus-and-chickpea-salad-2.png",
    "/menu/starters/octopus-and-chickpea-salad/octopus-and-chickpea-salad-3.png",
    "/menu/starters/octopus-and-chickpea-salad/octopus-and-chickpea-salad-4.png",
  ],
  "Lamb Shoulder Confit": [
    "/menu/mains/lamb-shoulder-confit/lamb-shoulder-confit-1.png",
    "/menu/mains/lamb-shoulder-confit/lamb-shoulder-confit-2.png",
    "/menu/mains/lamb-shoulder-confit/lamb-shoulder-confit-3.png",
    "/menu/mains/lamb-shoulder-confit/lamb-shoulder-confit-4.png",
  ],
  "Sea Bass al Forno": [
    "/menu/mains/sea-bass-al-forno/sea-bass-al-forno-1.png",
    "/menu/mains/sea-bass-al-forno/sea-bass-al-forno-2.png",
    "/menu/mains/sea-bass-al-forno/sea-bass-al-forno-3.png",
    "/menu/mains/sea-bass-al-forno/sea-bass-al-forno-4.png",
  ],
  "Wild Mushroom Orzotto": [
    "/menu/mains/wild-mushroom-orzotto/wild-mushroom-orzotto-1.png",
    "/menu/mains/wild-mushroom-orzotto/wild-mushroom-orzotto-2.png",
    "/menu/mains/wild-mushroom-orzotto/wild-mushroom-orzotto-3.png",
    "/menu/mains/wild-mushroom-orzotto/wild-mushroom-orzotto-4.png",
  ],
  "Charcoal Grilled Prawn Linguine": [
    "/menu/mains/charcoal-grilled-prawn-linguine/charcoal-grilled-prawn-linguine-1.png",
    "/menu/mains/charcoal-grilled-prawn-linguine/charcoal-grilled-prawn-linguine-2.png",
    "/menu/mains/charcoal-grilled-prawn-linguine/charcoal-grilled-prawn-linguine-3.png",
    "/menu/mains/charcoal-grilled-prawn-linguine/charcoal-grilled-prawn-linguine-4.png",
  ],

  "Braised Short Rib Polenta": [
    "/menu/mains/braised-short-rib-polenta/braised-short-rib-polenta-1.png",
    "/menu/mains/braised-short-rib-polenta/braised-short-rib-polenta-2.png",
    "/menu/mains/braised-short-rib-polenta/braised-short-rib-polenta-3.png",
    "/menu/mains/braised-short-rib-polenta/braised-short-rib-polenta-4.png",
  ],

  "Honey Fig Tart": [
    "/menu/desserts/honey-fig-tart/honey-fig-tart-1.png",
    "/menu/desserts/honey-fig-tart/honey-fig-tart-2.png",
    "/menu/desserts/honey-fig-tart/honey-fig-tart-3.png",
    "/menu/desserts/honey-fig-tart/honey-fig-tart-4.png",
  ],

  "Pistachio Semifreddo": [
    "/menu/desserts/pistachio-semifreddo/pistachio-semifreddo-1.png",
    "/menu/desserts/pistachio-semifreddo/pistachio-semifreddo-2.png",
    "/menu/desserts/pistachio-semifreddo/pistachio-semifreddo-3.png",
    "/menu/desserts/pistachio-semifreddo/pistachio-semifreddo-4.png",
  ],

  "Dark Chocolate Mousse": [
    "/menu/desserts/dark-chocolate-mousse/dark-chocolate-mousse-1.png",
    "/menu/desserts/dark-chocolate-mousse/dark-chocolate-mousse-2.png",
    "/menu/desserts/dark-chocolate-mousse/dark-chocolate-mousse-3.png",
    "/menu/desserts/dark-chocolate-mousse/dark-chocolate-mousse-4.png",
  ],
  "Lemon Olive Oil Cake": [
    "/menu/desserts/lemon-olive-oil-cake/lemon-olive-oil-cake-1.png",
    "/menu/desserts/lemon-olive-oil-cake/lemon-olive-oil-cake-2.png",
    "/menu/desserts/lemon-olive-oil-cake/lemon-olive-oil-cake-3.png",
    "/menu/desserts/lemon-olive-oil-cake/lemon-olive-oil-cake-4.png",
  ],

  "Baklava Cheesecake": [
    "/menu/desserts/baklava-cheesecake/baklava-cheesecake-1.png",
    "/menu/desserts/baklava-cheesecake/baklava-cheesecake-2.png",
    "/menu/desserts/baklava-cheesecake/baklava-cheesecake-3.png",
    "/menu/desserts/baklava-cheesecake/baklava-cheesecake-4.png",
  ],

  "Cedar Old Fashioned": [
    "/menu/drinks/cedar-old-fashioned/cedar-old-fashioned-1.png",
    "/menu/drinks/cedar-old-fashioned/cedar-old-fashioned-2.png",
    "/menu/drinks/cedar-old-fashioned/cedar-old-fashioned-3.png",
    "/menu/drinks/cedar-old-fashioned/cedar-old-fashioned-4.png",
  ],

  "Mediterranean Spritz": [
    "/menu/drinks/mediterranean-spritz/mediterranean-spritz-1.png",
    "/menu/drinks/mediterranean-spritz/mediterranean-spritz-2.png",
    "/menu/drinks/mediterranean-spritz/mediterranean-spritz-3.png",
    "/menu/drinks/mediterranean-spritz/mediterranean-spritz-4.png",
  ],

  "Pomegranate Mint Cooler": [
    "/menu/drinks/pomegranate-mint-cooler/pomegranate-mint-cooler-1.png",
    "/menu/drinks/pomegranate-mint-cooler/pomegranate-mint-cooler-2.png",
    "/menu/drinks/pomegranate-mint-cooler/pomegranate-mint-cooler-3.png",
    "/menu/drinks/pomegranate-mint-cooler/pomegranate-mint-cooler-4.png",
  ],

  "Cucumber Basil Fizz": [
    "/menu/drinks/cucumber-basil-fizz/cucumber-basil-fizz-1.png",
    "/menu/drinks/cucumber-basil-fizz/cucumber-basil-fizz-2.png",
    "/menu/drinks/cucumber-basil-fizz/cucumber-basil-fizz-3.png",
    "/menu/drinks/cucumber-basil-fizz/cucumber-basil-fizz-4.png",
  ],
  
  "Saffron Pear Martini": [
    "/menu/drinks/saffron-pear-martini/saffron-pear-martini-1.png",
    "/menu/drinks/saffron-pear-martini/saffron-pear-martini-2.png",
    "/menu/drinks/saffron-pear-martini/saffron-pear-martini-3.png",
    "/menu/drinks/saffron-pear-martini/saffron-pear-martini-4.png",
  ],
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("Starters");
  const [openGalleryFor, setOpenGalleryFor] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredItems = useMemo(() => getMenuItemsByCategory(selectedCategory), [selectedCategory]);
  const openGalleryItem = useMemo(
    () => filteredItems.find((item) => item.name === openGalleryFor) ?? null,
    [filteredItems, openGalleryFor],
  );
  const galleryImages = useMemo(() => {
    if (!openGalleryItem) return [];
    const localImages = itemGalleryImages[openGalleryItem.name];
    if (localImages && localImages.length > 0) {
      return localImages;
    }
    const seed = openGalleryItem.name.toLowerCase().replace(/\s+/g, "-");
    return [1, 2, 3, 4].map((index) => `https://picsum.photos/seed/${seed}-${index}/1200/800`);
  }, [openGalleryItem]);

  useEffect(() => {
    if (!openGalleryItem || galleryImages.length <= 1) return;

    const timer = window.setInterval(() => {
      setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [galleryImages.length, openGalleryItem]);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
      <section className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">Our Menu</p>
        <h1 className="mt-3 text-4xl text-(--color-primary) md:text-5xl">
          Crafted with Seasonal Ingredients
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-(--color-text-muted) md:text-base">
          Explore a curated selection of Mediterranean-inspired dishes designed around fresh produce, premium
          seafood, and timeless techniques.
        </p>
      </section>

      <section className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-(--color-primary) bg-(--color-primary) text-white"
                  : "border-(--color-border) bg-(--color-surface) text-(--color-text-muted) hover:text-(--color-text)"
              }`}>
              {category}
            </button>
          );
        })}
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {filteredItems.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6">
            <div className="flex items-start justify-between gap-5">
              <h2 className="text-2xl">{item.name}</h2>
              <span className="rounded-full bg-accent/30 px-3 py-1 text-sm font-semibold text-(--color-primary)">
                {item.price}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-(--color-text-muted)">{item.description}</p>
            <div className="mt-4 flex items-end justify-between gap-4">
              {item.tags && item.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-(--color-border) px-3 py-1 text-xs uppercase tracking-wide text-(--color-text-muted)">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={() => {
                  setSelectedImageIndex(0);
                  setOpenGalleryFor(item.name);
                }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--color-border) text-(--color-text-muted) transition-colors hover:bg-accent/20 hover:text-(--color-text)"
                aria-label={`Open gallery for ${item.name}`}>
                <Images size={16} />
              </button>
            </div>
          </article>
        ))}
      </section>

      {openGalleryItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-4xl rounded-2xl bg-(--color-surface) p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-xl text-(--color-primary)">{openGalleryItem.name} Gallery</h3>
              <button
                type="button"
                onClick={() => setOpenGalleryFor(null)}
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-(--color-border) text-(--color-text-muted) transition-colors hover:bg-(--color-background) hover:text-(--color-text)"
                aria-label="Close gallery">
                <X size={16} />
              </button>
            </div>

            <div className="relative">
              <div className="relative h-96 overflow-hidden rounded-xl border border-(--color-background) md:h-112">
                <Image
                  key={galleryImages[selectedImageIndex]}
                  src={galleryImages[selectedImageIndex]}
                  alt={`${openGalleryItem.name} ${selectedImageIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
                }
                className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                aria-label="Previous image">
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                aria-label="Next image">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {galleryImages.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative h-20 overflow-hidden rounded-lg transition-colors ${
                    idx === selectedImageIndex
                      ? "border-2 border-(--color-primary)"
                      : "border border-(--color-background)"
                  }`}
                  aria-label={`View image ${idx + 1}`}>
                  <Image
                    src={src}
                    alt={`${openGalleryItem.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
