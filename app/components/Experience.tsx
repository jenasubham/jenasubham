import type { CSSProperties } from 'react'

type Role = {
  company: string
  role: string
  location: string
  dates: string
  lead: string
  metrics: string[]
  bullets: string[]
}

const ROLES: Role[] = [
  {
    company: 'PrudentBit',
    role: 'Frontend Engineer',
    location: 'Noida',
    dates: 'Oct 2024 — Present',
    lead: 'Sole frontend engineer driving enterprise secure file-sharing products (Immunefiles & Immuneshare).',
    metrics: ['~64% bandwidth saved', 'Client-side ML', 'Granular Redaction'],
    bullets: [
      'Sole frontend engineer for Immunefiles & Immuneshare — enterprise secure file-sharing products with proctored sharing & IP access controls.',
      'Engineered direct-to-Azure Blob Storage uploads via client-side SAS tokens, bypassing backend transfer and cutting bandwidth ~64%.',
      'Moved proctored-sharing person & device detection client-side via EfficientDet-Lite0, eliminating network latency & inference costs.',
      'Built a custom keyword-based redaction engine from scratch with granular user controls for sensitive document privacy.',
    ],
  },
  {
    company: 'VDOIT Technologies',
    role: 'Frontend Developer Intern',
    location: 'Gurugram',
    dates: 'Jan 2025 — Jul 2025',
    lead: 'Built responsive React component systems and integrated RESTful APIs.',
    metrics: ['25+ React components', '40+ bugs debugged', 'Figma to Code'],
    bullets: [
      'Developed 25+ responsive, reusable React components, converting Figma designs into pixel-perfect user interfaces.',
      'Integrated RESTful APIs and managed global state using Redux Toolkit while debugging 40+ UI and functional bugs.',
      'Collaborated closely with designers and backend teams to establish scalable frontend component architecture.',
    ],
  },
  {
    company: 'TechiEco Solutions',
    role: 'Web Developer Intern',
    location: 'Gurugram',
    dates: 'Oct 2023 — Apr 2024',
    lead: 'Developed web applications and led a team of 6 frontend developers.',
    metrics: ['Team Lead (6 devs)', 'ReactJS & Firebase', 'Agile Delivery'],
    bullets: [
      'Utilized ReactJS and Firebase to build interactive web applications introducing users to TechiEco products.',
      'Led and managed a 6-member developer team in a startup environment, maintaining agile sprints and feature delivery.',
      'Contributed directly to coding, architecture design, and cross-functional team coordination.',
    ],
  },
]

// Circuit-trace rail: vertical runs joined by short diagonal jogs. Each role's
// node sits on the segment that runs past its height — RAIL_X is that segment's
// x (in the 0–32 viewBox) per node, so the dot can be nudged onto the line.
const RAIL_PATH =
  'M16,0 L16,150 L10,180 L10,540 L22,570 L22,860 L16,890 L16,1000'
const RAIL_X = [16, 10, 22]
const VIEWBOX_W = 32
const RAIL_PX = 40 // .exp-rail width — viewBox x maps to px at RAIL_PX / VIEWBOX_W

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1180px] border-t border-rule px-6 py-32 md:px-12 md:py-36"
    >
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
        § 2 — Experience
      </p>
      <h2
        className="mb-16 font-serif font-light leading-[0.95] tracking-[-0.03em]"
        style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
      >
        Where I&apos;ve <span className="italic text-accent">shipped.</span>
      </h2>

      <div className="exp">
        {/* the geometric line itself — purely decorative, drawn by CSS */}
        <div className="exp-rail hidden md:block" aria-hidden>
          <svg
            className="exp-svg"
            viewBox="0 0 32 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* circuit-trace route: vertical runs joined by short diagonal jogs */}
            <path
              className="rail-base"
              d={RAIL_PATH}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
            />
            <path
              className="rail-coral"
              d={RAIL_PATH}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              strokeDasharray={1}
            />
          </svg>
        </div>

        {/* content rows — each role sits beside its node, on the same grid row */}
        <div className="exp-rows grid grid-cols-1 md:grid-cols-[160px_1fr]">
          {ROLES.map((r, i) => (
            <div key={r.company} className="contents">
              {/* rail node, aligned to this role's heading */}
              <div
                className={`exp-node hidden md:flex md:items-start md:gap-3 md:pl-[15px] ${
                  i === 0 ? 'pt-0' : 'pt-12'
                }`}
                style={
                  {
                    '--at': (i / ROLES.length).toFixed(3),
                    // shift the dot from its column slot (x=16) onto this
                    // node's rail segment, without reflowing the labels
                    '--dot-shift': `${(((RAIL_X[i] ?? 16) - 16) * RAIL_PX) / VIEWBOX_W}px`,
                  } as CSSProperties
                }
                aria-hidden
              >
                <span className="exp-dot mt-[6px] h-2.5 w-2.5 shrink-0 rounded-full border" />
                <span className="exp-num mt-[4px] font-mono text-[11px] tracking-[0.1em]">
                  0{i + 1}
                </span>
              </div>

              {/* role content — unchanged */}
              <article
                className={`group border-t border-rule py-12 transition-all duration-500 ${
                  i === 0 ? 'border-t-0 pt-0' : ''
                }`}
              >
                <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-[40px] font-normal leading-none tracking-[-0.02em] md:text-[48px]">
                    <span className="italic text-accent">{r.company}</span>
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {r.dates}
                  </p>
                </header>

                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {r.role} · {r.location}
                </p>

                {/* Lead line — the calm secondary anchor: plain-language
                    "what I built". Company stays the hero; this supports it. */}
                <p className="mb-4 max-w-[42ch] text-[18px] leading-[1.45] text-ink/90 md:text-[20px]">
                  {r.lead}
                </p>

                {/* Metrics — one quiet inline row, separated by middots. No
                    coral, no big numbers: support for the lead, not a dashboard. */}
                <p className="exp-metrics mb-6 font-mono text-[11px] tracking-[0.06em] text-muted">
                  {r.metrics.join('  ·  ')}
                </p>

                {/* Native <details> — zero-JS expand/collapse. Current role
                    open by default; others collapsed to keep the section short.
                    Works without JS and is keyboard-accessible out of the box. */}
                <details className="exp-details" open={i === 0}>
                  <summary className="exp-summary inline-flex cursor-pointer select-none items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    <span className="exp-summary-show">View details</span>
                    <span className="exp-summary-hide">Hide details</span>
                    <span className="exp-summary-mark" aria-hidden>
                      ↓
                    </span>
                  </summary>
                  <ul className="mt-6 space-y-4">
                    {r.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="exp-bullet grid grid-cols-[16px_1fr] gap-3 text-[15px] leading-[1.55] text-ink/70 md:text-[16px]"
                      >
                        <span className="pt-[6px] font-mono text-[10px] text-muted">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
