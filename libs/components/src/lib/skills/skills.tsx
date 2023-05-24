import codingPerson from '../../../assets/json/codingPerson.json';
import Animation from '../animation/animation';
import { SkillCategoryList, SkillList } from './';
import { skillsSection } from '@config';
import { cn } from '@styles';
import { ISkills } from '@types';
import { useEffect, useRef, useState } from 'react';

export type SkillsProps = React.ComponentPropsWithoutRef<'section'> & {
    skillsProp?: ISkills;
};

export const Skills: React.FC<SkillsProps> = ({
    skillsProp = skillsSection,
    ...props
}) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(ref.current);
    });

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
                        'transition-all duration-1000',
                        'xl:order-1 xl:mx-auto xl:w-2/5 xl:flex-initial',
                        visible && 'opacity-100',
                        visible && 'animate-in fade-in',
                        visible && 'slide-in-from-left',
                        visible || 'opacity-0',
                        visible || 'animate-out fade-out',
                        visible || 'slide-out-to-left'
                    )}
                >
                    <Animation animationData={codingPerson} />
                </div>
                <div
                    className={cn(
                        'order-1 flex-1',
                        'transition-all duration-1000',
                        'xl:order-2',
                        visible && 'opacity-100',
                        visible && 'animate-in fade-in',
                        visible && 'slide-in-from-right',
                        visible || 'opacity-0',
                        visible || 'animate-out fade-out',
                        visible || 'slide-out-to-right'
                    )}
                >
                    <h1 className={cn('text-center text-5xl xl:text-8xl')}>
                        {skillsProp.title}
                    </h1>
                    <p
                        className={cn(
                            'm-2 p-2 text-center',
                            'text-3xl',
                            'text-dimmed-muted'
                        )}
                    >
                        {skillsProp.subTitle}
                    </p>
                    <SkillCategoryList
                        skillCategories={skillsProp.skillCategories}
                    />
                </div>
            </div>
            <SkillList skills={skillsProp.skills} />
        </section>
    );
};

export default Skills;
