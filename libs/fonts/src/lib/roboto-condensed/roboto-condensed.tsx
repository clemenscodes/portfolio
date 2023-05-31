import { Roboto_Condensed } from '@next/font/google';

const robotoCondensed = Roboto_Condensed({
    weight: '300',
    variable: '--font-sans',
    subsets: ['latin'],
    preload: true,
    display: 'swap',
});

export type FontsProps = React.PropsWithChildren;

export const RobotoCondensed: React.FC<FontsProps> = ({ children }) => {
    return <div className={`${robotoCondensed.variable} font-sans`}>{children}</div>;
};

export default RobotoCondensed;
