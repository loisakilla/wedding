import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import './styles/app.css';
import './styles/cursor.css';

const App: React.FC = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', move);

    return () => {
      document.removeEventListener('mousemove', move);
      cursor.remove();
    };
  }, []);

  return (
    <>
      <Hero />
      <Details />
      <Schedule />
      <Gallery />
      <Rsvp />
    </>
  );
};

export default App;
