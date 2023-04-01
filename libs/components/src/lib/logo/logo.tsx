import { greeting } from '@config';
import { forwardRef } from '@utils';
import Link, { type LinkProps } from 'next/link';

export type LogoProps = Omit<LinkProps, 'href'> & {
    name?: string;
};

export const Logo = forwardRef<LogoProps>(({ name = greeting.name, ...props }, ref) => {
    return (
        <Link {...props} ref={ref} href={'/'}>
            <span className='text-gray-200'> &lt;</span>
            <span className=''>{name}</span>
            <span className='text-gray-200'>/&gt;</span>
        </Link>
    );
}, 'Logo');

export default Logo;
