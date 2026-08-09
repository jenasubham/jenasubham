import TiltCard from './TiltCard'

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-[1100px] border-t border-rule px-6 py-32 md:px-12 md:py-36">
      <p className="mb-6 font-mono text-[13px] font-semibold uppercase tracking-[0.25em] text-accent">
        § 5 — Projects & Featured Work
      </p>
      <h2
        className="mb-16 font-serif font-light leading-[0.95] tracking-[-0.03em]"
        style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
      >
        What I&apos;ve <span className="italic text-accent">built.</span>
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
        {/* FEATURED — CareerPlus Full-Stack Job Portal */}
        <TiltCard
          as="a"
          href="https://github.com/jenasubham/careerplus"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-still proj-still--on-accent group col-span-1 row-span-1 flex flex-col justify-between rounded-sm bg-accent p-8 md:col-span-2 md:row-span-2 md:p-10"
        >
          <div className="relative z-10">
            <p className="proj-tag-dark flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]">
              <span
                aria-hidden
                className="proj-dot--live inline-block h-2 w-2 mr-1 rounded-full bg-[#050505]"
              />
              Now · Ongoing Project
            </p>
            <h3 className="proj-title-dark mt-4 font-serif text-[42px] font-normal leading-[0.95] tracking-[-0.02em] md:text-[54px]">
              CareerPlus -<br />
              <span className="italic">Full-Stack</span> Job Portal
            </h3>
          </div>
          <p className="proj-desc-dark relative z-10 text-[14px] leading-[1.65] font-medium md:text-[15px]">
            Full-stack MERN job portal featuring JWT authentication, role-based access for job seekers and employers, Redux Toolkit state management, custom React hooks for dynamic job filtering, admin dashboard, and file upload support via Multer. Built with React.js, Express, MongoDB Atlas, Tailwind CSS, and ShadCN UI.
          </p>
        </TiltCard>

        {/* Personal Finance Tracker */}
        <TiltCard
          className="proj-card group col-span-1 row-span-1 flex flex-col justify-between rounded-sm border border-rule bg-ink/[0.025] p-7 md:col-span-2"
        >
          <p className="relative z-10 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            2026 · Next.js 14 & Firebase
          </p>
          <div className="relative z-10">
            <h3 className="font-serif text-[30px] font-normal leading-[1.05] tracking-[-0.02em] text-heading transition-colors duration-300 group-hover:text-heading">
              Personal Finance <span className="italic">Tracker</span>
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-muted">
              Mobile-first PWA built solo end-to-end for tracking daily expenses & spending patterns. Features Firebase Auth, Firestore transaction history, Android Web Share Target for auto-parsing UPI receipts from PhonePe & Paytm, category breakdowns, and Recharts analytics.
            </p>
          </div>
        </TiltCard>

        {/* Immunefiles & Immuneshare */}
        <TiltCard
          className="proj-card group col-span-1 row-span-1 flex flex-col justify-between rounded-sm border border-rule bg-ink/[0.025] p-7 md:col-span-2"
        >
          <p className="relative z-10 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            Enterprise Product · PrudentBit
          </p>
          <div className="relative z-10">
            <h3 className="font-serif text-[30px] font-normal leading-[1.05] tracking-[-0.02em] text-heading transition-colors duration-300 group-hover:text-heading">
              Immunefiles & <span className="italic">Immuneshare</span>
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-muted">
              Enterprise secure file-sharing products featuring client-side direct-to-Azure SAS uploads (~64% bandwidth savings), on-device ML proctored sharing (EfficientDet-Lite0), and custom document redaction.
            </p>
          </div>
        </TiltCard>

        {/* Client-Side Document Redaction */}
        <TiltCard
          className="proj-card group col-span-1 row-span-1 flex flex-col justify-between rounded-sm border border-rule bg-ink/[0.025] p-7 md:col-span-2"
        >
          <p className="relative z-10 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            Core Engine · Frontend
          </p>
          <div className="relative z-10">
            <h3 className="font-serif text-[30px] font-normal leading-[1.05] tracking-[-0.02em] text-heading transition-colors duration-300 group-hover:text-heading">
              Granular Document <span className="italic">Redaction</span>
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-muted">
              Custom keyword-based redaction tool built from scratch, allowing users to dynamically define exact target words and phrases to hide inside sensitive documents.
            </p>
          </div>
        </TiltCard>

        {/* Portfolio Site */}
        <TiltCard
          as="a"
          href="https://github.com/jenasubham/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-card group col-span-1 row-span-1 flex flex-col justify-between rounded-sm border border-rule bg-ink/[0.025] p-7 md:col-span-2"
        >
          <p className="relative z-10 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            2026 · Next.js 16
          </p>
          <div className="relative z-10">
            <h3 className="font-serif text-[30px] font-normal leading-[1.05] tracking-[-0.02em] text-heading transition-colors duration-300 group-hover:text-heading">
              Personal <span className="italic">Portfolio</span>
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-muted">
              Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4. Features responsive design tokens, zero-JS motion fallbacks, and interactive canvas ASCII art.
            </p>
          </div>
        </TiltCard>
      </div>
    </section>
  )
}
