import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import '../styles/countdown.css';

const targetDate = new Date('2025-08-05T00:00:00').getTime();

const Countdown: React.FC = () => (
  <section className="countdown">
    <FlipClockCountdown
      to={targetDate}
      labels={['Дней', 'Часов', 'Минут', 'Секунд']}
    />
  </section>
);

export default Countdown;
