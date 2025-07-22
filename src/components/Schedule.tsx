import React from 'react';
import { motion } from 'framer-motion';
import '../styles/schedule.css';

const Schedule: React.FC = () => (

  <motion.section
    id="schedule"
    className="schedule"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <h2>Порядок действий</h2>

    <ul>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
        16:20 - Начало регистрации в Шипиловском Загсе
      </motion.li>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
        17:20 - Конец регистрации, плавно переезжаем в ресторан
      </motion.li>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
        18:00 - Отмечаем праздник в ресторане Мясо&Рыба
      </motion.li>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
        22:00 - Завершение вечера
      </motion.li>
    </ul>
  </motion.section>

);

export default Schedule;
