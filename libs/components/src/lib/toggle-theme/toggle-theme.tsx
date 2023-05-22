import { cn } from '@styles';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { type HTML } from '@types';
import { forwardRef } from '@utils';
import { useTheme } from 'next-themes';

export type ToggleThemeProps = HTML<'button'>;

export const ToggleTheme = forwardRef<ToggleThemeProps>(({ className, ...props }, ref) => {
    const { setTheme, theme } = useTheme();
    const isDark = theme === 'dark';
    const toggleTheme = () => (isDark ? setTheme('light') : setTheme('dark'));
    return (
        <button
            {...props}
            ref={ref}
            onClick={toggleTheme}
            className={cn('rounded-full hover:bg-dimmed-light dark:hover:bg-dimmed-800', className)}
        >
            <IconSun className='absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <IconMoon className='rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </button>
    );
}, 'ToggleTheme');

export default ToggleTheme;
