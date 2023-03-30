import Footer from '../footer/footer';
import Header from '../header/header';
import { cn } from '@styles';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface LayoutProps extends PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
    return (
        <div className={cn('flex h-screen flex-col justify-between')}>
            <Header />
            <main className={cn('mb-auto mt-16')}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
