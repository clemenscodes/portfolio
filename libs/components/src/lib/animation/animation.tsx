import Lottie, { type LottieComponentProps } from 'lottie-react';

export type AnimationProps = LottieComponentProps;

export const Animation: React.FC<AnimationProps> = ({ animationData, ...props }) => {
    return (
        <div className='lottie block h-full w-full'>
            <Lottie {...props} animationData={animationData} />
        </div>
    );
};

export default Animation;
