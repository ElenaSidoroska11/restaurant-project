"use client";

import { useMemo, useState } from "react";
import { categories, getMenuItemsByCategory, type MenuCategory } from "@/lib/menu";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("Starters");

  const filteredItems = useMemo(() => getMenuItemsByCategory(selectedCategory), [selectedCategory]);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
      <section className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">Our Menu</p>
        <h1 className="mt-3 text-4xl text-(--color-primary) md:text-5xl">Crafted with Seasonal Ingredients</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-(--color-text-muted) md:text-base">
          Explore a curated selection of Mediterranean-inspired dishes designed around fresh produce, premium seafood,
          and timeless techniques.
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
              }`}
            >
              {category}
            </button>
          );
        })}
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {filteredItems.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6"
          >
            <div className="flex items-start justify-between gap-5">
              <h2 className="text-2xl">{item.name}</h2>
              <span className="rounded-full bg-(--color-accent)/30 px-3 py-1 text-sm font-semibold text-(--color-primary)">
                {item.price}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-(--color-text-muted)">{item.description}</p>
            {item.tags && item.tags.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-(--color-border) px-3 py-1 text-xs uppercase tracking-wide text-(--color-text-muted)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
