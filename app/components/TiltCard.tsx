'use client'

import React, { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'a'
  href?: string
  target?: string
  rel?: string
  maxTilt?: number
}

export default function TiltCard({
  children,
  className,
  as = 'div',
  href,
  target,
  rel,
  maxTilt = 12,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const [transform, setTransform] = useState('')
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const rotX = (y - 0.5) * -maxTilt * 2
    const rotY = (x - 0.5) * maxTilt * 2

    setTransform(`perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`)
    setGlareStyle({
      opacity: 0.22,
      x: x * 100,
      y: y * 100,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
    setGlareStyle({ opacity: 0, x: 50, y: 50 })
  }

  const Component = (as === 'a' ? 'a' : 'div') as React.ElementType

  return (
    <Component
      ref={cardRef}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden rounded-sm transition-all will-change-transform',
        className
      )}
      style={{
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      {...props}
    >
      {/* 3D Specular Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: glareStyle.opacity,
          background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 70%)`,
        }}
      />
      {children}
    </Component>
  )
}
