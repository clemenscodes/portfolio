import { cn } from '@styles';

export type OpenSourceProps = React.ComponentPropsWithoutRef<'section'>;

export const OpenSource: React.FC<OpenSourceProps> = ({ ...props }) => {
    return (
        <section className={cn([])} id='opensource' {...props}>
            {/* <h1>Welcome to OpenSource!</h1> */}
        </section>
    );
};

export default OpenSource;
