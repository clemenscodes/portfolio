import loader from '../../../assets/json/circle-loader.json';
import { Animation, AnimationProps } from '../animation/animation';
import { cn } from '@styles';

export type LoaderProps = Omit<AnimationProps, 'animationData'>;

export const Loader: React.FC<LoaderProps> = ({ ...props }) => {
    return (
        <Animation
            animationData={loader}
            className={cn('h-12 w-12')}
            {...props}
        />
    );
};

export default Loader;
