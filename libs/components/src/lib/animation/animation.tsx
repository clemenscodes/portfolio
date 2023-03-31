import Lottie, { type LottieComponentProps } from 'lottie-react';

export type AnimationProps = LottieComponentProps;

export const Animation: React.FC<AnimationProps> = ({ animationData, ...props }) => {
    return <Lottie {...props} animationData={animationData} />;
};

export default Animation;
