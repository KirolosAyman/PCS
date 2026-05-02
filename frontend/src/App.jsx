import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'
import ContactPage from './components/ContactPage'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default function App() {
  return (
    <Router>
      <BackgroundAnimation />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}
