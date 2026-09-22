import React from 'react';
import { motion } from 'framer-motion';
import './Sponsors.css';

const sponsors = [
  { id: 1, name: 'TechCorp', logo: 'https://via.placeholder.com/200x100/1a1a2e/00f5ff?text=TechCorp' },
  { id: 2, name: 'EduSolutions', logo: 'https://via.placeholder.com/200x100/1a1a2e/9d4edd?text=EduSolutions' },
  { id: 3, name: 'InnovateX', logo: 'https://via.placeholder.com/200x100/1a1a2e/ff007f?text=InnovateX' },
  { id: 4, name: 'GlobalSystems', logo: 'https://via.placeholder.com/200x100/1a1a2e/00f5ff?text=GlobalSystems' },
  { id: 5, name: 'FutureWorks', logo: 'https://via.placeholder.com/200x100/1a1a2e/9d4edd?text=FutureWorks' },
  { id: 6, name: 'CloudNet', logo: 'https://via.placeholder.com/200x100/1a1a2e/ff007f?text=CloudNet' },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="section sponsors">
      <div className="container">
        <h2 className="section-title">Our Sponsors & Partners</h2>
        
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <motion.div 
              key={sponsor.id}
              className="sponsor-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="sponsor-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>Interested in becoming a sponsor?</p>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
