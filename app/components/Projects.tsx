export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-[1100px] border-t border-rule px-6 py-32 md:px-12 md:py-36">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
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
        <a
          href="https://github.com/jenasubham/careerplus"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-still proj-still--on-accent overflow-hidden group col-span-1 row-span-1 flex flex-col justify-between rounded-sm bg-accent p-8 transition-transform duration-500 ease-out hover:-translate-y-1 md:col-span-2 md:row-span-2 md:p-10"
        >
          <div className="relative z-10">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-background/70">
              <span
                aria-hidden
                className="proj-dot--live inline-block h-1.5 w-1.5 rounded-full bg-background text-background"
              />
              Now · Ongoing Project
            </p>
            <h3 className="mt-4 font-serif text-[42px] font-normal leading-[0.95] tracking-[-0.02em] text-background md:text-[54px]">
              CareerPlus —<br />
              <span className="italic">Full-Stack</span> Job Portal
            </h3>
          </div>
          <p className="relative z-10 text-[14px] leading-[1.65] text-background/80 md:text-[15px]">
            Full-stack MERN job portal featuring JWT authentication, role-based access for job seekers and employers, Redux Toolkit state management, custom React hooks for dynamic job filtering, admin dashboard, and file upload support via Multer. Built with React.js, Express, MongoDB Atlas, Tailwind CSS, and ShadCN UI.
          </p>
        </a>

        {/* Personal Finance Tracker */}
        <div
          className="proj-card group col-span-1 row-span-1 flex flex-col justify-between rounded-sm border border-rule bg-ink/[0.025] p-7 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 md:col-span-2"
        >
          <p className="relative z-10 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            2026 · Next.js 14 & Firebase
          </p>
          <div className="relative z-10">
            <h3 className="font-serif text-[30px] font-normal leading-[1.05] tracking-[-0.02em] text-ink/85 transition-colors duration-300 group-hover:text-ink">
              Personal Finance <span className="italic">Tracker</span>
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-muted">
              Mobile-first PWA built solo end-to-end for tracking daily expenses & spending patterns. Features Firebase Auth, Firestore transaction history, Android Web Share Target for auto-parsing UPI receipts from PhonePe & Paytm, category breakdowns, and Recharts analytics.
            </p>
          </div>
        </div>

        {/* Immunefiles & Immuneshare */}
        <div
          className="proj-card group col-span-1 row-span-1 flex flex-col justify-between rounded-sm border border-rule bg-ink/[0.025] p-7 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 md:col-span-2"
        >
          <p className="relative z-10 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            Enterprise Product · PrudentBit
          </p>
          <div className="relative z-10">
            <h3 className="font-serif text-[30px] font-normal leading-[1.05] tracking-[-0.02em] text-ink/85 transition-colors duration-300 group-hover:text-ink">
              Immunefiles & <span className="italic">Immuneshare</span>
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-muted">
              Enterprise secure file-sharing products featuring client-side direct-to-Azure SAS uploads (~64% bandwidth savings), on-device ML proctored sharing (EfficientDet-Lite0), and custom document redaction.
            </p>
          </div>
        </div>

        {/* Client-Side Document Redaction */}
        <div
          className="proj-card group col-span-1 row-span-1 flex flex-col justify-between rounded-sm border border-rule bg-ink/[0.025] p-7 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 md:col-span-2"
        >
          <p className="relative z-10 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            Core Engine · Frontend
          </p>
          <div className="relative z-10">
            <h3 className="font-serif text-[30px] font-normal leading-[1.05] tracking-[-0.02em] text-ink/85 transition-colors duration-300 group-hover:text-ink">
              Granular Document <span className="italic">Redaction</span>
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-muted">
              Custom keyword-based redaction tool built from scratch, allowing users to dynamically define exact target words and phrases to hide inside sensitive documents.
            </p>
          </div>
        </div>

        {/* Portfolio Site */}
        <a
          href="https://github.com/jenasubham/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-card group col-span-1 row-span-1 flex flex-col justify-between rounded-sm border border-rule bg-ink/[0.025] p-7 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 md:col-span-2"
        >
          <p className="relative z-10 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            2026 · Next.js 16
          </p>
          <div className="relative z-10">
            <h3 className="font-serif text-[30px] font-normal leading-[1.05] tracking-[-0.02em] text-ink/85 transition-colors duration-300 group-hover:text-ink">
              Personal <span className="italic">Portfolio</span>
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-muted">
              Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4. Features responsive design tokens, zero-JS motion fallbacks, and interactive canvas ASCII art.
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}
