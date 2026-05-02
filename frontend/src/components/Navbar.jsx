import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Product',         href: '#features' },
  { label: 'API Integration', href: '#api' },
  { label: 'Services',        href: '#services' },
  { label: 'About Us',        href: '#about' },
  { label: 'Support',         href: '#support' },
  { label: 'Resources',       href: '#resources' },
  { label: 'Contact',         href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="PCS VoIP – Pegasus Communication Solutions" />
        </a>

        {/* Desktop links */}
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {NAV_ITEMS.map(item => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn btn-primary nav-cta">
          Request Demo
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mobile-menu open"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map(item => (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ marginTop: 16 }} onClick={closeMenu}>
              Request Demo
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
