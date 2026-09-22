import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, User, Phone } from 'lucide-react';
import './Events.css';

const eventsData = {
  technical: [
    {
      id: 't1',
      name: 'Hackathon',
      date: 'Oct 15, 2026',
      time: '10:00 AM',
      venue: 'Lab 1',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      description: 'A 24-hour coding marathon to build innovative solutions for real-world problems.',
      rules: 'Teams of up to 4 members. Bring your own laptops.',
      coordinator: 'John Doe',
      contact: '+91 9876543210',
      maxParticipants: '50 Teams'
    },
    {
      id: 't2',
      name: 'Robo Race',
      date: 'Oct 15, 2026',
      time: '11:00 AM',
      venue: 'Main Ground',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
      description: 'Build and race your custom robots through an obstacle course.',
      rules: 'Bots must meet size and weight constraints.',
      coordinator: 'Alice Smith',
      contact: '+91 9876543211',
      maxParticipants: '30 Teams'
    },
    {
      id: 't3',
      name: 'Project Expo',
      date: 'Oct 15, 2026',
      time: '02:00 PM',
      venue: 'Auditorium',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop',
      description: 'Showcase your hardware or software engineering projects to industry experts.',
      rules: 'Working models only. Presentation max 10 mins.',
      coordinator: 'Bob Johnson',
      contact: '+91 9876543212',
      maxParticipants: '40 Projects'
    },
    {
      id: 't4',
      name: 'Bug Hunt',
      date: 'Oct 16, 2026',
      time: '10:00 AM',
      venue: 'Lab 2',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
      description: 'Find and fix bugs in complex codebases faster than anyone else.',
      rules: 'Individual event. Multiple programming languages available.',
      coordinator: 'Emma Davis',
      contact: '+91 9876543213',
      maxParticipants: '100 Participants'
    },
    {
      id: 't5',
      name: 'Digi Expo',
      date: 'Oct 16, 2026',
      time: '11:00 AM',
      venue: 'Hall A',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
      description: 'Digital art, 3D modeling and UI/UX design showcase.',
      rules: 'Must bring original source files.',
      coordinator: 'Tom Wilson',
      contact: '+91 9876543214',
      maxParticipants: '50 Participants'
    },
    {
      id: 't6',
      name: 'Quiz Competition',
      date: 'Oct 16, 2026',
      time: '02:00 PM',
      venue: 'Seminar Hall',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop',
      description: 'Test your knowledge on technology, general knowledge, and pop culture.',
      rules: 'Teams of 2. 3 rounds of elimination.',
      coordinator: 'Sarah Lee',
      contact: '+91 9876543215',
      maxParticipants: '100 Teams'
    }
  ],
  cultural: [
    {
      id: 'c1',
      name: 'Dance',
      date: 'Oct 15, 2026',
      time: '04:00 PM',
      venue: 'Main Stage',
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop',
      description: 'Solo and group dance competitions across various genres.',
      rules: 'Time limit: Solo 3 mins, Group 5 mins.',
      coordinator: 'Priya Raj',
      contact: '+91 9876543216',
      maxParticipants: '50 Acts'
    },
    {
      id: 'c2',
      name: 'Singing',
      date: 'Oct 15, 2026',
      time: '06:00 PM',
      venue: 'Main Stage',
      image: 'https://images.unsplash.com/photo-1516280440502-869d95f87b3f?q=80&w=800&auto=format&fit=crop',
      description: 'Showcase your vocal talents in classical or contemporary styles.',
      rules: 'Instrumental track allowed. Time limit 4 mins.',
      coordinator: 'Rahul Sharma',
      contact: '+91 9876543217',
      maxParticipants: '40 Participants'
    },
    {
      id: 'c3',
      name: 'Ramp Walk',
      date: 'Oct 16, 2026',
      time: '02:00 PM',
      venue: 'Main Stage',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop',
      description: 'Strut your style on the runway. Theme based fashion walk.',
      rules: 'Decent attire mandatory. Pre-registration required.',
      coordinator: 'Neha Gupta',
      contact: '+91 9876543218',
      maxParticipants: '50 Participants'
    },
    {
      id: 'c4',
      name: 'Painting',
      date: 'Oct 16, 2026',
      time: '09:00 AM',
      venue: 'Art Studio',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop',
      description: 'On-spot painting competition. Theme will be given on the spot.',
      rules: 'Bring your own colors. Paper will be provided.',
      coordinator: 'Kiran Patel',
      contact: '+91 9876543219',
      maxParticipants: '60 Participants'
    },
    {
      id: 'c5',
      name: 'Photography',
      date: 'Oct 15-16, 2026',
      time: 'All Day',
      venue: 'Campus',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
      description: 'Capture the best moments of the fest. Submit top 3 pictures.',
      rules: 'DSLR or Mobile allowed. No excessive editing.',
      coordinator: 'Vikram Singh',
      contact: '+91 9876543220',
      maxParticipants: '100 Participants'
    },
    {
      id: 'c6',
      name: 'Fashion Show',
      date: 'Oct 16, 2026',
      time: '07:00 PM',
      venue: 'Main Stage',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
      description: 'The grand finale event showcasing designer collections by students.',
      rules: 'Group event. Max 10 mins per team.',
      coordinator: 'Anita Desai',
      contact: '+91 9876543221',
      maxParticipants: '15 Teams'
    }
  ]
};

const Events = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="section events">
      <div className="container">
        <h2 className="section-title">Exciting Events</h2>
        
        <div className="events-tabs">
          <button 
            className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            Technical
          </button>
          <button 
            className={`tab-btn ${activeTab === 'cultural' ? 'active' : ''}`}
            onClick={() => setActiveTab('cultural')}
          >
            Cultural
          </button>
        </div>

        <motion.div 
          className="events-grid"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eventsData[activeTab].map((evt) => (
            <div key={evt.id} className="event-card glass-card">
              <div className="event-img-wrapper">
                <img src={evt.image} alt={evt.name} className="event-img" />
              </div>
              <div className="event-content">
                <h3 className="event-name">{evt.name}</h3>
                <div className="event-meta">
                  <span className="meta-item"><Calendar size={14}/> {evt.date}</span>
                  <span className="meta-item"><Clock size={14}/> {evt.time}</span>
                  <span className="meta-item"><MapPin size={14}/> {evt.venue}</span>
                </div>
                <p className="event-desc">{evt.description}</p>
                <div className="event-actions">
                  <button className="btn btn-outline" onClick={() => setSelectedEvent(evt)}>
                    Details
                  </button>
                  <a href="#register" className="btn btn-primary">Register</a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div 
              className="modal-content glass-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedEvent(null)}>×</button>
              
              <div className="modal-header">
                <h2 className="modal-title">{selectedEvent.name}</h2>
              </div>
              
              <div className="modal-body">
                <p className="modal-desc">{selectedEvent.description}</p>
                
                <div className="modal-rules">
                  <h4>Rules</h4>
                  <p>{selectedEvent.rules}</p>
                </div>
                
                <div className="modal-details-grid">
                  <div className="detail-item">
                    <Calendar size={18} className="detail-icon" />
                    <div>
                      <span className="detail-label">Date</span>
                      <span className="detail-value">{selectedEvent.date}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <Clock size={18} className="detail-icon" />
                    <div>
                      <span className="detail-label">Time</span>
                      <span className="detail-value">{selectedEvent.time}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <MapPin size={18} className="detail-icon" />
                    <div>
                      <span className="detail-label">Venue</span>
                      <span className="detail-value">{selectedEvent.venue}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <Users size={18} className="detail-icon" />
                    <div>
                      <span className="detail-label">Capacity</span>
                      <span className="detail-value">{selectedEvent.maxParticipants}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <User size={18} className="detail-icon" />
                    <div>
                      <span className="detail-label">Coordinator</span>
                      <span className="detail-value">{selectedEvent.coordinator}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <Phone size={18} className="detail-icon" />
                    <div>
                      <span className="detail-label">Contact</span>
                      <span className="detail-value">{selectedEvent.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <a href="#register" className="btn btn-primary btn-full" onClick={() => setSelectedEvent(null)}>
                  Register for Event
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
