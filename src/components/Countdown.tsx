import React, { useEffect, useState } from 'react';
import '../styles/countdown.css';

const targetDate = new Date('2025-08-05T00:00:00');

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{days:number;hours:number;minutes:number}>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - new Date().getTime();
      const d = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
      const h = Math.max(Math.floor(diff / (1000 * 60 * 60)) % 24, 0);
      const m = Math.max(Math.floor(diff / (1000 * 60)) % 60, 0);
      setTimeLeft({ days: d, hours: h, minutes: m });
    };
    calc();
    const interval = setInterval(calc, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown">
      <div className="flip-unit">
        <span className="number">{timeLeft.days}</span>
        <span className="label">дней</span>
      </div>
      <div className="flip-unit">
        <span className="number">{timeLeft.hours}</span>
        <span className="label">часов</span>
      </div>
      <div className="flip-unit">
        <span className="number">{timeLeft.minutes}</span>
        <span className="label">минут</span>
      </div>
    </section>
  );
};

export default Countdown;
