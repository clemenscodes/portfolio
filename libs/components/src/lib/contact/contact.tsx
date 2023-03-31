import { cn } from '@styles';

/* eslint-disable-next-line */
export interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Contact!</h1>
        </div>
    );
};

export default Contact;
