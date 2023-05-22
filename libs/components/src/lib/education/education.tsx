import { cn } from '@styles';

/* eslint-disable-next-line */
export interface EducationProps {}

export const Education: React.FC<EducationProps> = ({ ...props }) => {
    return (
        <section className={cn([])} id='education'>
            <h1>Welcome to Education!</h1>
        </section>
    );
};

export default Education;
