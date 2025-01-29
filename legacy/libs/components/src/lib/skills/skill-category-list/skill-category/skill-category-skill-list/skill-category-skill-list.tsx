import { SkillCategorySkill } from './skill-category-skill';
import { cn } from '@styles';
import { ISoftwareSkill } from '@types';

export type SkillCategorySkillListProps =
    React.ComponentPropsWithoutRef<'ul'> & {
        softwareSkills: ISoftwareSkill[];
    };

export const SkillCategorySkillList: React.FC<SkillCategorySkillListProps> = ({
    softwareSkills,
    ...props
}) => {
    return (
        <ul className={cn('flex flex-wrap justify-evenly')} {...props}>
            {softwareSkills.map((skill, index) => (
                <SkillCategorySkill key={index} softwareSkill={skill} />
            ))}
        </ul>
    );
};

export default SkillCategorySkillList;
