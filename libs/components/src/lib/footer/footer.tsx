import { cn } from '@styles';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
    return (
        <footer className={cn([])}>
            <h1>Welcome to Footer!</h1>
        </footer>
    );
};

export default Footer;
