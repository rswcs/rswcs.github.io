import { useEffect, useRef, RefObject } from 'react'

/**
 * Returns a ref that adds the CSS class `visible` to the element
 * once it scrolls into the viewport. Pair with the `.reveal` / `.reveal.visible`
 * CSS classes defined in index.css.
 */
export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.12
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
