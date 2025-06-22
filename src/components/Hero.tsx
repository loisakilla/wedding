import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.css';

const Hero: React.FC = () => (
  <motion.section
    id="home"
    className="hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Екатерина & Георгий
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      Мы рады пригласить вас на нашу свадьбу!
    </motion.p>
    <a href="#details" className="scroll-down">Узнать подробности</a>
  </motion.section>
);

export default Hero;
