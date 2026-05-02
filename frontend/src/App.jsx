import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'

export default function App() {
  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
      </main>
      <Footer />
    </>
  )
}
