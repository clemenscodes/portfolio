import Logo from '../logo/logo';
import ToggleTheme from '../toggle-theme/toggle-theme';
import { sections } from '@config';
import { cn } from '@styles';
import { Section, type HTML } from '@types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type HeaderProps = HTML<'header'> & {
    sectionsProp?: Section[];
};

export const Header: React.FC<HeaderProps> = ({ sectionsProp = sections, ...props }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <header
            {...props}
            className={cn([
                'dark:bg-dimmed-900 fixed left-0 top-0 z-10 h-16 w-full transform whitespace-nowrap bg-white shadow-md transition-transform duration-300',
                visible ? '' : '-translate-y-full',
            ])}
        >
            <nav className={cn('mx-4 flex h-full')}>
                <div className='my-auto flex w-1/5 space-x-4'>
                    <Logo />
                </div>
                <div className='my-auto flex w-full flex-col items-end justify-end space-x-4 md:flex-row md:items-center'>
                    <input
                        className={cn('hidden')}
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
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
                                isChecked ? 'dark:bg-dimmed-900 bg-white transition-all duration-200 ease-out' : '',
                                'after:absolute after:-top-1 after:block after:h-[2px] after:w-4',
                                'after:bg-black dark:after:bg-white',
                                'after:transform after:transition-all after:duration-200 after:ease-out',
                                isChecked ? 'after:top-0 after:rotate-45' : ''
                            )}
                        ></span>
                    </label>
                    <ul
                        className={cn(
                            'max-h-none list-none items-center justify-center overflow-hidden md:flex md:space-x-4'
                        )}
                    >
                        {sections.map((section, index) => {
                            return (
                                section.display && (
                                    <li
                                        key={index}
                                        className={cn(
                                            'md:text-md dark:hover:bg-dimmed-800 hover:bg-dimmed-light flex flex-col items-end rounded p-2 text-sm md:inline-block',
                                            isChecked ? '' : 'hidden'
                                        )}
                                    >
                                        <Link scroll={true} href={section.href}>
                                            {section.name}
                                        </Link>
                                    </li>
                                )
                            );
                        })}
                        <li className={cn('flex flex-col items-end md:inline-block', isChecked ? '' : 'hidden')}>
                            <ToggleTheme />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
