import { useNavScroll } from '../hooks/useNavScroll'
import type { DriverConfig } from '../types'
import styles from './Navbar.module.css'

interface Props {
  driver: DriverConfig
}

const NAV_ITEMS = [
  { label: 'About',    href: '#home'     },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Coaching', href: '#coaching' },
]

export default function Navbar({ driver }: Props) {
  const scrolled = useNavScroll()

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        <span className={styles.logoFirst}>{driver.firstName}</span>{' '}
        {driver.lastName}
      </a>

      <ul className={styles.links}>
        {NAV_ITEMS.map(item => (
          <li key={item.href}>
            <a href={item.href} className={styles.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
