# Aster & Oak Restaurant Website

A modern restaurant website for Aster & Oak, a Mediterranean dining concept. The app includes a landing page, menu browsing, reservation form, contact details, opening hours, social links, and an embedded location map.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui with Radix UI primitives
- Lucide React

## Features

- Responsive restaurant homepage with featured dishes and calls to action
- Categorized menu for starters, mains, desserts, and drinks
- Menu item image galleries using local images from `public/menu`
- Reservation form with date, time, guest count, and client-side validation
- Contact page with restaurant details, opening hours, social links, and an OpenStreetMap embed
- Optimized fonts and image handling through Next.js

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally after `npm run build`.

```bash
npm run lint
```

Runs ESLint.

## Project Structure

```text
app/
  contact/          Contact page
  menu/             Menu page with item galleries
  reservations/     Reservation form page
  components/       Site header and footer
components/ui/      Reusable UI components
lib/                Menu, contact, reservation, and utility data
public/menu/        Local menu item images
```

## Deployment on Vercel


After deployment, add the live Vercel URL here:

```text
Production URL: https://your-project-name.vercel.app
```

## Notes

- The reservation form currently validates and displays a success message on the client. It does not send data to a backend or email service yet.
- Menu images are stored locally in `public/menu`.
- `next.config.ts` allows fallback remote images from `picsum.photos`.
