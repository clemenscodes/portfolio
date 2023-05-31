import { cn } from '@styles';
import Lottie, { type LottieComponentProps } from 'lottie-react';

export type AnimationProps = LottieComponentProps &
    React.ComponentPropsWithoutRef<'div'>;

export const Animation: React.FC<AnimationProps> = ({
    animationData,
    className,
    ...props
}) => {
    return (
        <div className={cn('lottie max-w-screen block h-full', className)}>
            <Lottie {...props} animationData={animationData} />
        </div>
    );
};

export default Animation;
