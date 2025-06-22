import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import ParticlesBackground from './components/ParticlesBackground';
import './styles/app.css';
import '@jasperj1/pointer.js';

const App: React.FC = () => {

  return (
    <>
      <ParticlesBackground />
      <Hero />
      <Details />
      <Schedule />
      <Gallery />
      <Rsvp />
    </>
  );
};

export default App;
