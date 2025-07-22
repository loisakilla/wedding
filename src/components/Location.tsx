import React from 'react';
import { motion } from 'framer-motion';
import '../styles/location.css';

const Location: React.FC = () => (
  <motion.section
    id="location"
    className="location"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <h2>Локация</h2>
    <motion.img
      className="location-image"
      src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
      alt="Шипиловский ЗАГС"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    />
    <motion.a
      className="route-button"
      href="https://yandex.ru/maps/?rtext=~Shipilovskiy%20proyezd%2C%2039%D0%BA1&rtt=auto"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
    >
      Построить маршрут
    </motion.a>
  </motion.section>
);

export default Location;
