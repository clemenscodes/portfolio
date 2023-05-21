import { cn } from '@styles';
import { type HTML } from '@types';
import { scrollToComponent } from '@utils';
import Link from 'next/link';
import { UrlObject } from 'url';

export type ButtonProps = HTML<'button'> & {
    newTab: boolean;
    href: UrlObject | string;
};

export const Button: React.FC<ButtonProps> = ({ newTab, className, children, href, ...props }) => {
    return (
        <button
            {...props}
            className={cn([
                'block cursor-pointer items-center whitespace-nowrap rounded-lg border border-[#55198b] bg-[#55198b] px-6 py-3 text-center text-xl font-bold uppercase text-white no-underline transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white hover:text-[#55198b]',
                className,
            ])}
        >
            {newTab ? (
                <Link target='_blank' href={href}>
                    {children}
                </Link>
            ) : (
                <Link scroll={true} href={href} onClick={scrollToComponent}>
                    {children}
                </Link>
            )}
        </button>
    );
};

export default Button;
