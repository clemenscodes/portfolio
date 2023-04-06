import { cn } from '@styles';
import { type HTML } from '@types';
import Link from 'next/link';
import { UrlObject } from 'url';

export type ButtonProps = HTML<'button'> & {
    newTab: boolean;
    href: UrlObject | string;
};

export const Button: React.FC<ButtonProps> = ({ newTab, className, children, href, ...props }) => {
    return (
        <button {...props} className={cn([className])}>
            {newTab ? (
                <Link target='_blank' href={href}>
                    {children}
                </Link>
            ) : (
                <Link href={href}>{children}</Link>
            )}
        </button>
    );
};

export default Button;
