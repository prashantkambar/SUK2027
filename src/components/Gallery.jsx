import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1540505358592-d9611f71dfb1?q=80&w=800&auto=format&fit=crop', alt: 'Previous fest crowd' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop', alt: 'Technical event' },
  { id: 3, src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop', alt: 'Cultural performance' },
  { id: 4, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop', alt: 'Students enjoying' },
  { id: 5, src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop', alt: 'Gaming event' },
  { id: 6, src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop', alt: 'Prize distribution' },
  { id: 7, src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop', alt: 'Stage setup' },
  { id: 8, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop', alt: 'Event highlights' }
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Memories Gallery</h2>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div 
              key={img.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedImg(null)}>×</button>
            <motion.img 
              src={selectedImg.src} 
              alt={selectedImg.alt}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
