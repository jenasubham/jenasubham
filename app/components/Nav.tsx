const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3.5 sm:px-6 md:px-12 md:py-4">
        <a
          href="#top"
          aria-label="Subham Jena - Back to top"
          className="font-sans text-[14px] sm:text-[15px] font-semibold tracking-[-0.01em] text-ink whitespace-nowrap shrink-0"
        >
          Subham Jena<span className="text-accent">.</span>
        </a>
        <ul className="flex items-center gap-3.5 sm:gap-6 md:gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="py-1 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.1em] sm:tracking-[0.15em] text-muted transition-colors duration-200 hover:text-ink active:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
