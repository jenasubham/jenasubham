'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export const TracingBeam = ({
  children,
  className,
  path = 'M16,0 L16,220 L10,250 L10,650 L22,680 L22,1000',
}: {
  children: React.ReactNode
  className?: string
  path?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)
  const [y1, setY1] = useState(0)
  const [y2, setY2] = useState(0)

  useEffect(() => {
    const updateDimensions = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight)
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const handleScroll = () => {
      if (!containerRef.current || svgHeight === 0) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // calculate scroll progress within container
      const start = rect.top
      const total = rect.height - windowHeight / 2
      const current = windowHeight / 2 - start

      const progress = Math.min(1, Math.max(0, current / total))

      // y1 moves from 0 to svgHeight
      // y2 trails behind by 220px
      const targetY1 = progress * svgHeight
      const targetY2 = targetY1 - 220

      setY1(targetY1)
      setY2(targetY2)
    }

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [svgHeight])

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <div className="absolute left-0 top-0 hidden h-full w-[40px] md:block" aria-hidden>
        <svg
          viewBox={`0 0 32 ${svgHeight || 1000}`}
          className="block h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d={path}
            fill="none"
            stroke="var(--color-rule)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={path}
            fill="none"
            stroke="url(#tracing-beam-gradient)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <linearGradient
              id="tracing-beam-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#E4FBEA" stopOpacity="0" />
              <stop offset="0.2" stopColor="#B9F2C8" stopOpacity="1" />
              <stop offset="0.7" stopColor="#6BDD92" stopOpacity="1" />
              <stop offset="1" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
