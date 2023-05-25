import Logo from './logo/logo';
import MenuList from './menu-list/menu-list';
import Menu from './menu/menu';
import { cn } from '@styles';
import { IGreeting, ISection } from '@types';
import { scrollToComponent } from '@utils';
import { useEffect, useRef, useState } from 'react';

export type HeaderProps = React.ComponentPropsWithoutRef<'header'> & {
    sections: ISection[];
    name: IGreeting['name'];
};

export const Header: React.FC<HeaderProps> = ({ sections, name, ...props }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [autoScroll, setAutoscroll] = useState(false);
    const headerRef = useRef<HTMLHeadingElement>(null);

    const handleChecked = () => {
        setIsChecked(!isChecked);
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setAutoscroll(true);
        scrollToComponent(e);
        setTimeout(() => setAutoscroll(false), 2000);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target as Node)
            ) {
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
            setVisible(
                prevScrollPos > currentScrollPos || currentScrollPos < 10
            );
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [autoScroll, isChecked, prevScrollPos, visible]);

    return (
        <header
            {...props}
            ref={headerRef}
            className={cn([
                'fixed left-0 right-0 top-0 z-10 h-24',
                'transform transition-transform duration-300',
                'bg-white shadow-md',
                'dark:bg-dimmed-900',
                visible || '-translate-y-full',
            ])}
        >
            <nav className={cn('mx-4 flex h-full')}>
                <div
                    className={cn(
                        'absolute flex items-center',
                        'my-auto',
                        'h-full w-2/5',
                        'transform'
                    )}
                >
                    <Logo name={name} />
                </div>
                <div
                    className={cn(
                        'flex flex-col',
                        'my-auto w-screen space-x-4',
                        'w-screen items-end justify-end',
                        'md:flex-row md:items-center'
                    )}
                >
                    <Menu isChecked={isChecked} handleChecked={handleChecked} />
                    <MenuList
                        isChecked={isChecked}
                        sections={sections}
                        handleChecked={handleChecked}
                        handleScroll={handleScroll}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
