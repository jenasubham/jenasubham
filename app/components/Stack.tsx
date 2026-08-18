'use client'

import { useRef, useCallback, useEffect } from 'react'

type Capability = {
  num: string
  title: string
  essence: string
  weight: number // 0–1, honest depth — drives the mastery-bar length
  tools: string[]
}

const CAPABILITIES: Capability[] = [
  {
    num: '01',
    title: 'Frontend & Frameworks',
    essence: 'Building responsive, high-performance web applications.',
    weight: 1,
    tools: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'ShadCN UI',
      'Redux / Redux Toolkit',
      'Framer Motion',
      'Vite',
    ],
  },
  {
    num: '02',
    title: 'Languages',
    essence: 'Core programming languages & web standards.',
    weight: 0.95,
    tools: ['JavaScript', 'HTML5', 'CSS3', 'Java', 'Python', 'SQL'],
  },
  {
    num: '03',
    title: 'Backend & Cloud',
    essence: 'APIs, state management, and direct cloud integration.',
    weight: 0.85,
    tools: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker',
      'Firebase',
      'Azure Blob Storage (SAS)',
      'REST APIs',
      'JWT Auth',
      'Multer',
    ],
  },
  {
    num: '04',
    title: 'Client Performance & ML',
    essence: 'On-device detection, direct uploads, & bandwidth optimization.',
    weight: 0.9,
    tools: [
      'EfficientDet-Lite0',
      'Direct-to-Azure Uploads',
      'Proctored Detection',
      'Custom Document Redaction',
      'Bundle Optimization',
    ],
  },
  {
    num: '05',
    title: 'Design & Tools',
    essence: 'Design-to-code translation and development workflows.',
    weight: 0.8,
    tools: ['Figma', 'Git', 'GitHub', 'Linux', 'Yarn', 'npm', 'Postman', 'VS Code', 'Antigravity'],
  },
]

const FALLOFF_SMOOTH = (p: number) => p * p * (3 - 2 * p)

export default function Stack() {
  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDetailsElement | null)[]>([])
  const targetsRef = useRef<number[]>([])
  const currentRef = useRef<number[]>([])
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number>(0)

  const proximityRadius = 220
  const smoothing = 90 // ms for responsive, buttery smooth rAF interpolation
  const runFrameRef = useRef<(now: number) => void>(() => {})

  const runFrame = useCallback((now: number) => {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05)
    lastRef.current = now
    const tau = Math.max(smoothing, 1) / 1000
    const k = 1 - Math.exp(-dt / tau)

    let moving = false
    const items = itemRefs.current
    for (let i = 0; i < items.length; i++) {
      const el = items[i]
      if (!el) continue
      const target = targetsRef.current[i] || 0
      const cur = currentRef.current[i] || 0
      const next = cur + (target - cur) * k
      const settled = Math.abs(target - next) < 0.001
      const value = settled ? target : next
      currentRef.current[i] = value
      el.style.setProperty('--effect', value.toFixed(4))
      if (!settled) moving = true
    }

    rafRef.current = moving ? requestAnimationFrame(runFrameRef.current) : null
  }, [])

  useEffect(() => {
    runFrameRef.current = runFrame
  }, [runFrame])

  const startLoop = useCallback(() => {
    if (rafRef.current != null) return
    lastRef.current = performance.now()
    rafRef.current = requestAnimationFrame(runFrameRef.current)
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const items = itemRefs.current
      const pointerY = e.clientY
      for (let i = 0; i < items.length; i++) {
        const el = items[i]
        if (!el) continue
        const itemRect = el.getBoundingClientRect()
        const center = itemRect.top + itemRect.height / 2
        const distance = Math.abs(pointerY - center)
        const rawProximity = Math.max(0, 1 - distance / proximityRadius)
        targetsRef.current[i] = FALLOFF_SMOOTH(rawProximity)
      }
      startLoop()
    },
    [startLoop]
  )

  const handlePointerLeave = useCallback(() => {
    targetsRef.current = targetsRef.current.map(() => 0)
    startLoop()
  }, [startLoop])

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section
      id="stack"
      className="mx-auto max-w-[920px] border-t border-rule px-6 py-32 md:px-12 md:py-36"
    >
      <p className="mb-6 font-mono text-[13px] font-semibold uppercase tracking-[0.25em] text-accent">
        § 3 — Capabilities
      </p>
      <h2
        className="mb-16 font-serif font-light leading-[0.95] tracking-[-0.03em]"
        style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
      >
        What I{' '}
        <span className="cap-underline italic text-accent">build with.</span>
      </h2>

      <div
        ref={listRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="cap-index"
      >
        {CAPABILITIES.map((cap, i) => (
          <details
            key={cap.title}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            className={`stack-row group border-t border-rule transition-colors ${
              i === 0 ? 'border-t-0' : ''
            }`}
            style={{
              transform: 'translateX(calc(var(--effect, 0) * 28px))',
              willChange: 'transform',
            }}
          >
            <summary className="flex cursor-pointer select-none items-baseline gap-5 py-7 list-none">
              <span className="font-mono text-[11px] tracking-[0.1em] text-whisper transition-colors duration-300 group-hover:text-accent">
                {cap.num}
              </span>
              <span className="flex-1">
                <span className="cap-title block font-serif text-[26px] font-normal leading-[1.1] tracking-[-0.01em] text-heading transition-colors duration-300 group-hover:text-accent md:text-[30px]">
                  {cap.title}
                </span>
                <span className="cap-essence mt-1 block text-[14px] leading-[1.5] text-muted">
                  {cap.essence}
                </span>
                {/* mastery-bar — honest depth, drawn on entry. Ghost track shows
                    the full scale; the coral fill scales to this capability's weight. */}
                <span className="cap-bar-track" aria-hidden="true">
                  <span
                    className="cap-bar"
                    style={{ ['--w' as string]: cap.weight }}
                  />
                </span>
              </span>
              {/* peek — the first tools, clipped into a fade. A visible
                  fade-to-nothing is the universal "there's more here" signal.
                  Desktop only; fades out on open so it doesn't duplicate the list. */}
              <span
                aria-hidden="true"
                className="cap-peek hidden font-mono text-[11px] tracking-[0.08em] text-whisper transition-opacity duration-300 group-open:opacity-0 md:block"
              >
                {cap.tools.slice(0, 3).join('  ·  ')}
              </span>
              {/* count + arrow — the explicit affordance: how much is inside,
                  and that it opens. The arrow turns to point down on open. */}
              <span className="cap-count inline-flex items-baseline gap-1.5 whitespace-nowrap font-mono text-[11px] tracking-[0.1em] text-muted transition-colors duration-300 group-hover:text-accent">
                <span>{cap.tools.length} tools</span>
                <span
                  aria-hidden="true"
                  className="cap-arrow transition-transform duration-300 group-open:rotate-90"
                >
                  →
                </span>
              </span>
            </summary>

            {/* the tools — revealed on demand, never dumped. Each stagger-fades
                in like a note when the row opens (CSS only). */}
            <p className="cap-tools -mt-1 pb-8 pl-[44px] pr-8 font-mono text-[13px] leading-[1.9] tracking-[0.01em] text-muted">
              {cap.tools.map((tool, k) => (
                <span
                  key={tool}
                  className="cap-tool"
                  style={{ ['--i' as string]: k }}
                >
                  {tool}
                </span>
              ))}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
