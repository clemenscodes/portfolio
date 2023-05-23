import Contact from '../contact/contact';
import { cn } from '@styles';

export type FooterProps = React.ComponentPropsWithoutRef<'footer'>;

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
    return (
        <footer {...props} className={cn([])}>
            <Contact />
        </footer>
    );
};

export default Footer;
