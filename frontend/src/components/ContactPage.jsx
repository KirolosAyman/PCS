import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <section className="contact-page" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="contact-header"
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Contact Us</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Get in touch with Pegasus Communication Solutions today.
          </p>
        </motion.div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Headquarters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-card"
            style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Headquarters</h2>
            <address style={{ fontStyle: 'normal', color: 'var(--text-light)', lineHeight: '1.6' }}>
              339 Brixham Ct<br />
              Fishers, IN 46038
            </address>
          </motion.div>

          {/* Las Vegas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-card"
            style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Las Vegas</h2>
            <address style={{ fontStyle: 'normal', color: 'var(--text-light)', lineHeight: '1.6' }}>
              4055 Spencer St. Suite 206<br />
              Las Vegas, Nevada 89119
            </address>
          </motion.div>

          {/* Virginia Beach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="contact-card"
            style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Virginia Beach</h2>
            <address style={{ fontStyle: 'normal', color: 'var(--text-light)', lineHeight: '1.6' }}>
              2397 Liberty Way, Suite 103<br />
              Virginia Beach, Virginia 23452
            </address>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="contact-card"
            style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}
          >
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>Call Us</h2>
<a href="tel:913-981-1100" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '1.2rem' }}>913-981-1100</a>            </div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>Email Us</h2>
              <a href="mailto:sales@pcsusa.com" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '1.2rem' }}>sales@pcsusa.com</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
