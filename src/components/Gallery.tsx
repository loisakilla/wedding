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
    viewport={{ once: true, amount: 0.2 }}
  >
    <h2>Галерея</h2>
    <div className="grid">
      {images.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={`gallery-${idx}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  </motion.section>

);

export default Gallery;
