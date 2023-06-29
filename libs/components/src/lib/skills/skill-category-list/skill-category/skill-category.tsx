// import { useIntersection } from '@hooks';

import { SkillCategorySkillList } from './skill-category-skill-list';
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
            // ref={ref}
            className={cn(
                'my-6',
                'rounded-lg shadow-full',
                'transform will-change-transform',
                'transition-all duration-1000',
                'hover:shadow-full-xl'
                // visible && 'opacity-100',
                // visible && 'animate-in fade-in ease-in-out',
                // visible && 'slide-in-from-right',
                // visible || 'opacity-0',
                // visible || 'animate-out fade-out',
                // visible || 'slide-out-to-right'
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
