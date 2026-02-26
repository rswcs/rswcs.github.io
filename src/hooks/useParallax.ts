import { useEffect, useRef, RefObject } from 'react'

interface ParallaxOptions {
  /** How much the element moves relative to scroll. 0 = none, 1 = full scroll speed. Default: 0.4 */
  speed?: number
}

/**
 * Attaches a CSS-transform parallax effect to a DOM element.
 * The element should have `will-change: transform` and overflow hidden on its parent.
 *
 * @returns a ref to attach to the target element
 */
export function useParallax<T extends HTMLElement>(
  options: ParallaxOptions = {}
): RefObject<T> {
  const { speed = 0.4 } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (el) {
            el.style.transform = `translateY(${window.scrollY * speed}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return ref
}
