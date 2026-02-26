// ─── Race / Schedule ────────────────────────────────────────────────────────

export type RaceStatus = 'completed' | 'next' | 'upcoming'

export interface Race {
  round:   number
  event:   string
  venue:   string
  date:    string
  status:  RaceStatus
}

// ─── Sponsor ─────────────────────────────────────────────────────────────────

export interface Sponsor {
  name:    string
  logoSrc: string   // path to logo image, e.g. '/sponsors/acme.png'
  url?:    string   // optional link on click
}

// ─── Coaching Package ────────────────────────────────────────────────────────

export interface CoachingPackage {
  id:              string           // e.g. 'discovery'
  name:            string           // e.g. 'Discovery Session'
  description:     string
  price:           string           // e.g. '$299'
  priceSuffix:     string           // e.g. '/ session'
  featured?:       boolean
  shopifyVariantId: string          // Shopify product variant ID for ShopPay
}

// ─── Career Stat ─────────────────────────────────────────────────────────────

export interface CareerStat {
  value: string   // e.g. '12' or '2019'
  label: string   // e.g. 'Race Wins'
}

// ─── Driver / Site Config ────────────────────────────────────────────────────

export interface DriverConfig {
  firstName:        string
  lastName:         string
  tagline:          string
  seriesAndSeason:  string           // e.g. 'Formula 4 · Season 2025'
  bio:              string[]         // array of paragraph strings
  stats:            CareerStat[]
  heroPhoto:        string           // path e.g. '/images/hero.jpg'
  portraitPhoto:    string           // path e.g. '/images/portrait.jpg'
  coachingPhoto:    string           // path e.g. '/images/coaching.jpg'
  coachingWebsite:  string           // full URL
  sponsorMessage:   string
  contact: {
    email:          string
    sponsorEmail:   string
    instagram?:     string
    tiktok?:        string
    twitter?:       string
    youtube?:       string
  }
  shopify?: {
    domain:         string           // e.g. 'yourstore.myshopify.com'
    storefrontAccessToken: string
  }
}
