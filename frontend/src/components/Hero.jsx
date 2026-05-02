import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const floatAnim = {
  animate: {
    y: [0, -18, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* ── Left: Copy ── */}
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="dot" />
            Trusted by 500+ Businesses Nationwide
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
          >
            Powerful{' '}
            <span className="gradient-text">Communication Solutions</span>
            {' '}for Modern Businesses
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            PCS VoIP empowers healthcare, retail, manufacturing, transportation,
            and financial businesses with reliable, flexible, and cost-effective
            communication platforms built for growth.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
          >
            <a href="#contact" id="hero-get-started" className="btn btn-primary">
              Get Started <ArrowRight size={18} />
            </a>
            <a href="#about" id="hero-learn-more" className="btn btn-outline">
              <PlayCircle size={18} /> Learn More
            </a>
          </motion.div>
        </div>

        {/* ── Right: Hero image ── */}
        <motion.div
          className="hero-img-wrap"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/hero.png"
            alt="PCS VoIP multi-device communication platform — desk phone, laptop, tablet and mobile"
            variants={floatAnim}
            animate="animate"
          />
        </motion.div>
      </div>
    </section>
  )
}
