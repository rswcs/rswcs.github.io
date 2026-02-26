import { useParallax } from '../hooks/useParallax'
import type { DriverConfig } from '../types'
import styles from './Hero.module.css'

interface Props {
  driver: DriverConfig
}

export default function Hero({ driver }: Props) {
  const bgRef  = useParallax<HTMLDivElement>({ speed: 0.4 })
  const midRef = useParallax<HTMLDivElement>({ speed: 0.2 })

  return (
    <section id="hero" className={styles.hero}>

      {/* ── Parallax layer 1: hero background photo ── */}
      <div
        ref={bgRef}
        className={styles.parallaxBg}
        style={{ backgroundImage: `url(${driver.heroPhoto})` }}
        aria-hidden="true"
      />

      {/* ── Parallax layer 2: optional midground (smoke / car silhouette PNG) ── */}
      {/* Remove this div if you don't have a midground image */}
      <div
        ref={midRef}
        className={styles.parallaxMid}
        aria-hidden="true"
      />

      {/* ── Diagonal bottom cut ── */}
      <div className={styles.cutBottom} aria-hidden="true" />

      {/* ── Main content ── */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>{driver.seriesAndSeason}</p>

        <h1 className={styles.name}>
          <em className={styles.nameFirst}>{driver.firstName}</em>
          {driver.lastName}
        </h1>

        <p className={styles.tagline}>{driver.tagline}</p>
      </div>

      <p className={styles.scrollHint} aria-hidden="true">Scroll</p>
    </section>
  )
}
