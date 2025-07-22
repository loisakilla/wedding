import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/dresscode.css';

interface ColorItem {
  hex: string;
  images: string[];
}

const colors: ColorItem[] = [
  {
    hex: '#FEFFFE',
    images: [
      'https://avatars.mds.yandex.net/i?id=53726183c8e688d713bc5c18c5026dc3_l-10299502-images-thumbs&n=13'
    ]
  },
  {
    hex: '#48372D',
    images: [
      'https://optim.tildacdn.com/stor3133-3462-4064-b766-623165313965/-/cover/460x690/center/center/-/format/webp/44271739.jpg.webp',

    ]
  },
  {
    hex: '#E9EBF8',
    images: [
      'https://avatars.mds.yandex.net/i?id=53726183c8e688d713bc5c18c5026dc3_l-10299502-images-thumbs&n=13',

    ]
  },
  {
    hex: '#CE6C47',
    images: [
      'https://avatars.mds.yandex.net/i?id=53726183c8e688d713bc5c18c5026dc3_l-10299502-images-thumbs&n=13',
    ]
  }
];

const DressCode: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (hovered === null) return;
    const id = setInterval(() => {
      setIndex(i => (i + 1) % colors[hovered].images.length);
    }, 2000);
    return () => clearInterval(id);
  }, [hovered]);

  return (
    <motion.section
      id="dresscode"
      className="dresscode"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2>Дресс-код</h2>
      <p>Мы будем невероятно рады, если Вы поддержите нас в данном дресс-коде и придете в таких цветах:</p>
      <div className="palette">
        {colors.map((color, idx) => (
          <div
            key={color.hex}
            className="color-circle"
            style={{ backgroundColor: color.hex }}
            onMouseEnter={() => { setHovered(idx); setIndex(0); }}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === idx && (
                <motion.div
                  className="preview"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <img src={color.images[index]} alt="preview" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default DressCode;
