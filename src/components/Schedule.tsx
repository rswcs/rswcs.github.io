import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSchedule } from '../hooks/useSchedule'
import type { RaceStatus } from '../types'
import styles from './Schedule.module.css'

/**
 * OPTIONAL: pass your scraper API URL to fetch live schedule data.
 * e.g. scheduleApiUrl="https://YOUR_BACKEND/api/schedule"
 * Leave undefined to use the static SCHEDULE array from config.ts.
 */
interface Props {
  scheduleApiUrl?: string
}

const STATUS_LABELS: Record<RaceStatus, string> = {
  completed: 'Completed',
  next:      'Next Race',
  upcoming:  'Upcoming',
}

export default function Schedule({ scheduleApiUrl }: Props) {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const tableRef  = useScrollReveal<HTMLDivElement>()

  const { races, loading, error } = useSchedule(scheduleApiUrl)

  return (
    <section id="schedule" className={styles.section}>
      <div className="container">

        <div ref={headerRef} className={`reveal ${styles.header}`}>
          <div>
            <p className="section-label">Season Calendar</p>
            <h2 className="section-heading">Race Schedule</h2>
            <div className="divider" />
          </div>
          <p className={styles.sourceNote}>
            {/* REPLACE: data attribution line */}
            Data sourced from [SERIES WEBSITE] · Updated weekly
          </p>
        </div>

        <div ref={tableRef} className="reveal">
          {loading && (
            <p className={styles.statusMsg}>Loading schedule…</p>
          )}

          {error && !loading && (
            <p className={styles.statusMsg}>
              Could not fetch live data — showing last known schedule.
            </p>
          )}

          {!loading && (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Rd</th>
                  <th>Event</th>
                  <th className={styles.hideSmall}>Venue</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {races.map(race => (
                  <tr key={race.round}>
                    <td className={styles.tdRound}>
                      {String(race.round).padStart(2, '0')}
                    </td>
                    <td className={styles.tdEvent}>{race.event}</td>
                    <td className={`${styles.tdVenue} ${styles.hideSmall}`}>
                      {race.venue}
                    </td>
                    <td className={styles.tdDate}>{race.date}</td>
                    <td>
                      <span className={`${styles.badge} ${styles[`badge_${race.status}`]}`}>
                        {STATUS_LABELS[race.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </section>
  )
}
