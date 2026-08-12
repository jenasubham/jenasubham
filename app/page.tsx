import Nav from './components/Nav'
import MotionLayer from './components/MotionLayer'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <MotionLayer />
      <main>
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
