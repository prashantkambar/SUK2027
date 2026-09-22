import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-desc">Have questions about the fest? Reach out to us.</p>
            
            <div className="info-list">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>College Address</h4>
                  <p>Sharanbasva University<br/>Kalaburagi, Karnataka, India</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210<br/>+91 87654 32109</p>
                </div>
              </div>
              
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>fest2026@sharanbasva.edu.in</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">X</a>
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">IN</a>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.427845722421!2d76.82869531536762!3d17.332306388081696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc63df6f88d75cf%3A0x6e268a07106093d6!2sSharnbasva%20University!5e0!3m2!1sen!2sin!4v1689312345678!5m2!1sen!2sin" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '10px', filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
              </div>
              
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message..." rows="5"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
