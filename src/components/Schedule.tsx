import React from 'react';
import { motion } from 'framer-motion';
import '../styles/schedule.css';

const Schedule: React.FC = () => (
    viewport={{ once: false, amount: 0.2 }}
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <h2>Расписание дня</h2>

    <ul>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        15:00 - Регистрация брака
      </motion.li>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        17:00 - Фотосессия и приветственный фуршет
      </motion.li>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        18:00 - Банкет и развлекательная программа
      </motion.li>
    </ul>
  </motion.section>

);

export default Schedule;
