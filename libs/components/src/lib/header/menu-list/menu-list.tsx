import LanguageSelection from '../language-selection/language-selection';
import ToggleTheme from '../toggle-theme/toggle-theme';
import { cn } from '@styles';
import { ISection } from '@types';
import Link from 'next/link';

export type MenuListProps = React.ComponentPropsWithoutRef<'ul'> & {
    isChecked: boolean;
    sections: ISection[];
    handleChecked: () => void;
    handleScroll: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const MenuList: React.FC<MenuListProps> = ({
    isChecked,
    sections,
    handleChecked,
    handleScroll,
    ...props
}) => {
    return (
        <ul
            {...props}
            className={cn(
                'absolute items-center justify-center',
                'right-0 top-3/4 max-h-none',
                'list-none rounded bg-white shadow-full',
                'translate-y-3/4 transition-transform ',
                'dark:bg-dimmed-900',
                'md:static md:flex md:space-x-2',
                'md:shadow-none',
                'md:translate-y-0',
                isChecked && 'opacity-100',
                isChecked && 'animate-in fade-in',
                isChecked && 'slide-in-from-right',
                isChecked && 'md:animate-none',
                isChecked || 'hidden opacity-0',
                isChecked || 'animate-out fade-out',
                isChecked || 'slide-out-to-right',
                isChecked || 'md:animate-none md:opacity-100'
            )}
        >
            {sections.map((section, index) => {
                return (
                    section.display && (
                        <li
                            key={index}
                            onClick={handleChecked}
                            className={cn(
                                'flex flex-col items-center',
                                'px-6 py-3',
                                'rounded text-sm',
                                'transition-transform',
                                'hover:bg-gray-200',
                                'dark:bg-dimmed-900',
                                'dark:hover:bg-dimmed-800',
                                'md:text-md md:inline-block',
                                'xl:text-2xl'
                            )}
                        >
                            <Link
                                scroll={true}
                                href={section.href}
                                onClick={handleScroll}
                            >
                                {section.name}
                            </Link>
                        </li>
                    )
                );
            })}
            <li
                className={cn(
                    'flex flex-col items-center',
                    'rounded',
                    'md:inline-block md:items-center',
                    'xl:text-2xl',
                    isChecked || 'hidden'
                )}
            >
                <ToggleTheme />
            </li>
            <li
                className={cn(
                    'flex flex-col items-center',
                    'rounded',
                    'md:inline-block md:items-center',
                    'xl:text-2xl'
                )}
            >
                <LanguageSelection />
            </li>
        </ul>
    );
};

export default MenuList;
