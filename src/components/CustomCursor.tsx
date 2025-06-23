import AnimatedCursor from 'react-animated-cursor';

const CustomCursor: React.FC = () => (
  <AnimatedCursor
    innerSize={8}
    outerSize={40}
    color="255, 255, 255"
    outerAlpha={0}
    innerScale={1}
    outerScale={2}
    outerStyle={{ border: '2px solid #fff' }}
  />
);

export default CustomCursor;
