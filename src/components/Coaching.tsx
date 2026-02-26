import { useScrollReveal } from '../hooks/useScrollReveal'
import type { CoachingPackage, DriverConfig } from '../types'
import styles from './Coaching.module.css'

interface Props {
  driver:   DriverConfig
  packages: CoachingPackage[]
}

// ─── ShopPay Button ───────────────────────────────────────────────────────────
/**
 * Renders a ShopPay Buy Button for a single Shopify product variant.
 *
 * HOW TO ACTIVATE:
 *  1. In your Shopify admin → Sales Channels → Buy Button, generate a Buy
 *     Button for each coaching product and note the variant IDs.
 *  2. Fill in `shopifyVariantId` in each package in src/data/config.ts.
 *  3. In your app entry (main.tsx), initialise the Shopify Buy SDK once:
 *
 *       import ShopifyBuy from '@shopify/buy-button-js'
 *       const client = ShopifyBuy.buildClient({
 *         domain: DRIVER.shopify!.domain,
 *         storefrontAccessToken: DRIVER.shopify!.storefrontAccessToken,
 *       })
 *       window.__shopifyClient = client
 *
 *  4. Uncomment the useEffect block below in ShopPayButton.
 */
function ShopPayButton({ pkg }: { pkg: CoachingPackage }) {
  // ── UNCOMMENT when Shopify SDK is configured ──────────────────────────────
  //
  // import { useEffect, useRef } from 'react'
  // import ShopifyBuy from '@shopify/buy-button-js'
  //
  // const containerRef = useRef<HTMLDivElement>(null)
  // useEffect(() => {
  //   if (!containerRef.current || !window.__shopifyClient) return
  //   const ui = ShopifyBuy.UI.init(window.__shopifyClient)
  //   ui.createComponent('product', {
  //     id:   pkg.shopifyVariantId,
  //     node: containerRef.current,
  //     options: {
  //       product: {
  //         text:     { button: 'Book with ShopPay' },
  //         layout:   'vertical',
  //         contents: { img: false, title: false, price: false },
  //         styles:   {
  //           button: {
  //             'background-color': '#5a31f4',
  //             'border-radius': '3px',
  //             'font-family': "'Barlow Condensed', sans-serif",
  //             'letter-spacing': '0.12em',
  //             'text-transform': 'uppercase',
  //           },
  //         },
  //       },
  //     },
  //   })
  // }, [pkg.shopifyVariantId])
  // return <div ref={containerRef} />
  //
  // ─────────────────────────────────────────────────────────────────────────────

  // Fallback button shown until SDK is configured
  return (
    <button
      className={styles.shopPayBtn}
      onClick={() =>
        alert(`ShopPay SDK not yet configured.\nVariant ID to wire up: ${pkg.shopifyVariantId}`)
      }
      aria-label={`Book ${pkg.name} with ShopPay`}
    >
      <span className={styles.shopPayLogo}>Shop</span>Pay — Book Now
    </button>
  )
}

// ─── Package Card ─────────────────────────────────────────────────────────────

function PackageCard({ pkg }: { pkg: CoachingPackage }) {
  return (
    <div className={`${styles.card} ${pkg.featured ? styles.cardFeatured : ''}`}>
      {pkg.featured && (
        <span className={styles.badge}>Most Popular</span>
      )}
      <div className={styles.pkgName}>{pkg.name}</div>
      <div className={styles.pkgDesc}>{pkg.description}</div>
      <div className={styles.pkgPrice}>
        {pkg.price}
        <span className={styles.pkgPriceSuffix}> {pkg.priceSuffix}</span>
      </div>
      <div className={styles.btnWrap}>
        <ShopPayButton pkg={pkg} />
      </div>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Coaching({ driver, packages }: Props) {
  const imageRef = useScrollReveal<HTMLDivElement>()
  const textRef  = useScrollReveal<HTMLDivElement>()

  return (
    <section id="coaching" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          {/* ── Coaching photo ── */}
          <div ref={imageRef} className="reveal">
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${driver.coachingPhoto})` }}
              role="img"
              aria-label="Coaching session"
            />
          </div>

          {/* ── Text & packages ── */}
          <div ref={textRef} className="reveal">
            <p className="section-label">Work with Me</p>
            <h2 className="section-heading">Coaching</h2>
            <div className="divider" />

            {/* REPLACE: coaching description paragraphs */}
            <p className={styles.para}>
              With years of competitive experience at the highest levels of junior motorsport,
              I offer one-on-one coaching sessions designed to fast-track your development
              as a driver.
            </p>
            <p className={styles.para}>
              Whether you're in indoor karting, outdoor karting or transitioning into club racing,
              sessions are tailored entirely around your goals.
            </p>

            <div className={styles.packages}>
              {packages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>

            <a
              href={driver.coachingWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Visit Full Coaching Site →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
