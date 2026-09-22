import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Music, Trophy } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Monitor size={40} className="card-icon tech" />,
      title: "Technical",
      description: "Showcase your coding and engineering skills in challenging events."
    },
    {
      icon: <Music size={40} className="card-icon culture" />,
      title: "Cultural",
      description: "Express your artistic side through dance, music, and art."
    },
    {
      icon: <Trophy size={40} className="card-icon trophy" />,
      title: "Competitions",
      description: "Compete with the best minds and win exciting prizes."
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About College Fest 2026
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="about-text">
            College Fest 2026 is a celebration that brings together students from different 
            departments to showcase their creativity, technical skills and cultural talents 
            through exciting competitions and activities.
          </p>
        </motion.div>

        <div className="about-cards">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className="glass-card about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
              <div className="card-icon-wrapper">
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
