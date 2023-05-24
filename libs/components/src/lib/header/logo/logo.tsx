import { greeting } from '@config';
import { cn } from '@styles';
import { scrollToTop } from '@utils';

export type LogoProps = React.ComponentPropsWithoutRef<'button'> & {
    name?: string;
};

export const Logo: React.FC<LogoProps> = ({
    name = greeting.name,
    ...props
}) => {
    return (
        <button
            className={cn(
                'flex items-center justify-center',
                'h-4/5 p-2',
                'rounded text-2xl',
                'hover:bg-gray-200',
                'dark:hover:bg-dimmed-800'
            )}
            onClick={scrollToTop}
            {...props}
        >
            <div className={cn('flex', 'dark:text-gray-200')}> &lt;</div>
            <div
                className={cn(
                    'flex items-center',
                    'h-full px-2 pt-4',
                    'font-agustina font-bold',
                    'whitespace-nowrap'
                )}
            >
                {name}
            </div>
            <div className={cn('flex', 'dark:text-gray-200')}>/&gt;</div>
        </button>
    );
};

export default Logo;
