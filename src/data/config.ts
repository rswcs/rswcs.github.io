/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SITE CONFIGURATION — fill in all placeholder values here   ║
 * ║  This is the single source of truth for all editable data.  ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import type { DriverConfig, Race, Sponsor, CoachingPackage } from '../types'

// ─── Driver & Site Info ──────────────────────────────────────────────────────

export const DRIVER: DriverConfig = {
  firstName:       'Nathan',           // REPLACE
  lastName:        'Wilkie',       // REPLACE
  tagline:         'Your short punchy tagline goes here — one or two lines about the driver and their ambitions.',
  seriesAndSeason: 'HRKC · 2026',  // REPLACE e.g. 'Formula 4 · Season 2025'

  bio: [
    // REPLACE: each string is one paragraph
    'Hey there! My name is Nathan Wilkie, and I am a 22-year-old racing driver with a passion for speed and competition. I have been racing since I was 10, and for as long as I can remember, my dream has been to compete against the best drivers in Canada.',
    'After a brief stint in Briggs Junior Lite in 2016, finanacial challenges forced me to step away from the club level. Despite this, I never let go of my dream, and after years of hard work, financial discipline, and unwavering belief in myself, I have finally returned to where I know I belong.',
    'Now, with the support of Prime PowerTeam, a sharper skill set, and unshakable confidence, I am once again ready to prove myself on the track.',
  ],

  stats: [
    // REPLACE: up to 4 stats. value can include non-numeric characters like '+' or '%'
    { value: '03', label: 'K1 Speed Canadian Championships'  },
    { value: '07', label: 'Arrive and Drive Championships'    },
    { value: '250', label: 'Podium Finishes' },
    { value: '2013', label: 'Year Started' },
  ],

  heroPhoto:       '/images/nathanpodium.jpg',       // REPLACE: put your photo in /public/images/
  portraitPhoto:   '/images/nathanportrait.jpg',   // REPLACE
  coachingPhoto:   '/images/nathancoaching.jpg',   // REPLACE

  coachingWebsite: 'https://risewithwilkiekarting.ca',  // REPLACE

  sponsorMessage:
    'The incredible support of our partners is what makes this racing journey possible. ' +
    'A sincere thank you to every company and individual who has believed in me, ' +
    'your investment goes far beyond the kart and into the future of motorsport.',

  contact: {
    email:        'wilkiekarting@gmail.com',      // REPLACE
    sponsorEmail: 'wilkiekarting@gmail.com',     // REPLACE
    instagram:    'https://instagram.com/nathanwilkiekarting',  // REPLACE or delete key
    tiktok:       'https://tiktok.com/@risewilkiekarting',    // REPLACE or delete key
    twitter:      'https://x.com/HANDLE',          // REPLACE or delete key
    youtube:      'https://youtube.com/@CHANNEL',  // REPLACE or delete key
  },

  // ── ShopPay / Shopify ────────────────────────────────────────────────────
  // Uncomment and fill in once you have your Shopify Storefront API credentials
  // shopify: {
  //   domain:                'yourstore.myshopify.com',
  //   storefrontAccessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN',
  // },
}

// ─── Race Schedule ───────────────────────────────────────────────────────────
// OPTION A: Edit this static array.
// OPTION B: Leave empty and populate via the useSchedule hook (fetches from API).

export const SCHEDULE: Race[] = [
  // REPLACE: add real rounds. status: 'completed' | 'next' | 'upcoming'
  { round: 1, event: 'HRKC Round 1',  venue: 'Hamilton Karting Complex, Hamilton, Ontaro', date: 'Sun 26 April 2026', status: 'upcoming' },
  { round: 2, event: 'K1 Speed World Championship',  venue: 'K1 Circuit, Winchester, California', date: 'Sun 03 May 2026', status: 'upcoming'      },
  { round: 3, event: 'Ontario Interclub Challenge Round 1',  venue: 'Goodwood Kartways, Goodwood, Ontario', date: 'Sun 17 May 2026', status: 'upcoming'  },
  { round: 4, event: 'HRKC Round 4',  venue: 'Hamilton Karting Complex, Hamilton, Ontaro', date: 'Sun 24 May 2026', status: 'upcoming'  },
  { round: 5, event: 'HRKC Round 5',  venue: 'Hamilton Karting Complex, Hamilton, Ontaro', date: 'Sat 30 May 2026', status: 'upcoming'  },
  { round: 6, event: 'HRKC Round 6',  venue: 'Hamilton Karting Complex, Hamilton, Ontaro', date: 'Sun 31 May 2026', status: 'upcoming'  },
]

// ─── Sponsors ────────────────────────────────────────────────────────────────
// Add one object per sponsor. Put logo files in /public/sponsors/

export const SPONSORS: Sponsor[] = [
  // REPLACE:
  { name: 'Prime Power Team', logoSrc: '/sponsors/primelogo.jpeg', url: 'https://primepowerteam.com' },
  { name: 'Le Gourmand', logoSrc: '/sponsors/legourmand.png', url: 'https://instagram.com/legourmand' },
]

// ─── Coaching Packages ───────────────────────────────────────────────────────

export const COACHING_PACKAGES: CoachingPackage[] = [
  {
    id:              'discovery',
    name:            'Discovery Session',           // REPLACE
    description:     'One-on-one data debrief, video analysis, and onboard review. Duration: 1 hour.',  // REPLACE
    price:           '$000',                        // REPLACE
    priceSuffix:     '/ session',
    shopifyVariantId: 'SHOPIFY_VARIANT_ID_1',       // REPLACE
  },
  {
    id:              'full-day',
    name:            'Full Day Programme',          // REPLACE
    description:     'On-track coaching, simulator work, and full debrief. Duration: full day.',  // REPLACE
    price:           '$000',                        // REPLACE
    priceSuffix:     '/ day',
    featured:        true,
    shopifyVariantId: 'SHOPIFY_VARIANT_ID_2',       // REPLACE
  },
  {
    id:              'season',
    name:            'Season Mentorship',           // REPLACE
    description:     'Ongoing support across your full season — weekly calls and unlimited data review.',  // REPLACE
    price:           '$0,000',                      // REPLACE
    priceSuffix:     '/ season',
    shopifyVariantId: 'SHOPIFY_VARIANT_ID_3',       // REPLACE
  },
]
