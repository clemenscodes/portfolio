import { cn } from '@styles';
import { scrollToComponent } from '@utils';
import Link from 'next/link';
import { UrlObject } from 'url';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    newTab?: boolean;
    href?: UrlObject | string;
};

export const Button: React.FC<ButtonProps> = ({
    newTab,
    className,
    children,
    href,
    ...props
}) => {
    const button = (
        <button
            {...props}
            className={cn([
                'px-6 py-3',
                'relative block items-center text-center',
                'cursor-pointer whitespace-nowrap rounded-lg border',
                'text-xl font-bold uppercase no-underline ',
                'transition-all duration-300 ease-in-out',
                'border-[#55198b] bg-[#55198b] text-white',
                'hover:bg-white hover:text-[#55198b]',
                className,
            ])}
        >
            {children}
        </button>
    );
    return newTab && href ? (
        <Link target='_blank' href={href}>
            {button}
        </Link>
    ) : href ? (
        <Link
            scroll={true}
            locale={false}
            href={href}
            onClick={scrollToComponent}
        >
            {button}
        </Link>
    ) : (
        button
    );
};

export default Button;
