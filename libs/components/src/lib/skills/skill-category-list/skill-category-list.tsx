import { SkillCategory } from './skill-category';
import { cn } from '@styles';
import { ISkillCategory } from '@types';

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
