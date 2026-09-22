import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>SHARANBASVA UNIVERSITY</h2>
            <h3>COLLEGE FEST 2026</h3>
            <p className="footer-tagline">"Celebrate Talent. Create Memories."</p>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon-footer">FB</a>
              <a href="#" className="social-icon-footer">X</a>
              <a href="#" className="social-icon-footer">IG</a>
              <a href="#" className="social-icon-footer">IN</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 College Fest. All Rights Reserved.</p>
          <p className="made-with">
            Made with <Heart size={16} className="heart-icon" /> for the Students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
