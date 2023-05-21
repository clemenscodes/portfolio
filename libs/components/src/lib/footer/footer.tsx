import Contact from '../contact/contact';
import { cn } from '@styles';
import { type HTML } from '@types';

/* eslint-disable-next-line */
export interface FooterProps extends HTML<'footer'> {}

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
    return (
        <footer {...props} className={cn([])}>
            <Contact />
        </footer>
    );
};

export default Footer;
