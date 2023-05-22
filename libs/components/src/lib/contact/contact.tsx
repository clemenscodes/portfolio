import { cn } from '@styles';

export type ContactProps = React.ComponentPropsWithoutRef<'section'>;

export const Contact: React.FC<ContactProps> = ({ ...props }) => {
    return (
        <section className={cn([])} id='contact' {...props}>
            <h1>Welcome to Contact!</h1>
        </section>
    );
};

export default Contact;
