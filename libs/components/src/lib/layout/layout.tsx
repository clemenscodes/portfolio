import Footer from '../footer/footer';
import Header from '../header/header';
import { cn } from '@styles';

export type LayoutProps = React.ComponentPropsWithoutRef<'div'>;

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
    return (
        <div className={cn('flex h-screen flex-col justify-between')} {...props}>
            <Header />
            <main className={cn('mx-6 mb-auto mt-24 md:mx-12 xl:mx-24')}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
