import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    collegeName: '',
    department: '',
    year: '',
    email: '',
    mobile: '',
    event: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    const generatedId = 'CF26-' + Math.floor(100000 + Math.random() * 900000);
    setRegId(generatedId);
    setSubmitted(true);
  };

  return (
    <section id="register" className="section registration">
      <div className="container">
        <h2 className="section-title">Register Now</h2>
        
        <div className="reg-container glass-card">
          {submitted ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle size={64} className="success-icon" />
              <h3>Registration Successful!</h3>
              <p>Thank you for registering for College Fest 2026.</p>
              <div className="reg-id-box">
                <span className="reg-id-label">Your Registration ID</span>
                <span className="reg-id-value">{regId}</span>
              </div>
              <p className="success-note">Please save this ID for future reference. Details have been sent to your email.</p>
              <button className="btn btn-outline" onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '', studentId: '', collegeName: '', department: '',
                  year: '', email: '', mobile: '', event: ''
                });
              }}>
                Register Another Event
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="reg-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Student ID / Roll No</label>
                  <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required placeholder="12345678" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>College/University Name</label>
                  <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required placeholder="Sharanbasva University" />
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <input type="text" name="department" value={formData.department} onChange={handleChange} required placeholder="Computer Science" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Year/Semester</label>
                  <select name="year" value={formData.year} onChange={handleChange} required>
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Select Event</label>
                  <select name="event" value={formData.event} onChange={handleChange} required>
                    <option value="">Select Event to Register</option>
                    <optgroup label="Technical">
                      <option value="hackathon">Hackathon</option>
                      <option value="robo-race">Robo Race</option>
                      <option value="project-expo">Project Expo</option>
                      <option value="bug-hunt">Bug Hunt</option>
                      <option value="digi-expo">Digi Expo</option>
                      <option value="quiz">Quiz Competition</option>
                    </optgroup>
                    <optgroup label="Cultural">
                      <option value="dance">Dance</option>
                      <option value="singing">Singing</option>
                      <option value="ramp-walk">Ramp Walk</option>
                      <option value="painting">Painting</option>
                      <option value="photography">Photography</option>
                      <option value="fashion-show">Fashion Show</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="9876543210" pattern="[0-9]{10}" />
                </div>
              </div>
              
              <div className="form-submit">
                <button type="submit" className="btn btn-primary btn-large">
                  Register Now
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Registration;
