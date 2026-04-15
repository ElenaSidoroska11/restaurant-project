import Link from "next/link";

export default function Home() {
  const featuredDishes = [
    {
      name: "Charred Octopus",
      description: "Smoked paprika, citrus oil, and herb potatoes.",
      price: "$24",
    },
    {
      name: "Lemon Herb Sea Bass",
      description: "Stone-baked sea bass with fennel and saffron aioli.",
      price: "$32",
    },
    {
      name: "Pistachio Semifreddo",
      description: "Silky semifreddo with orange blossom caramel.",
      price: "$14",
    },
  ];

  return (
    <>
      <section className="bg-(--color-primary)">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 text-white md:grid-cols-2 md:items-center md:px-10 md:py-24">
          <div>
            <p className="mb-4 inline-block border border-white/25 px-3 py-1 text-xs uppercase tracking-[0.2em]">
              Modern Mediterranean
            </p>
            <h1 className="text-4xl leading-tight md:text-6xl">Aster &amp; Oak</h1>
            <p className="mt-6 max-w-lg text-base text-white/80 md:text-lg">
              Seasonal ingredients, refined flavors, and a warm setting for conversations that last all night.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reservations"
                className="rounded-full bg-(--color-accent) px-7 py-3 text-center text-sm font-semibold uppercase tracking-wide text-(--color-text) transition-opacity hover:opacity-90"
              >
                Book a Table
              </Link>
              <Link
                href="/menu"
                className="rounded-full border border-white/35 px-7 py-3 text-center text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-white/10"
              >
                View Menu
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.2em] text-white/65">Tonight&apos;s Highlights</p>
            <ul className="mt-6 space-y-4">
              {featuredDishes.map((dish) => (
                <li key={dish.name} className="rounded-2xl bg-black/15 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-xl">{dish.name}</h3>
                    <span className="text-sm font-medium text-(--color-accent)">{dish.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/75">{dish.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">Atmosphere</p>
            <h2 className="mt-4 text-2xl">Contemporary and Intimate</h2>
            <p className="mt-4 text-sm leading-7 text-(--color-text-muted)">
              Natural textures, warm light, and curated playlists shape a relaxed but elevated dining experience.
            </p>
          </article>
          <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">Ingredients</p>
            <h2 className="mt-4 text-2xl">Fresh, Regional, Seasonal</h2>
            <p className="mt-4 text-sm leading-7 text-(--color-text-muted)">
              We source from nearby farms and trusted fisheries, designing menus around what is best right now.
            </p>
          </article>
          <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">Service</p>
            <h2 className="mt-4 text-2xl">Effortless Reservations</h2>
            <p className="mt-4 text-sm leading-7 text-(--color-text-muted)">
              Reserve in seconds online and let our team prepare your table for date nights, gatherings, or celebrations.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-(--color-border) bg-(--color-surface)">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">Our Story</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl leading-tight md:text-4xl">
            Inspired by Mediterranean coastlines and the joy of sharing food.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--color-text-muted) md:text-base">
            At Aster &amp; Oak, each dish celebrates simplicity and craft. We pair timeless recipes with modern techniques
            to create a menu that feels both familiar and unforgettable.
          </p>
        </div>
      </section>
    </>
  );
}
