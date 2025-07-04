import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';

import CustomCursor from './components/CustomCursor';

import ParticlesBackground from './components/ParticlesBackground';
import './styles/app.css';


const App: React.FC = () => {

  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      <Hero />
      <Details />
      <Countdown />
      <Schedule />
      <Gallery />
    </>
  );
};

export default App;
