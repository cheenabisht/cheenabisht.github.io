import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-border" />
        <About />
        <div className="border-t border-border" />
        <Work />
        <div className="border-t border-border" />
        <Skills />
        <div className="border-t border-border" />
        <Education />
        <div className="border-t border-border" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
