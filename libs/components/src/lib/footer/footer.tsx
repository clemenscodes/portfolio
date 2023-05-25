import Contact from '../contact/contact';
import { cn } from '@styles';
import { IContact, ISocialMediaLinks } from '@types';

export type FooterProps = React.ComponentPropsWithoutRef<'footer'> & {
    contact: IContact;
    links: ISocialMediaLinks;
};

export const Footer: React.FC<FooterProps> = ({ contact, links, ...props }) => {
    return (
        <footer {...props} className={cn([])}>
            <Contact contact={contact} links={links} />
        </footer>
    );
};

export default Footer;
