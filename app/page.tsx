import {
  Nav,
  MotionLayer,
  Hero,
  Bio,
  Experience,
  Stack,
  Projects,
  Footer,
} from './components'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-[12px] focus:font-semibold focus:uppercase focus:tracking-wider focus:text-[#131217] focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to main content
      </a>
      <Nav />
      <MotionLayer />
      <main id="main-content">
        <Hero />
        <Bio />
        <Experience />
        <Stack />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
