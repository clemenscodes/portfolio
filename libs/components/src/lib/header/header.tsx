import Logo from '../logo/logo';
import ToggleTheme from '../toggle-theme/toggle-theme';
import { cn } from '@styles';
import { type HTML } from '@types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type HeaderProps = HTML<'header'>;

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
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
                'dark:bg-dimmed-900 fixed left-0 top-0 z-10 h-16 w-full transform bg-white shadow-md transition-transform duration-300',
                visible ? '' : '-translate-y-full',
            ])}
        >
            <nav className={cn('mx-4 flex h-full')}>
                <div className='my-auto flex w-1/2 space-x-4'>
                    <Logo />
                </div>
                <div className='my-auto flex w-1/2  items-center justify-end space-x-4'>
                    <ul>
                        <li>
                            <Link scroll={true} href={`/#skills`}>
                                Skills
                            </Link>
                        </li>
                    </ul>
                    <ToggleTheme />
                </div>
            </nav>
        </header>
    );
};

export default Header;
