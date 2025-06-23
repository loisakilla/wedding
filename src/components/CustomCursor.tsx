import { useEffect } from 'react';
import MouseFollower from 'mouse-follower';
import gsap from 'gsap';
import 'mouse-follower/dist/mouse-follower.min.css';
import '../styles/cursor.css';

const CustomCursor = () => {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      el: null,
      container: document.body,
      className: 'mf-cursor',
      innerClassName: 'mf-cursor-inner',
      textClassName: 'mf-cursor-text',
      mediaClassName: 'mf-cursor-media',
      mediaBoxClassName: 'mf-cursor-media-box',
      iconSvgClassName: 'mf-svgsprite',
      iconSvgNamePrefix: '-',
      iconSvgSrc: '',
      dataAttr: 'cursor',
      hiddenState: '-hidden',
      textState: '-text',
      iconState: '-icon',
      activeState: '-active',
      mediaState: '-media',
      stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe',
        '-text': 'p,span,h1,h2,h3,h4,h5,h6,a,button,li,label,input,textarea'
      },
      visible: true,
      visibleOnState: false,
      speed: 0.55,
      ease: 'expo.out',
      overwrite: true,
      skewing: 0,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15,
      showTimeout: 20,
      hideOnLeave: true,
      hideTimeout: 300,
    });
    return () => cursor.destroy();
  }, []);
  return null;
};

export default CustomCursor;
