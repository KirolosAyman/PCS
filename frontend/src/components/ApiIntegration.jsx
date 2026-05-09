import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './ApiIntegration.css';

const applications = [
  { logo: '4me', name: '4me Logo', description: 'Go Communicator, Go Connect for Panasonic, Go Integrator, partnerCRM, Phone-Link, Samsung Xchange, ucplus', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
  { logo: 'QVS', name: 'QV Systems Logo', description: 'Go Communicator, Go Connect for Panasonic, Go Integrator, Phone-Link, Samsung Xchange, ucplus', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
  { logo: 'Access', name: 'access-group Logo', description: 'Go Communicator, Go Connect for Panasonic, Go Integrator, partnerCRM, Phone-Link, Samsung Xchange, ucplus', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
  { logo: 'App4', name: 'App 4 Logo', description: 'Go Communicator, Go Connect for Panasonic, Go Integrator, partnerCRM, Phone-Link, Samsung Xchange, ucplus', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
  { logo: 'App5', name: 'App 5 Logo', description: 'Go Integrator', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
  { logo: 'App6', name: 'App 6 Logo', description: 'Go Communicator, Go Connect for Panasonic, Go Integrator, partnerCRM, Phone-Link, Samsung Xchange, ucplus', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
  { logo: 'App7', name: 'App 7 Logo', description: 'Go Communicator, Go Connect for Panasonic, Go Integrator, Phone-Link, Samsung Xchange, ucplus', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
  { logo: 'App8', name: 'App 8 Logo', description: 'Go Communicator, Go Connect for Panasonic, Go Integrator, partnerCRM, Phone-Link, Samsung Xchange, ucplus', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
  { logo: 'App9', name: 'App 9 Logo', description: 'Go Communicator, Go Connect for Panasonic, Go Integrator, Phone-Link, Samsung Xchange, ucplus', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
  { logo: 'App10', name: 'App 10 Logo', description: 'Go Communicator, Go Connect for Panasonic, Go Integrator, Phone-Link, Samsung Xchange, ucplus', os: 'Windows Mac', support: 'Supported by PCSVoIP' },
];

export default function ApiIntegration() {
  return (
    <div className="api-integration-page">
      <section className="api-hero-section">
        <div className="api-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="api-title"
          >
            API Integration
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="api-subtitle"
          >
            Seamless API Integration for VoIP Efficiency.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="api-subtext"
          >
            API integration with phone systems and its benefits for your business.
          </motion.p>
        </div>
      </section>

      <section className="api-content-section">
        <div className="api-container">
          <div className="api-content-grid">
            <motion.div 
              className="api-text-block"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Voice over IP is an intriguing technology as it will baffle you with the large number of features it has. 
                If you wish to utilize different useful applications like Microsoft Word, Excel, Outlook, or any other web application, 
                then VoIP lets you use all these applications as well. There are many different plugins that you can use through 
                Voice over IP. Some of these plugins even let you get access to shortcuts like click-to-dial and call logging. 
                You can even control your security features by using the auto-operator. API integration is indeed a great means 
                to get access to various application software.
              </p>
            </motion.div>
            <motion.div 
              className="api-image-block"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="api-image-wrapper">
                {/* Fallback to a placeholder gradient if the user has not added their image yet. Assuming they provided api-integration.jpg. If not, this acts gracefully. */}
                <img 
                  src="/api.jpg" 
                  alt="API Integration Technology" 
                  className="api-hero-image" 
                />
                <div className="api-image-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="api-table-section">
        <div className="api-container">
          <motion.div 
            className="api-table-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="api-table-title">Supported Applications</h3>
            <div className="table-responsive">
              <table className="api-custom-table">
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Description</th>
                    <th>OS</th>
                    <th>Support</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    >
                      <td className="app-cell">
                        <div className="app-logo-box">{app.logo}</div>
                        <span className="app-name">{app.name}</span>
                      </td>
                      <td className="desc-cell">{app.description}</td>
                      <td className="os-cell">
                        <span className="os-badge">{app.os}</span>
                      </td>
                      <td className="support-cell">
                        <span className="support-badge">
                          <CheckCircle size={14} className="support-icon" /> {app.support}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
