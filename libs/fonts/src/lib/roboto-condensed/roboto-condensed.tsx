import localFont from '@next/font/local';

const robotoCondensed = localFont({
    src: '../../../../components/assets/fonts/RobotoCondensed-Light.ttf',
    weight: '300',
    variable: '--font-sans',
    preload: false,
    display: 'swap',
});

export type FontsProps = React.PropsWithChildren;

export const RobotoCondensed: React.FC<FontsProps> = ({ children }) => {
    return <div className={`${robotoCondensed.variable} font-sans`}>{children}</div>;
};

export default RobotoCondensed;
