import { SkillCategorySkillList } from '../../skill-category-skill-list';
import { cn } from '@styles';
import { ISkillCategory } from '@types';

export type SkillCategoryProps = React.ComponentPropsWithoutRef<'li'> & {
    category: ISkillCategory;
};

export const SkillCategory: React.FC<SkillCategoryProps> = ({
    category,
    ...props
}) => {
    return (
        <li
            className={cn(
                'my-6',
                'rounded-lg shadow-full',
                'transition-all duration-300 ',
                'hover:shadow-full-xl'
            )}
            {...props}
        >
            <h2
                className={cn(
                    'pt-8 text-center',
                    'text-xl font-semibold',
                    'dark:text-dimmed-font',
                    'xl:text-2xl'
                )}
            >
                {category.categoryName}
            </h2>
            <SkillCategorySkillList softwareSkills={category.softwareSkills} />
        </li>
    );
};

export default SkillCategory;
