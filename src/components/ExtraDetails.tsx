import React from 'react';
import { motion } from 'framer-motion';
import '../styles/extradetails.css';

const ExtraDetails: React.FC = () => (
  <motion.section
    id="extra-details"
    className="extra"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <h2>Детали</h2>
    <p>
      Мы будем признательны, если вы воздержитесь от цветов и бытовой техники в качестве подарков.
      С благодарностью примем любой презент в конверте.
    </p>
    <br></br>
    <br></br>
    <p>
      Для сохранения уютной семейной атмосферы просим не кричать «Горько!».
    </p>
  </motion.section>
);

export default ExtraDetails;
