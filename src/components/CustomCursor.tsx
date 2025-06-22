import React, { useEffect } from 'react';
import '../styles/cursor.css';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return <div className="custom-cursor" />;
};

export default CustomCursor;
