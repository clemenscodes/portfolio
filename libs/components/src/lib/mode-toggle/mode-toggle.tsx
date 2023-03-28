import { cn } from '@styles';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

/* eslint-disable-next-line */
export interface ModeToggleProps {}

export const ModeToggle: React.FC<ModeToggleProps> = ({ ...props }) => {
    const { setTheme, theme } = useTheme();
    const isDark = theme === 'dark';
    const toggleTheme = () => (isDark ? setTheme('light') : setTheme('dark'));

    return (
        <button onClick={toggleTheme} className={cn('dark:hover:bg-dimmed-800 m-2 rounded p-1 hover:bg-gray-200')}>
            <IconSun className={cn(isDark ? '' : 'hidden')} />
            <IconMoon className={cn(isDark ? 'hidden' : '')} />
        </button>
    );
};

export default ModeToggle;
