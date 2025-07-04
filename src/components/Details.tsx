import React from 'react';
import { motion } from 'framer-motion';
import '../styles/details.css';

const Details: React.FC = () => (

  <motion.section
    id="details"
    className="details"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <h2>Подробности</h2>
    <p>
     Пьянка буде
    </p>
  </motion.section>

);

export default Details;
