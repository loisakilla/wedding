import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import Location from './components/Location';
import DressCode from './components/DressCode';
import ExtraDetails from './components/ExtraDetails';
import GuestForm from './components/GuestForm';

import CustomCursor from './components/CustomCursor';

import ParticlesBackground from './components/ParticlesBackground';
import './styles/app.css';


const App: React.FC = () => {

  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      <Hero />
      <Location />
{/*      <Details />*/}
      <DressCode />
      <ExtraDetails />
      <Countdown />
      <Schedule />
      <GuestForm />
      <Gallery />
    </>
  );
};

export default App;
