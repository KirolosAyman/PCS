import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const INDUSTRIES = [
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🛒', label: 'Retail' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🚚', label: 'Transportation' },
  { icon: '💼', label: 'Financial Services' },
  { icon: '📡', label: 'Telecom' },
  { icon: '🏗️', label: 'Construction' },
  { icon: '🎓', label: 'Education' },
]

const STATS = [
  { number: '500+', label: 'Businesses Served' },
  { number: '99.9%', label: 'Uptime Guaranteed' },
  { number: '24/7',  label: 'Expert Support' },
  { number: '40%',   label: 'Cost Reduction' },
]

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-wrap">
        <div className="about-grid">
          {/* ── Left: Text + Stats ── */}
          <FadeInSection delay={0}>
            <div className="about-text">
              <h2>
                Who We Are &amp;{' '}
                <span className="gradient-text">Why We're Different</span>
              </h2>

              <p>
                PCS VoIP is a communication solutions provider for any business,
                big or small. We support industries such as manufacturing,
                healthcare, retail, transportation, and financial services.
              </p>

              <p>
                We focus on exceeding customer expectations through flexible
                features and custom solutions tailored to each unique business
                environment.
              </p>

              <p>
                Our mission is to help businesses{' '}
                <strong>reduce operating costs</strong> while{' '}
                <strong>increasing productivity</strong> through next-generation
                VoIP technology.
              </p>

              <p className="tagline">
                "The power of communication… simplified."
              </p>

              {/* Stats */}
              <div className="about-stats">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="glass-card stat-card"
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                  >
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* ── Right: Industries ── */}
          <FadeInSection delay={0.15}>
            <div className="section-heading" style={{ textAlign: 'left', marginBottom: 28 }}>
              <h2 style={{ fontSize: '1.6rem' }}>
                Industries We{' '}
                <span className="gradient-text">Serve</span>
              </h2>
              <p>Tailored communication for every sector</p>
              <span className="accent-line" style={{ margin: '16px 0 0' }} />
            </div>

            <div className="industries-grid">
              {INDUSTRIES.map((ind, i) => (
                <motion.div
                  key={ind.label}
                  className="glass-card industry-chip"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.07 * i }}
                >
                  <div className="industry-icon">{ind.icon}</div>
                  <span>{ind.label}</span>
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
