import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/countdown.css';

const targetDate = new Date('2025-08-05T00:00:00').getTime();

const getTimeLeft = () => {
  const diff = targetDate - Date.now();
  return diff > 0 ? diff : 0;
};

const format = (num: number) => String(num).padStart(2, '0');

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const units = [
    { value: days, label: 'Дней' },
    { value: hours, label: 'Часов' },
    { value: minutes, label: 'Минут' },
    { value: seconds, label: 'Секунд' },
  ];

  return (
      <section className="countdown">
        {units.map((unit) => (
                <div key={unit.label} className="time-unit">
                  <span className="label">{unit.label}</span>
                  <div className="countdown">
                    {format(unit.value).split('').map((digit, i) => (
                        <span className="digit-wrapper" key={i}>
                        <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                            key={`${unit.label}-${i}-${digit}`}
                            className="digit"
                            initial={{y: '100%', opacity: 0}}
                            animate={{y: '0%', opacity: 1}}
                            exit={{y: '-100%', opacity: 0}}
                            transition={{duration: 0.5}}
                        >
                          {digit}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    ))}
                  </div>
                </div>
            )
        )}
      </section>
  )
      ;
};

export default Countdown;
