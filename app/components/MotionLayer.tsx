'use client'

import { useEffect } from 'react'

/**
 * The site's entire scroll-driven motion runs through this one component.
 * It sets CSS custom properties on <html> and data-attributes on <body>;
 * the actual transforms/transitions live in globals.css.
 */
export default function MotionLayer() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement
    const body = document.body
    const expEl = document.getElementById('experience')

    let ticking = false

    const apply = () => {
      ticking = false
      const y = window.scrollY
      const vh = window.innerHeight
      const max = document.documentElement.scrollHeight - vh

      const hero = Math.min(1, Math.max(0, y / vh))
      const page = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0

      root.style.setProperty('--scroll', String(y))
      root.style.setProperty('--hero', hero.toFixed(4))
      root.style.setProperty('--page-progress', page.toFixed(4))

      if (expEl) {
        const rect = expEl.getBoundingClientRect()
        const exp = Math.min(1, Math.max(0, (vh * 0.7 - rect.top) / rect.height))
        root.style.setProperty('--exp-progress', exp.toFixed(4))
      }

      if (y > 10) body.setAttribute('data-scrolled', '')
      else body.removeAttribute('data-scrolled')

      if (y > vh * 0.6) body.setAttribute('data-nav', '')
      else body.removeAttribute('data-nav')
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(apply)
    }

    apply()

    if (!reduce) {
      body.setAttribute('data-motion', '')
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
    }

    return () => {
      if (!reduce) {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }
  }, [])

  return null
}
