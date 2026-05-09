import React from 'react';
import { motion } from 'framer-motion';
import './ApiVideos.css';

const testVideos = [
  { id: 1, title: '4ME', embedId: 'cmClGLsDkQY' },
  { id: 2, title: 'Autotask', embedId: 'cmClGLsDkQY' },
  { id: 3, title: 'Bullhorn', embedId: 'cmClGLsDkQY' },
  { id: 4, title: 'Carerix', embedId: 'cmClGLsDkQY' },
  { id: 5, title: 'ConnectWise', embedId: 'cmClGLsDkQY' },
  { id: 6, title: 'Dynamics 365', embedId: 'cmClGLsDkQY' },
  { id: 7, title: 'Freshdesk', embedId: 'cmClGLsDkQY' },
  { id: 8, title: 'HubSpot', embedId: 'cmClGLsDkQY' },
  { id: 9, title: 'Salesforce', embedId: 'cmClGLsDkQY' },
];

export default function ApiVideos() {
  return (
    <div className="api-videos-page">
      <section className="videos-hero-section">
        <div className="videos-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="videos-title"
          >
            API Videos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="videos-subtitle"
          >
            Watch and learn how to seamlessly integrate our VoIP services with your favorite applications.
          </motion.p>
        </div>
      </section>

      <section className="videos-gallery-section">
        <div className="videos-container">
          <div className="videos-grid">
            {testVideos.map((video, index) => (
              <motion.div 
                key={video.id}
                className="video-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="video-wrapper">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.embedId}?si=y30Ey6SwE6DSwOLx`} 
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3 className="video-card-title">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
