import type { DriverConfig } from '../types'
import styles from './ContactFooter.module.css'

interface Props {
  driver: DriverConfig
}

interface SocialLink {
  label: string
  shortLabel: string
  href: string | undefined
}

export default function ContactFooter({ driver }: Props) {
  const { contact } = driver

  const socialLinks: SocialLink[] = [
    { label: 'Instagram', shortLabel: 'IG', href: contact.instagram },
    { label: 'TikTok',    shortLabel: 'TK', href: contact.tiktok    },
    { label: 'X',         shortLabel: '𝕏',  href: contact.twitter   },
    { label: 'YouTube',   shortLabel: 'YT', href: contact.youtube   },
  ].filter(s => !!s.href) as SocialLink[]

  return (
    <footer id="contact-footer" className={styles.footer}>
      <div className={styles.inner}>

        {/* ── Left: label + nav links ── */}
        <div className={styles.left}>
          <span className={styles.label}>Contact</span>

          <nav className={styles.links} aria-label="Footer navigation">
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={driver.coachingWebsite} target="_blank" rel="noopener noreferrer">
              Coaching
            </a>
            <a href={`mailto:${contact.sponsorEmail}`}>Sponsorship</a>
            <a href="#schedule">Schedule</a>
          </nav>
        </div>

        {/* ── Right: social icons ── */}
        {socialLinks.length > 0 && (
          <div className={styles.social} role="list" aria-label="Social media links">
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={s.label}
                role="listitem"
              >
                {s.shortLabel}
              </a>
            ))}
          </div>
        )}

      </div>
    </footer>
  )
}
