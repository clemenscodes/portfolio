import { cn } from '@styles';

/* eslint-disable-next-line */
export interface EducationProps {}

export const Education: React.FC<EducationProps> = ({ ...props }) => {
    return (
        <div className={cn([])} id='education'>
            <h1>Welcome to Education!</h1>
        </div>
    );
};

export default Education;
