import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { loadHeartShape } from 'tsparticles-shape-heart';

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    await loadHeartShape(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: '#cdc1c1' },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'attract' },
            resize: true,
          },
          modes: {
            attract: { distance: 150, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#ae4848' },
          shape: { type: 'heart' },
          links: {
            color: '#986464',
            distance: 150,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
          },
          number: { value: 60, density: { enable: true, area: 800 } },
          size: { value: { min: 3, max: 7 } },
        },
      }}
      style={{ position: 'fixed', inset: 0, zIndex: -1 }}
    />
  );
};

export default ParticlesBackground;
