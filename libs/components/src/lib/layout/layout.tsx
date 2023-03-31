import Footer from '../footer/footer';
import Header from '../header/header';
import { cn } from '@styles';
import { type HTML } from '@types';

/* eslint-disable-next-line */
export interface LayoutProps extends HTML<'div'> {}

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
