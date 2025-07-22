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
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    hex: '#48372D',
    images: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    hex: '#E9EBF8',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    hex: '#CE6C47',
    images: [
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80'
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
      <p>Просим поддержать нас в следующей палитре:</p>
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
