import { useScrollReveal } from '../hooks/useScrollReveal'
import type { DriverConfig, Sponsor } from '../types'
import styles from './Sponsors.module.css'

interface Props {
  driver:   DriverConfig
  sponsors: Sponsor[]
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const content = (
    <div className={styles.card}>
      <img src={sponsor.logoSrc} alt={sponsor.name} />
    </div>
  )

  return sponsor.url
    ? <a href={sponsor.url} target="_blank" rel="noopener noreferrer">{content}</a>
    : content
}

export default function Sponsors({ driver, sponsors }: Props) {
  const introRef = useScrollReveal<HTMLDivElement>()
  const gridRef  = useScrollReveal<HTMLDivElement>()
  const ctaRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section id="sponsors" className={styles.section}>
      <div className="container">

        {/* ── Intro ── */}
        <div ref={introRef} className={`reveal ${styles.intro}`}>
          <p className="section-label">Our Partners</p>
          <h2 className="section-heading">Sponsors</h2>
          <div className="divider" />
          <p className={styles.message}>{driver.sponsorMessage}</p>
        </div>

        {/* ── Logo grid ── */}
        <div ref={gridRef} className={`reveal ${styles.grid}`} style={{ '--sponsor-count': sponsors.length } as React.CSSProperties}>
          {sponsors.map(sponsor => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className={`reveal ${styles.cta}`}>
          <p className={styles.ctaText}>
            Interested in joining the team as a sponsor? Click the button 
            below to send me an email!
          </p>
          <a
            href={`mailto:${driver.contact.sponsorEmail}`}
            className="btn btn-primary"
          >
            Sponsorship Enquiries →
          </a>
        </div>

      </div>
    </section>
  )
}
