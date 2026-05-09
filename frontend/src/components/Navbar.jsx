import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
  MonitorSmartphone, MessageSquare, Smartphone, Video, Headset, Users, Server, Printer, Cloud,
  Code, PlayCircle, PhoneCall, Lightbulb, BarChart, Info, Building2, MessageCircle,
  Ticket, FileText, Shield, HelpCircle, BookOpen, Phone, Film, ChevronDown, ChevronRight
} from 'lucide-react'

const NAV_ITEMS = [
  {
    label: 'Product',
    dropdown: [
      {
        label: 'UC Client',
        icon: <MonitorSmartphone size={16} />,
        subDropdown: [
          { label: 'SMS', icon: <MessageSquare size={14} /> },
          { label: 'Mobile Application', icon: <Smartphone size={14} /> },
          { label: 'Video Conferencing - Contact Sharing', icon: <Video size={14} /> }
        ]
      },
      {
        label: 'Contact Center',
        icon: <Headset size={16} />,
        subDropdown: [
          { label: 'Workforce Management', icon: <Users size={14} /> }
        ]
      },
      { label: 'PBX-SIP-Trunk', icon: <Server size={16} /> },
      { label: 'E-fax', icon: <Printer size={16} /> },
      { label: 'Enterprise Cloud SMS', icon: <Cloud size={16} /> }
    ]
  },
  {
    label: 'API Integration',
    dropdown: [
      { label: 'API Applications', icon: <Code size={16} />, href: '/api-applications' },
      { label: 'API Videos', icon: <PlayCircle size={16} />, href: '/api-videos' }
    ]
  },
  {
    label: 'Services',
    dropdown: [
      { label: 'VoIP Services', icon: <PhoneCall size={16} /> },
      { label: 'Solutions', icon: <Lightbulb size={16} /> },
      { label: 'Compare Providers', icon: <BarChart size={16} /> }
    ]
  },
  {
    label: 'About Us',
    dropdown: [
      { label: 'PCS VoIP', icon: <Info size={16} /> },
      { label: 'Our Clients', icon: <Building2 size={16} /> },
      { label: 'Testimonials', icon: <MessageCircle size={16} /> }
    ]
  },
  {
    label: 'Support',
    dropdown: [
      { label: 'Create a Ticket', icon: <Ticket size={16} /> },
      { label: 'Terms of Service', icon: <FileText size={16} /> },
      { label: 'Privacy Policy', icon: <Shield size={16} /> },
      { label: 'FAQ', icon: <HelpCircle size={16} /> }
    ]
  },
  {
    label: 'Resources',
    dropdown: [
      { label: 'Blog', icon: <BookOpen size={16} /> },
      { label: 'Phones', icon: <Phone size={16} /> },
      { label: 'Videos', icon: <Film size={16} /> }
    ]
  },
  { label: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

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
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="PCS Logo" />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx} className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}>
                {item.href ? (
                  <Link to={item.href} className="nav-link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="nav-link" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {item.label} {item.dropdown && <ChevronDown size={14} style={{ opacity: 0.7 }} />}
                  </span>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <ul className="dropdown-menu">
                    {item.dropdown.map((dropItem, dIdx) => (
                      <motion.li
                        key={dIdx}
                        className={`dropdown-item ${dropItem.subDropdown ? 'has-sub-dropdown' : ''}`}
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {dropItem.href ? (
                          <Link to={dropItem.href} className="dropdown-link" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', width: '100%' }} onClick={closeMenu}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              {dropItem.icon && <span style={{ color: 'var(--clr-green-teal)', display: 'flex' }}>{dropItem.icon}</span>}
                              {dropItem.label}
                            </span>
                          </Link>
                        ) : (
                          <span style={{ cursor: 'default', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              {dropItem.icon && <span style={{ color: 'var(--clr-green-teal)', display: 'flex' }}>{dropItem.icon}</span>}
                              {dropItem.label}
                            </span>
                            {dropItem.subDropdown && <ChevronRight size={14} style={{ opacity: 0.5 }} />}
                          </span>
                        )}

                        {/* Sub Dropdown Menu */}
                        {dropItem.subDropdown && (
                          <ul className="sub-dropdown-menu">
                            {dropItem.subDropdown.map((subItem, sIdx) => (
                              <motion.li
                                key={sIdx}
                                className="sub-dropdown-item"
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              >
                                <span style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  {subItem.icon && <span style={{ color: 'var(--clr-green-teal)', display: 'flex' }}>{subItem.icon}</span>}
                                  {subItem.label}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link to="/contact" className="btn btn-primary nav-cta" style={{ whiteSpace: 'nowrap' }}>
          Request Demo
        </Link>

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
            {NAV_ITEMS.map((item, idx) => (
              <div key={idx} className="mobile-nav-item">
                {item.href ? (
                  <Link to={item.href} onClick={closeMenu} className="mobile-link">
                    {item.label}
                  </Link>
                ) : (
                  <div className="mobile-link" style={{ cursor: 'default', color: 'var(--text-primary)' }}>
                    {item.label}
                    {item.dropdown && (
                      <div className="mobile-dropdown" style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                        {item.dropdown.map((dItem, dIdx) => (
                          <div key={dIdx} style={{ marginBottom: '0.5rem' }}>
                            {dItem.href ? (
                              <Link to={dItem.href} onClick={closeMenu} style={{ textDecoration: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                {dItem.icon && <span style={{ color: 'var(--clr-green-teal)' }}>{dItem.icon}</span>}
                                {dItem.label}
                              </Link>
                            ) : (
                              <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                {dItem.icon && <span style={{ color: 'var(--clr-green-teal)' }}>{dItem.icon}</span>}
                                {dItem.label}
                              </span>
                            )}
                            {dItem.subDropdown && (
                              <div style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                {dItem.subDropdown.map((sItem, sIdx) => (
                                  <div key={sIdx} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                                    {sItem.icon && <span style={{ color: 'var(--clr-green-teal)' }}>{sItem.icon}</span>}
                                    {sItem.label}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 16 }} onClick={closeMenu}>
              Request Demo
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
