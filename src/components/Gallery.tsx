import React from 'react';
import { motion } from 'framer-motion';
import '../styles/gallery.css';

const images = [
  'https://sun9-66.userapi.com/s/v1/ig2/dwlRipL9eVZt1B28qnZO4luNuATg5EzzMRW0ZxDRDlJ7Zb1nFFBjp4gzm90XTR4SX5qATRA0YnnUMliiBHEtWNIo.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080&from=bu&cs=720x0',
  'https://sun9-66.userapi.com/s/v1/ig2/dwlRipL9eVZt1B28qnZO4luNuATg5EzzMRW0ZxDRDlJ7Zb1nFFBjp4gzm90XTR4SX5qATRA0YnnUMliiBHEtWNIo.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080&from=bu&cs=720x0',
  'https://sun9-66.userapi.com/s/v1/ig2/dwlRipL9eVZt1B28qnZO4luNuATg5EzzMRW0ZxDRDlJ7Zb1nFFBjp4gzm90XTR4SX5qATRA0YnnUMliiBHEtWNIo.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080&from=bu&cs=720x0',
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
