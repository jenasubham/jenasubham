export default function Footer() {
  const cols = [
    {
      label: 'Reach',
      items: [
        { text: 'subhamjena@gmail.com', href: 'mailto:subhamjena@gmail.com' },
      ],
    },
    {
      label: 'Code & Web',
      items: [
        { text: 'GitHub', href: 'https://github.com/jenasubham' },
        { text: 'Resume', href: '/resume.pdf', newTab: true },
      ],
    },
    {
      label: 'Social',
      items: [
        { text: 'LinkedIn', href: 'https://linkedin.com/in/jenasubham' },
      ],
    },
    {
      label: 'Location',
      items: [
        { text: 'New Delhi, India', href: '#' },
        { text: 'UTC+5:30', href: '#' },
      ],
    },
  ]

  return (
    <footer id="contact" className="mx-auto max-w-[1100px] border-t border-rule px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-36">
      <p
        className="mb-20 max-w-[900px] font-serif font-light italic leading-[1.15] tracking-[-0.02em]"
        style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
      >
        I&apos;m focused on high-performance frontend architecture — direct cloud uploads, client-side intelligence, and <span className="text-accent">responsive web interfaces</span> that feel instant.
      </p>

      <div className="grid grid-cols-2 gap-8 border-t border-rule pt-12 md:grid-cols-4">
        {cols.map((col) => (
          <div key={col.label}>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {col.label}
            </p>
            {col.items.map((item) => (
              <a
                key={item.text}
                href={item.href}
                target={item.href.startsWith('http') || item.newTab ? '_blank' : undefined}
                rel={item.href.startsWith('http') || item.newTab ? 'noopener noreferrer' : undefined}
                className="block py-1 text-[14px] text-ink transition-colors duration-200 hover:text-accent"
              >
                {item.text}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-between border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
        <div>© Subham Jena · {new Date().getFullYear()}</div>
        <div>Built solo</div>
      </div>
    </footer>
  )
}
