import React from 'react';
import { motion } from 'framer-motion';
import '../styles/schedule.css';

const Schedule: React.FC = () => (
  <section id="schedule" className="schedule">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Расписание дня
    </motion.h2>
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
  </section>
);

export default Schedule;
