import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set fest date to 30 days from now for demo purposes
    const festDate = new Date();
    festDate.setDate(festDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = festDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SHARANBASVA UNIVERSITY
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          COLLEGE FEST <span className="highlight">2026</span>
        </motion.h1>
        
        <motion.p 
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          "Celebrate Talent. Create Memories. Experience the Fest."
        </motion.p>
        
        <motion.p 
          className="hero-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Join us for an exciting celebration of technology, creativity, culture and talent.
        </motion.p>

        <motion.div 
          className="hero-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="info-item">
            <span className="info-label">Date</span>
            <span className="info-value">October 15-16, 2026</span>
          </div>
          <div className="info-item">
            <span className="info-label">Venue</span>
            <span className="info-value">Main Campus</span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-countdown"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="countdown-title">Fest Starts In</h3>
          <div className="countdown-timer">
            <div className="time-box">
              <span className="time-value">{timeLeft.days}</span>
              <span className="time-label">Days</span>
            </div>
            <div className="time-box">
              <span className="time-value">{timeLeft.hours}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-box">
              <span className="time-value">{timeLeft.minutes}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-box">
              <span className="time-value">{timeLeft.seconds}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a href="#register" className="btn btn-primary btn-large">Register Now</a>
          <a href="#events" className="btn btn-outline btn-large">Explore Events</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
