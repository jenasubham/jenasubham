export default function Bio() {
  return (
    <section id="about" className="mx-auto max-w-[920px] border-t border-rule px-6 py-32 md:px-12 md:py-36">
      <h2 className="mb-6 font-mono text-[13px] font-semibold uppercase tracking-[0.25em] text-accent">
        § 1 — Introduction<span className="sr-only"> & Biography</span>
      </h2>

      <div className="font-serif text-[24px] leading-[1.6] text-heading">
        <p className="mb-6 first:first-letter:float-left first:first-letter:mr-3 first:first-letter:mt-2 first:first-letter:font-serif first:first-letter:text-[85px] first:first-letter:font-normal first:first-letter:italic first:first-letter:leading-[0.85] first:first-letter:text-accent">
          I&apos;m a Frontend Software Engineer currently leading frontend architecture at <em className="not-italic font-semibold text-accent">PrudentBit</em>, where I independently develop and scale up enterprise security products like <em className="not-italic font-semibold text-accent">Immunefiles</em> and <em className="not-italic font-semibold text-accent">Immuneshare</em>. Earlier, I developed web applications and component systems at <em className="not-italic font-semibold text-accent">VDOIT Technologies</em> and <em className="not-italic font-semibold text-accent">TechiEco Solutions</em>.
        </p>

        <p className="text-muted">
          I focus on client-side performance, modern frontend architecture, and edge intelligence — from engineering <strong className="font-semibold text-accent">direct cloud uploads</strong> that cut server bandwidth by <strong className="font-semibold text-accent">64%</strong> to moving <strong className="font-semibold text-accent">ML proctored detection</strong> directly onto the client to eliminate network latency.
        </p>
      </div>
    </section>
  )
}