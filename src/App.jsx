import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import GitHubActivity from './sections/GitHubActivity'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <GitHubActivity />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
