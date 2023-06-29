import { cn } from '@styles';
import { ISkillCategory } from '@types';
import { SkillCategory } from './skill-category';

export type SkillCategoryListProps = React.ComponentPropsWithoutRef<'ul'> & {
    skillCategories: ISkillCategory[];
};

export const SkillCategoryList: React.FC<SkillCategoryListProps> = ({
    skillCategories,
    ...props
}) => {
    return (
        <ul className={cn()} {...props}>
            {skillCategories.map((category, index) => (
                <SkillCategory category={category} key={index} />
            ))}
        </ul>
    );
};

export default SkillCategoryList;
