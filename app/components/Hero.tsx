import AsciiPortraitLazy from './AsciiPortraitLazy'

const SKILLS = [
  { num: '01', line1: 'Client', line2: 'Architecture' },
  { num: '02', line1: 'Performance', line2: 'Engineering' },
  { num: '03', line1: 'On-Device', line2: 'Intelligence' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col px-5 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-10 md:px-12 md:pb-12 md:pt-20"
    >
      {/* status bar */}
      <div className="seq-status flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          New Delhi, India
        </span>
      </div>

      {/* the part that shrinks as you scroll away from it */}
      <div className="hero-shrink flex flex-1 flex-col justify-start md:justify-center pt-2 sm:pt-4 md:pt-0 pb-2">
        {/* Responsive Grid:
            Mobile: 
              Row 1: Subham (full width, massive font)
              Row 2: Jena. on left, ASCII portrait starts on the right from the line of Jena!
              Row 3: Full-width Tagline, 2-line Skills, Paragraph, CTAs
            Desktop (lg+):
              Row 1: Subham Jena. inline headline across both columns
              Row 2: Left column (Tagline, Skills, Paragraph, CTAs), Right column (ASCII portrait flush bottom-right)
        */}
        <div className="grid grid-cols-[1fr_auto] items-start gap-x-3 gap-y-3 sm:gap-x-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-x-8 xl:gap-x-14">
          
          {/* Main semantic h1: displays as contents on mobile (so Subham is row 1, Jena. is row 2) and block on desktop */}
          <h1 className="contents lg:col-span-2 lg:row-start-1 lg:block seq-name font-sans font-bold leading-[0.88] lg:leading-[0.9] tracking-[-0.04em]">
            <span
              className="col-span-2 col-start-1 row-start-1 block text-accent lg:inline"
              style={{ fontSize: 'clamp(50px, 13vw, 155px)' }}
            >
              Subham
            </span>{' '}
            <span
              className="col-start-1 row-start-2 self-start block text-accent whitespace-nowrap lg:inline"
              style={{ fontSize: 'clamp(50px, 13vw, 155px)' }}
            >
              Jena<span className="dot-white ml-1.5 md:ml-4">.</span>
            </span>
            <span className="sr-only"> — Frontend Software Engineer in New Delhi, India</span>
          </h1>

          {/* interactive ASCII portrait:
              On mobile: sits in col 2 row 2 self-start (starts right from the line of Jena!)
              On desktop: sits in col 2 row 2 self-end (anchored flush bottom-right) */}
          <div className="relative col-start-2 row-start-2 self-start flex items-center justify-end lg:col-start-2 lg:row-start-2 lg:self-end">
            {/* Ambient radial glow behind ASCII portrait - no border, no overflow clipping */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div
                className="h-[140px] w-[140px] sm:h-[240px] sm:w-[240px] lg:h-[440px] lg:w-[440px] rounded-full blur-2xl lg:blur-3xl opacity-80"
                style={{
                  background: 'radial-gradient(circle, rgba(185, 242, 200, 0.18) 0%, rgba(185, 242, 200, 0.04) 55%, transparent 70%)',
                }}
              />
            </div>
            <AsciiPortraitLazy />
          </div>

          {/* Content: Tagline, Skills, Paragraph, CTAs
              On mobile: spans full width (col-span-2 row-start-3)
              On desktop: col 1 row 2 */}
          <div className="col-span-2 row-start-3 mt-4 pb-1 lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:mt-0">
            {/* tagline */}
            <div className="hero-parallax max-w-[820px]">
              <h2
                className="seq-tagline font-sans font-semibold leading-[1.12] md:leading-[1.08] tracking-[-0.02em] text-heading"
                style={{ fontSize: 'clamp(21px, 3.6vw, 46px)' }}
              >
                Engineering high-performance web apps & client-side intelligence.
              </h2>
            </div>

            {/* skill row: 2 lines on mobile, each broken into 2 lines; 3 cols on desktop */}
            <ul className="mt-5 sm:mt-6 md:mt-8 grid max-w-[820px] grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 sm:gap-10">
              {SKILLS.map((s, i) => (
                <li
                  key={s.num}
                  className={`group seq-skill-${i + 1} ${i === 2 ? 'col-span-1' : ''}`}
                >
                  <div className="font-mono text-[12px] md:text-[13px] font-semibold tracking-[0.15em] text-whisper">
                    {s.num}
                  </div>
                  <div className="mt-1 md:mt-2 font-sans text-[13.5px] md:text-[15px] font-medium leading-[1.25] md:leading-normal tracking-[-0.01em] text-ink">
                    <span className="block sm:inline">{s.line1}</span>{' '}
                    <span className="block sm:inline">{s.line2}</span>
                  </div>
                  {/* a line that grows on hover */}
                  <div className="mt-2 md:mt-3 h-px w-6 bg-accent transition-[width] duration-300 ease-out group-hover:w-full" />
                </li>
              ))}
            </ul>

            {/* paragraph */}
            <p className="seq-para mt-5 md:mt-6 max-w-[500px] text-[14px] md:text-[15px] leading-[1.6] md:leading-[1.65] text-muted">
              Frontend Engineer at a product based startup - driving enterprise architecture, direct cloud pipelines, and on-device ML detection that eliminates network latency.
            </p>

            {/* CTAs */}
            <div className="seq-cta mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-sm border border-rule px-5 py-2.5 sm:px-6 sm:py-3 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:border-ink/40 active:border-accent"
              >
                View Work
                <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 text-accent">
                  &rarr;
                </span>
              </a>
              <a
                href="/Subham_Jena_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.15em] text-muted transition-colors duration-300 hover:text-ink active:text-accent"
              >
                View Resume
                <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
