import AsciiPortraitLazy from './AsciiPortraitLazy'

const SKILLS = [
  { num: '01', label: 'Client Architecture' },
  { num: '02', label: 'Performance Engineering' },
  { num: '03', label: 'On-Device Intelligence' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 pb-10 pt-16 md:px-12 md:pb-12 md:pt-20"
    >
      {/* status bar */}
      <div className="seq-status flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          New Delhi, India
        </span>
      </div>

      {/* the part that shrinks as you scroll away from it */}
      <div className="hero-shrink flex flex-1 flex-col justify-center pb-2">
        {/* name — bold headline, tight leading, scaled to sit nicely in 100vh */}
        <h1
          className="seq-name font-sans font-bold leading-[0.9] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(54px, 10.5vw, 155px)' }}
        >
          <span className="text-accent">Subham Jena</span><span className="dot-white ml-4">.</span>
          <span className="sr-only"> — Frontend Software Engineer in New Delhi, India</span>
        </h1>

        {/* below the name: text on the left, interactive portrait anchored flush right */}
        <div className="mt-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8 xl:gap-14">
          <div className="pb-1">
            {/* tagline — high impact headline designed for CTOs & founders */}
            <div className="hero-parallax max-w-[820px]">
              <h2
                className="seq-tagline font-sans font-semibold leading-[1.08] tracking-[-0.02em] text-heading"
                style={{ fontSize: 'clamp(24px, 3.6vw, 46px)' }}
              >
                Engineering high-performance web apps & client-side intelligence.
              </h2>
            </div>

            {/* skill row */}
            <ul className="mt-8 grid max-w-[820px] grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-10">
              {SKILLS.map((s, i) => (
                <li key={s.num} className={`group seq-skill-${i + 1}`}>
                  <div className="font-mono text-[13px] font-semibold tracking-[0.15em] text-whisper">
                    {s.num}
                  </div>
                  <div className="mt-2 font-sans text-[15px] font-medium tracking-[-0.01em] text-ink">
                    {s.label}
                  </div>
                  {/* a line that grows on hover — width only, 0.3s */}
                  <div className="mt-3 h-px w-6 bg-accent transition-[width] duration-300 ease-out group-hover:w-full" />
                </li>
              ))}
            </ul>

            {/* paragraph */}
            <p className="seq-para mt-6 max-w-[500px] text-[15px] leading-[1.65] text-muted">
              Sole frontend engineer at a product startup — driving enterprise architecture, direct cloud pipelines, and on-device ML detection that eliminates network latency.
            </p>

            {/* CTAs */}
            <div className="seq-cta mt-6 flex flex-wrap items-center gap-6">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-sm border border-rule px-6 py-3 font-mono text-[12px] uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:border-ink/40"
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
                className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.15em] text-muted transition-colors duration-300 hover:text-ink"
              >
                View Resume
                <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* interactive ASCII portrait — anchored flush to the bottom right */}
          <div className="relative hidden justify-center lg:flex lg:items-end">
            {/* Ambient radial glow behind ASCII portrait */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div
                className="h-[440px] w-[440px] rounded-full blur-3xl opacity-80"
                style={{
                  background: 'radial-gradient(circle, rgba(185, 242, 200, 0.12) 0%, rgba(185, 242, 200, 0.03) 45%, transparent 70%)',
                }}
              />
            </div>
            <AsciiPortraitLazy />
          </div>
        </div>
      </div>
    </section>
  )
}
