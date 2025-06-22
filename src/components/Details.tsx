import React from 'react';
import { motion } from 'framer-motion';
import '../styles/details.css';

const Details: React.FC = () => (
  <section id="details" className="details">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Подробности
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Торжественная церемония состоится 12 августа 2025 года в 15:00 в Москве.
      Праздничный банкет пройдет в ресторане "Сказка".
    </motion.p>
  </section>
);

export default Details;
