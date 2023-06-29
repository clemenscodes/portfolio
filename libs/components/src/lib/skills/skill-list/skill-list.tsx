import { cn } from '@styles';
import { ISkill } from '@types';
import { Skill } from './skill';

export type SkillListProps = React.ComponentPropsWithoutRef<'ul'> & {
    skills: ISkill[];
};

export const SkillList: React.FC<SkillListProps> = ({ skills, ...props }) => {
    return (
        <ul className={cn('flex flex-wrap justify-between')} {...props}>
            {skills.map((skill, index) => (
                <Skill key={index} skill={skill} />
            ))}
        </ul>
    );
};

export default SkillList;
