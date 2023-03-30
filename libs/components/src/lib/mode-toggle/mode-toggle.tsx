import { cn } from '@styles';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { HTML } from '@types';
import { useTheme } from 'next-themes';

/* eslint-disable-next-line */
export interface ModeToggleProps extends HTML<'button'> {}

export const ModeToggle: React.FC<ModeToggleProps> = ({ ...props }) => {
    const { setTheme, theme } = useTheme();
    const isDark = theme === 'dark';

    const toggleTheme = () => (isDark ? setTheme('light') : setTheme('dark'));

    return (
        <button onClick={toggleTheme} className={cn('dark:hover:bg-dimmed-800 rounded-full p-2 hover:bg-gray-200')}>
            <IconSun className='absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <IconMoon className='rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </button>
    );
};

export default ModeToggle;
