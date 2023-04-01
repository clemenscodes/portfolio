import { greeting } from '@config';
import { forwardRef } from '@utils';
import Link, { type LinkProps } from 'next/link';

export type LogoProps = Omit<LinkProps, 'href'> & {
    name?: string;
};

export const Logo = forwardRef<LogoProps>(({ name = greeting.name, ...props }, ref) => {
    return (
        <Link className='flex h-full items-center justify-center text-2xl' {...props} ref={ref} href={'/'}>
            <div className='dark:text-gray-200'> &lt;</div>
            <div className='font-agustina flex h-full items-center px-2 pt-4 font-bold'>{name}</div>
            <div className='dark:text-gray-200'>/&gt;</div>
        </Link>
    );
}, 'Logo');

export default Logo;
