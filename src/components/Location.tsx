import React from 'react';
import { motion } from 'framer-motion';
import '../styles/location.css';

const Location: React.FC = () => (
  <motion.section
    id="location"
    className="location"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <h2>Локация - Шипиловский ЗАГС</h2>
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <motion.img
          className="location-image"
          src="https://avatars.mds.yandex.net/get-altay/13951679/2a000001958ec8317fb87da75890227073c5/XXXL"
          alt="Шипиловский ЗАГС"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: false}}
      />
      <motion.a
          className="route-button"
          href="https://yandex.ru/maps/213/moscow/?ll=37.696528%2C55.615224&mode=routes&rtext=~55.616954%2C37.695228&rtt=auto&ruri=~&z=14"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{scale: 1.05}}
      >
        Построить маршрут
      </motion.a>
    </div>

  </motion.section>
);

export default Location;
