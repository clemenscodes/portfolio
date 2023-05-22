import codingPerson from '../../../assets/json/codingPerson.json';
import developerActivity from '../../../assets/svg/developerActivity.svg';
import Animation from '../animation/animation';
import { illustration, skillsSection } from '@config';
import { cn } from '@styles';
import { ISkills } from '@types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export type SkillsProps = React.ComponentPropsWithoutRef<'div'> & {
    skillsProp?: ISkills;
};

export const Skills: React.FC<SkillsProps> = ({ skillsProp = skillsSection, ...props }) => {
    const [visible, setVisible] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            setVisible(true);
        }
    }, [inView]);

    return (
        <div {...props} className={cn(['flex flex-col xl:mt-20 xl:flex-row'])} id='skills'>
            <div
                ref={ref}
                className={cn(
                    'order-2 flex-1 transition-all duration-1000 md:order-1 md:mx-auto md:w-2/5 md:flex-initial',
                    visible
                        ? 'opacity-100 animate-in fade-in slide-in-from-left '
                        : 'opacity-0 animate-out fade-out slide-out-to-left '
                )}
            >
                {illustration.animated ? (
                    <Animation animationData={codingPerson} />
                ) : (
                    <Image src={developerActivity} alt={'Man working'} />
                )}
            </div>
            <div
                ref={ref}
                className={cn(
                    'order-1 flex-1 transition-all duration-1000 md:order-2',
                    visible
                        ? 'opacity-100 animate-in fade-in slide-in-from-right'
                        : 'opacity-0 animate-out fade-out slide-out-to-right'
                )}
            >
                <h1 className={cn('text-center text-3xl md:text-6xl')}>{skillsProp.title}</h1>
                <p className={cn('text-dimmed-muted text-center ')}>{skillsProp.subTitle}</p>
                {skillsProp.skillCategories.map((category, index) => (
                    <div className={cn()} key={index}>
                        <h2 className={cn()}>{category.categoryName}</h2>
                        <ul className={cn('flex flex-wrap justify-between')}>
                            {category.softwareSkills.map((skill, index) => (
                                <li
                                    key={index}
                                    className={cn('m-8 flex transition-all duration-300 hover:scale-[110%]')}
                                >
                                    <Image src={skill.src} alt={`Logo of ${skill.name}`} width={75} height={75} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                    {skillsProp.skills.map((skill, index) => (
                        <p key={index}>{skill}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
