import React from 'react';
import { motion } from 'framer-motion';
import './Schedule.css';

const scheduleData = {
  day1: [
    { time: '09:00 AM', event: 'Inauguration', type: 'general' },
    { time: '10:00 AM', event: 'Hackathon Starts', type: 'technical' },
    { time: '11:00 AM', event: 'Robo Race', type: 'technical' },
    { time: '01:00 PM', event: 'Lunch Break', type: 'general' },
    { time: '02:00 PM', event: 'Project Expo', type: 'technical' },
    { time: '04:00 PM', event: 'Cultural Events', type: 'cultural' },
    { time: '06:00 PM', event: 'Music & Dance', type: 'cultural' },
  ],
  day2: [
    { time: '09:30 AM', event: 'Technical Events', type: 'technical' },
    { time: '11:00 AM', event: 'Quiz Competition', type: 'technical' },
    { time: '01:00 PM', event: 'Lunch Break', type: 'general' },
    { time: '02:00 PM', event: 'Cultural Competitions', type: 'cultural' },
    { time: '05:00 PM', event: 'Prize Distribution', type: 'general' },
    { time: '06:00 PM', event: 'Closing Ceremony', type: 'general' },
  ]
};

const Schedule = () => {
  return (
    <section id="schedule" className="section schedule">
      <div className="container">
        <h2 className="section-title">Fest Schedule</h2>
        
        <div className="schedule-container">
          <div className="schedule-day">
            <h3 className="day-title">Day 1 <span>(Oct 15)</span></h3>
            <div className="timeline">
              {scheduleData.day1.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`timeline-item ${item.type}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-time">{item.time}</div>
                  <div className="timeline-content">
                    <div className="timeline-dot"></div>
                    <h4>{item.event}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="schedule-day">
            <h3 className="day-title">Day 2 <span>(Oct 16)</span></h3>
            <div className="timeline">
              {scheduleData.day2.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`timeline-item ${item.type}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-time">{item.time}</div>
                  <div className="timeline-content">
                    <div className="timeline-dot"></div>
                    <h4>{item.event}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
