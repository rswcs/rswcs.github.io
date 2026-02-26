import { useState, useEffect } from 'react'
import type { Race } from '../types'
import { SCHEDULE } from '../data/config'

interface UseScheduleResult {
  races:   Race[]
  loading: boolean
  error:   string | null
}

/**
 * Loads the race schedule.
 *
 * If `apiUrl` is provided, it fetches fresh data from your backend
 * (e.g. a scraper endpoint) and falls back to the static SCHEDULE
 * array on failure.
 *
 * If no `apiUrl` is given, it uses the static SCHEDULE array directly.
 *
 * Expected API response shape: Race[]
 *   [{ round, event, venue, date, status }, ...]
 */
export function useSchedule(apiUrl?: string): UseScheduleResult {
  const [races,   setRaces]   = useState<Race[]>(SCHEDULE)
  const [loading, setLoading] = useState<boolean>(!!apiUrl)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    if (!apiUrl) return

    let cancelled = false
    setLoading(true)

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<Race[]>
      })
      .then(data => {
        if (!cancelled) {
          setRaces(data)
          setError(null)
        }
      })
      .catch(err => {
        if (!cancelled) {
          console.warn('Schedule API fetch failed — using static data.', err)
          setError(err.message)
          // fallback is already set as initial state
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [apiUrl])

  return { races, loading, error }
}
