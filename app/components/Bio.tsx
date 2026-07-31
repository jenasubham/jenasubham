export default function Bio() {
  return (
    <section id="about" className="mx-auto max-w-[720px] border-t border-rule px-6 py-32 md:px-12 md:py-36">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
        § 1 — Introduction
      </p>

      <div className="font-serif text-[22px] leading-[1.65] text-ink">
        <p className="mb-6 first:first-letter:float-left first:first-letter:mr-3 first:first-letter:mt-2 first:first-letter:font-serif first:first-letter:text-[80px] first:first-letter:font-normal first:first-letter:italic first:first-letter:leading-[0.85] first:first-letter:text-accent">
          I&apos;m a Frontend Engineer currently leading frontend architecture at <em className="not-italic text-accent">PrudentBit</em>, where I independently developing and scaling up enterprise security products like <em className="not-italic text-accent">Immunefiles</em> and <em className="not-italic text-accent">Immuneshare</em>. Earlier, I developed web applications and component systems at <em className="not-italic text-accent">VDOIT Technologies</em> and <em className="not-italic text-accent">TechiEco Solutions</em>.
        </p>

        <p className="text-muted">
          I focus on client-side performance and smart architecture — from engineering direct cloud uploads that cut server bandwidth by 64% to moving ML proctored detection directly onto the client to eliminate network latency.
        </p>
      </div>
    </section>
  )
}