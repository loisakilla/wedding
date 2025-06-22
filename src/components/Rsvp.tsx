import React from 'react';
import '../styles/rsvp.css';

const Rsvp: React.FC = () => (
  <section id="rsvp" className="rsvp">
    <h2>RSVP</h2>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Ваше имя" required />
      <input type="email" placeholder="Email" required />
      <button type="submit">Отправить</button>
    </form>
  </section>
);

export default Rsvp;
