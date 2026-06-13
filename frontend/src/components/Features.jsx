import { motion } from 'framer-motion'
import {
  DollarSign,
  TrendingUp,
  Sliders,
  MapPin,
  Headphones,
  Shield,
  Zap,
  Globe,
} from 'lucide-react'

const FEATURES = [
  {
    id: 'cost-reduction',
    icon: <DollarSign size={26} color="#fff" />,
    title: 'Cost Reduction',
    desc: 'Cut communication expenses by up to 40% with our cloud-hosted VoIP infrastructure — no expensive hardware required.',
  },
  {
    id: 'productivity',
    icon: <TrendingUp size={26} color="#fff" />,
    title: 'Increased Productivity',
    desc: 'Unified messaging, video calling, and team collaboration tools keep your team connected and efficient from anywhere.',
  },
  {
    id: 'flexible-solutions',
    icon: <Sliders size={26} color="#fff" />,
    title: 'Flexible Solutions',
    desc: 'Fully customizable plans that scale with your business — from a 2-person startup to a 2,000-seat enterprise.',
  },
  {
    id: 'nationwide-service',
    icon: <MapPin size={26} color="#fff" />,
    title: 'Nationwide Service',
    desc: 'Reliable coverage and dedicated support across all 50 states with local experts who know your market.',
  },
  {
    id: '24-7-support',
    icon: <Headphones size={26} color="#fff" />,
    title: '24 / 7 Support',
    desc: 'Round-the-clock technical support ensuring zero downtime and immediate resolution of any communication issues.',
  },
  {
    id: 'security',
    icon: <Shield size={26} color="#fff" />,
    title: 'Enterprise Security',
    desc: 'End-to-end encryption, HIPAA-compliant infrastructure, and real-time threat monitoring keep your data safe.',
  },
  {
    id: 'instant-setup',
    icon: <Zap size={26} color="#fff" />,
    title: 'Instant Deployment',
    desc: 'Go live in hours, not weeks. Our plug-and-play system requires minimal IT involvement to get up and running.',
  },
  {
    id: 'global-reach',
    icon: <Globe size={26} color="#fff" />,
    title: 'Global Reach',
    desc: 'International calling, multi-language IVR, and global number provisioning for businesses with a worldwide presence.',
  },
]

export default function Features() {
  return (
<section id="features" className="section features-section">    <div className="section-wrap">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Everything Your Business{' '}
            <span className="gradient-text">Needs to Communicate</span>
          </h2>
          <p>
            Purpose-built features that deliver real results — cost savings,
            efficiency, and seamless connectivity.
          </p>
          <span className="accent-line" />
        </motion.div>

        <div
          className="features-grid"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.id}
              id={feat.id}
              className="glass-card feature-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.07 * i }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="feature-icon-wrap">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
