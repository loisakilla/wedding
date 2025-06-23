import AnimatedCursor from 'react-animated-cursor';

const CustomCursor: React.FC = () => (
    <AnimatedCursor
        innerSize={10}
        outerSize={60}
        color="transparent"
        outerAlpha={0}
        innerScale={1}
        outerScale={2}
        outerStyle={{ border: '2px dashed #E82929FF' }}
    />
);

export default CustomCursor;
