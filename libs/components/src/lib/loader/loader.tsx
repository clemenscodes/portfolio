import animationData from '../../../assets/json/circle-loader.json';
import { cn } from '@styles';
import { colorify } from 'lottie-colorify';
import Lottie from 'lottie-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({ ...props }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [colors, setColors] = useState(['#000000']);
    useEffect(() => {
        isDark ? setColors(['#ffffff']) : setColors(['#000000']);
    }, [isDark]);
    return (
        <div className={cn(['h-24 w-24'])}>
            <Lottie animationData={colorify(colors, animationData)} />
        </div>
    );
};

export default Loader;
