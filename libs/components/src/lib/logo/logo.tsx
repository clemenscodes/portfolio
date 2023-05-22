import { greeting } from '@config';
import { scrollToTop } from '@utils';

export type LogoProps = React.ComponentPropsWithoutRef<'button'> & {
    name?: string;
};

export const Logo: React.FC<LogoProps> = ({ name = greeting.name, ...props }) => {
    return (
        <button className='flex h-full items-center justify-center text-2xl' onClick={scrollToTop} {...props}>
            <div className='flex dark:text-gray-200'> &lt;</div>
            <div className='flex h-full items-center whitespace-nowrap px-2 pt-4 font-agustina font-bold'>{name}</div>
            <div className='flex dark:text-gray-200'>/&gt;</div>
        </button>
    );
};

export default Logo;
