import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'
import ContactPage from './components/ContactPage'
import ChatbotWidget from './components/ChatbotWidget'
import ApiIntegration from './components/ApiIntegration'
import ApiVideos from './components/ApiVideos'


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
        <Route path="/api-applications" element={<ApiIntegration />} />
        <Route path="/api-videos" element={<ApiVideos />} />
      </Routes>
      <Footer />
      <ChatbotWidget />
    </Router>
  )
}
