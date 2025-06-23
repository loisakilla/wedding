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
        Приезжаем к Шипловскому ЗАГСу к 16:20. Начинаем снимать рилсы
      </motion.li>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
        Ждем некоторое время пока пройдут все проверки. Все еще снимаем рислы
      </motion.li>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
        После окончания проверок, начало церемонии. Продолжаем снимать рилсы
      </motion.li>
      <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
        В 17:20 пьем шампанское на пороге ЗАГСа. Непрекращаем снимаем рилсы до тех пор, пока не закончится место)))0))
      </motion.li>
    </ul>
  </motion.section>

);

export default Schedule;
