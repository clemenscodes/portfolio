import { cn } from '@styles';

export type EducationProps = React.ComponentPropsWithoutRef<'section'>;

export const Education: React.FC<EducationProps> = ({ ...props }) => {
    return (
        <section className={cn([])} id='education' {...props}>
            {/* <h1>Welcome to Education!</h1> */}
        </section>
    );
};

export default Education;
