import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const Linkedin = ({ size = 16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Twitter = ({ size = 16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Facebook = ({ size = 16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Youtube = ({ size = 16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

const QUICK_LINKS = [
  { label: 'Product',         href: '#features' },
  { label: 'API Integration', href: '#api' },
  { label: 'Services',        href: '#services' },
  { label: 'About Us',        href: '#about' },
  { label: 'Pricing',         href: '#pricing' },
]

const SUPPORT_LINKS = [
  { label: 'Support Center',  href: '#support' },
  { label: 'Documentation',   href: '#resources' },
  { label: 'Status Page',     href: '#status' },
  { label: 'Community Forum', href: '#community' },
  { label: 'Contact Us',      href: '#contact' },
]

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="section-wrap">
        <div className="footer-grid">
          {/* Brand column */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/logo.png" alt="PCS VoIP" />
            <p>
              Pegasus Communication Solutions — delivering reliable, flexible,
              and affordable VoIP services to businesses of every size and
              industry across the nation.
            </p>

            <div className="social-links">
              <a href="#linkedin"  aria-label="LinkedIn"  className="social-link"><Linkedin  size={16} /></a>
              <a href="#twitter"   aria-label="Twitter"   className="social-link"><Twitter   size={16} /></a>
              <a href="#facebook"  aria-label="Facebook"  className="social-link"><Facebook  size={16} /></a>
              <a href="#youtube"   aria-label="YouTube"   className="social-link"><Youtube   size={16} /></a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Company</h4>
            <ul>
              {QUICK_LINKS.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Support</h4>
            <ul>
              {SUPPORT_LINKS.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+18005550100" style={{ display:'flex', gap: 8, alignItems:'center' }}>
                  <Phone size={14} style={{ color: 'var(--clr-green-teal)' }} />
                  1-800-555-0100
                </a>
              </li>
              <li>
                <a href="mailto:info@pcsvoip.com" style={{ display:'flex', gap: 8, alignItems:'center' }}>
                  <Mail size={14} style={{ color: 'var(--clr-green-teal)' }} />
                  info@pcsvoip.com
                </a>
              </li>
              <li>
                <span style={{ display:'flex', gap: 8, alignItems:'flex-start', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <MapPin size={14} style={{ color: 'var(--clr-green-teal)', marginTop: 2, flexShrink: 0 }} />
                  Nationwide Service — Available in all 50 States
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pegasus Communication Solutions (PCS VoIP). All rights reserved.</p>
          <p>
            <a href="#privacy" style={{ color:'var(--text-muted)', marginRight:16, textDecoration:'none' }}>Privacy Policy</a>
            <a href="#terms"   style={{ color:'var(--text-muted)', textDecoration:'none' }}>Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
