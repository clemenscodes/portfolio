import codingPerson from '../../../assets/json/codingPerson.json';
import Animation from '../animation/animation';
import { SkillCategoryList, SkillList } from './';
import { useIntersection } from '@hooks';
import { cn } from '@styles';
import { ISkills } from '@types';

export type SkillsProps = React.ComponentPropsWithoutRef<'section'> & {
    skills: ISkills;
};

export const Skills: React.FC<SkillsProps> = ({ skills, ...props }) => {
    const [ref, visible] = useIntersection({ threshold: 0.1 });
    return (
        <section
            ref={ref}
            {...props}
            className={cn(['flex flex-col'])}
            id='skills'
        >
            <div className='flex flex-col xl:mt-20 xl:flex-row'>
                <div
                    className={cn(
                        'order-2 flex-1',
                        'transform will-change-transform',
                        'transition-all duration-1000',
                        visible && 'opacity-100',
                        visible && 'animate-in fade-in ease-out',
                        visible && 'slide-in-from-left',
                        visible || 'hidden',
                        visible || 'opacity-0',
                        visible || 'animate-out fade-out',
                        visible || 'slide-out-to-left',
                        'xl:order-1 xl:mx-auto xl:w-2/5 xl:flex-initial'
                    )}
                >
                    <Animation animationData={codingPerson} />
                </div>
                <div
                    className={cn(
                        'order-1 flex-1',
                        'transform will-change-transform',
                        'transition-all duration-1000',
                        visible && 'opacity-100',
                        visible && 'animate-in fade-in ease-out',
                        visible && 'slide-in-from-bottom',
                        visible || 'opacity-0',
                        visible || 'animate-out fade-out',
                        visible || 'slide-out-to-right',
                        'xl:order-2'
                    )}
                >
                    <h1 className={cn('text-center text-5xl xl:text-8xl')}>
                        {skills.title}
                    </h1>
                    <p
                        className={cn(
                            'm-2 p-2 text-center',
                            'text-3xl',
                            'text-dimmed-muted'
                        )}
                    >
                        {skills.subTitle}
                    </p>
                    <SkillCategoryList
                        skillCategories={skills.skillCategories}
                    />
                </div>
            </div>
            <SkillList skills={skills.skills} />
        </section>
    );
};

export default Skills;
