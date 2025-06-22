import React from 'react';
import { motion } from 'framer-motion';
import '../styles/gallery.css';

const images = [
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200?text=2',
  'https://via.placeholder.com/300x200?text=3',
];

const Gallery: React.FC = () => (

  <motion.section
    id="gallery"
    className="gallery"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <h2>Галерея</h2>
    <div className="list">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          className={`item ${idx % 2 === 0 ? 'left' : 'right'}`}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <img src={src} alt={`gallery-${idx}`} />
        </motion.div>
      ))}
    </div>
  </motion.section>

);

export default Gallery;
