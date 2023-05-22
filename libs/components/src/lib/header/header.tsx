import Logo from '../logo/logo';
import ToggleTheme from '../toggle-theme/toggle-theme';
import { sections } from '@config';
import { cn } from '@styles';
import { Section } from '@types';
import { scrollToComponent } from '@utils';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export type HeaderProps = React.ComponentPropsWithoutRef<'header'> & {
    sectionsProp?: Section[];
};

export const Header: React.FC<HeaderProps> = ({ sectionsProp = sections, ...props }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [autoScroll, setAutoscroll] = useState(false);
    const headerRef = useRef<HTMLHeadingElement>(null);

    const handleChecked = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsChecked(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setPrevScrollPos(currentScrollPos);
            if (autoScroll) {
                return setVisible(false);
            }
            if (isChecked) {
                return setVisible(true);
            }
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [autoScroll, isChecked, prevScrollPos, visible]);

    return (
        <header
            {...props}
            ref={headerRef}
            className={cn([
                'fixed left-0 right-0 top-0 z-10 h-16 transform bg-white shadow-md transition-transform duration-300 dark:bg-dimmed-900',
                visible ? '' : '-translate-y-full',
            ])}
        >
            <nav className={cn('mx-4 flex h-full')}>
                <div className='absolute my-auto flex h-full w-2/5 transform items-center'>
                    <Logo />
                </div>
                <div className='my-auto flex w-screen flex-col items-end justify-end space-x-4 md:flex-row md:items-center'>
                    <input
                        className={cn('hidden')}
                        checked={isChecked}
                        onChange={handleChecked}
                        type='checkbox'
                        id='menu'
                    />
                    <label htmlFor='menu' className={cn('max-h-16 cursor-pointer select-none px-2 py-8')}>
                        <span
                            className={cn(
                                'before:absolute before:top-1 before:block before:h-[2px] before:w-4',
                                'before:bg-black dark:before:bg-white',
                                'before:transform before:transition-all before:duration-200 before:ease-out',
                                isChecked ? 'before:top-0 before:-rotate-45' : '',
                                'relative right-0 block h-[2px] w-4 bg-black dark:bg-white md:hidden',
                                isChecked ? 'bg-white transition-all duration-200 ease-out dark:bg-dimmed-900' : '',
                                'after:absolute after:-top-1 after:block after:h-[2px] after:w-4',
                                'after:bg-black dark:after:bg-white',
                                'after:transform after:transition-all after:duration-200 after:ease-out',
                                isChecked ? 'after:top-0 after:rotate-45' : ''
                            )}
                        ></span>
                    </label>
                    <ul
                        className={cn(
                            'absolute right-0 top-3/4 max-h-none translate-y-3/4 list-none items-center justify-center rounded bg-white shadow-full transition-transform dark:bg-dimmed-900 md:static md:flex md:translate-y-0 md:space-x-2 md:shadow-none',
                            isChecked
                                ? 'opacity-100 animate-in fade-in slide-in-from-right md:animate-none'
                                : 'opacity-0 animate-out fade-out slide-out-to-right ease-out md:animate-none md:opacity-100'
                        )}
                    >
                        {sections.map((section, index) => {
                            return (
                                section.display && (
                                    <li
                                        key={index}
                                        onClick={handleChecked}
                                        className={cn(
                                            'md:text-md flex flex-col items-center rounded p-3 text-sm transition-transform hover:bg-gray-200 dark:bg-dimmed-900 dark:hover:bg-dimmed-800 md:inline-block xl:text-xl'
                                        )}
                                    >
                                        <Link
                                            scroll={true}
                                            href={section.href}
                                            onClick={(e) => {
                                                setAutoscroll(true);
                                                scrollToComponent(e);
                                                setTimeout(() => setAutoscroll(false), 2000);
                                            }}
                                        >
                                            {section.name}
                                        </Link>
                                    </li>
                                )
                            );
                        })}
                        <li
                            className={cn(
                                'flex flex-col items-center rounded bg-white hover:bg-gray-200 dark:bg-dimmed-900 md:inline-block md:items-center',
                                isChecked ? '' : 'hidden'
                            )}
                        >
                            <ToggleTheme />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
