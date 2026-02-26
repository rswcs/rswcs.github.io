import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Schedule      from './components/Schedule'
import Sponsors      from './components/Sponsors'
import Coaching      from './components/Coaching'
import ContactFooter from './components/ContactFooter'

import { DRIVER, SPONSORS, COACHING_PACKAGES } from './data/config'

/**
 * OPTIONAL: If you have a backend schedule scraper, set this env variable
 * in a .env file at the project root:
 *
 *   VITE_SCHEDULE_API_URL=https://your-backend.com/api/schedule
 *
 * The Schedule component will fetch from it and fall back to static data.
 */
const SCHEDULE_API = import.meta.env.VITE_SCHEDULE_API_URL as string | undefined

export default function App() {
  return (
    <>
      <Navbar  driver={DRIVER} />

      <main>
        <Hero     driver={DRIVER} />
        <About    driver={DRIVER} />
        <Schedule scheduleApiUrl={SCHEDULE_API} />
        <Sponsors driver={DRIVER} sponsors={SPONSORS} />
        <Coaching driver={DRIVER} packages={COACHING_PACKAGES} />
      </main>

      <ContactFooter driver={DRIVER} />
    </>
  )
}
