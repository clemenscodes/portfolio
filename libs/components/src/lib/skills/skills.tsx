import { cn } from '@styles';

/* eslint-disable-next-line */
export interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = ({ ...props }) => {
    return (
        <div className={cn([])} id='skills'>
            <h1>Welcome to Skills!</h1>
        </div>
    );
};

export default Skills;
