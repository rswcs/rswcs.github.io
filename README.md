# Racing Portfolio — React + TypeScript + Vite

A professional racing driver portfolio with parallax hero, dynamic race schedule,
sponsor grid, coaching packages with ShopPay integration, and a sticky contact footer.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## Filling in Your Content

**All editable content lives in one place:**

```
src/data/config.ts
```

Open that file and replace every `// REPLACE` value:

| Field | What to change |
|---|---|
| `DRIVER.firstName / lastName` | Driver's name |
| `DRIVER.tagline` | Hero tagline |
| `DRIVER.seriesAndSeason` | e.g. `"Formula 4 · Season 2025"` |
| `DRIVER.bio[]` | Bio paragraphs (one string per paragraph) |
| `DRIVER.stats[]` | Career stats shown under bio |
| `DRIVER.heroPhoto` | Path to hero background image |
| `DRIVER.portraitPhoto` | Path to about section portrait |
| `DRIVER.coachingPhoto` | Path to coaching section photo |
| `DRIVER.coachingWebsite` | Full URL of coaching site |
| `DRIVER.sponsorMessage` | Thank-you text in sponsors section |
| `DRIVER.contact.*` | Email addresses + social handles |
| `SCHEDULE[]` | Race rounds (or use API — see below) |
| `SPONSORS[]` | Sponsor names + logo paths |
| `COACHING_PACKAGES[]` | Package names, descriptions, prices |

---

## Images

Place all image assets in `/public/images/` and sponsor logos in `/public/sponsors/`.

| File | Where it's used |
|---|---|
| `/public/images/hero.jpg` | Full-bleed parallax hero |
| `/public/images/portrait.jpg` | About section portrait |
| `/public/images/coaching.jpg` | Coaching section photo |
| `/public/images/hero-mid.png` | (Optional) parallax midground layer |
| `/public/sponsors/sponsor1.png` | Sponsor logo grid |

After adding real logos, open `src/components/Sponsors.tsx` and replace the
placeholder `<div>` inside each `SponsorCard` with:

```tsx
<img src={sponsor.logoSrc} alt={sponsor.name} />
```

---

## Live Race Schedule (Optional)

If you have a backend scraper that serves race data as JSON, set this in `.env`:

```
VITE_SCHEDULE_API_URL=https://your-backend.com/api/schedule
```

Expected response shape:
```json
[
  { "round": 1, "event": "...", "venue": "...", "date": "...", "status": "completed" },
  ...
]
```

`status` must be `"completed"`, `"next"`, or `"upcoming"`.  
If the fetch fails, it automatically falls back to the static `SCHEDULE` array.

---

## ShopPay Integration

1. In your Shopify admin → **Sales Channels → Buy Button**, create a product for each coaching package.
2. Note each product's **variant ID** and your **Storefront API token**.
3. Fill in `COACHING_PACKAGES[n].shopifyVariantId` and `DRIVER.shopify` in `config.ts`.
4. In `src/components/Coaching.tsx`, uncomment the `ShopPayButton` `useEffect` block
   and follow the inline instructions.

---

## Customising the Design

All design tokens (colours, fonts, spacing) live in `src/index.css` under `:root`.
Swap out `--color-accent` to change the primary colour across the whole site.

---

## Build for Production

```bash
npm run build
# output → dist/
```

---

## Project Structure

```
racing-portfolio/
├── public/
│   ├── images/          ← hero, portrait, coaching photos
│   └── sponsors/        ← sponsor logo PNGs
├── src/
│   ├── components/      ← one .tsx + .module.css per section
│   │   ├── Navbar
│   │   ├── Hero
│   │   ├── About
│   │   ├── Schedule
│   │   ├── Sponsors
│   │   ├── Coaching
│   │   └── ContactFooter
│   ├── hooks/           ← useParallax, useScrollReveal, useSchedule, useNavScroll
│   ├── data/
│   │   └── config.ts    ← ★ ALL content lives here ★
│   ├── types/
│   │   └── index.ts     ← TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css        ← design tokens + global styles
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```
