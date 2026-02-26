import { useScrollReveal } from '../hooks/useScrollReveal'
import type { DriverConfig } from '../types'
import styles from './About.module.css'

interface Props {
  driver: DriverConfig
}

export default function About({ driver }: Props) {
  const imageRef = useScrollReveal<HTMLDivElement>()
  const textRef  = useScrollReveal<HTMLDivElement>()

  return (
    <section id="home" className={styles.section}>
      <div className={`container ${styles.grid}`}>

        {/* ── Portrait photo ── */}
        <div ref={imageRef} className={`reveal ${styles.imageWrap}`}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${driver.portraitPhoto})` }}
            role="img"
            aria-label={`${driver.firstName} ${driver.lastName} portrait`}
          />
        </div>

        {/* ── Bio text ── */}
        <div ref={textRef} className={`reveal ${styles.text}`}>
          <p className="section-label">About the Driver</p>
          <h2 className={`section-heading ${styles.heading}`}>
            {driver.firstName} {driver.lastName}
          </h2>
          <div className="divider" />

          {driver.bio.map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}

          {/* ── Career stats ── */}
          <div className={styles.stats}>
            {driver.stats.map(stat => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statNum}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
