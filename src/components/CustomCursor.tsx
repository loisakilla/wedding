import { useEffect } from 'react';
import MouseFollower from 'mouse-follower';
import gsap from 'gsap';
import 'mouse-follower/dist/mouse-follower.min.css';
import '../styles/cursor.css';

const CustomCursor = () => {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower();
    return () => cursor.destroy();
  }, []);
  return null;
};

export default CustomCursor;
