import codingPerson from '../../../assets/json/codingPerson.json';
import developerActivity from '../../../assets/svg/developerActivity.svg';
import Animation from '../animation/animation';
import Emoji from '../emoji/emoji';
import { illustration, skillsSection } from '@config';
import { cn } from '@styles';
import { ISkills } from '@types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export type SkillsProps = React.ComponentPropsWithoutRef<'section'> & {
    skillsProp?: ISkills;
};

export const Skills: React.FC<SkillsProps> = ({ skillsProp = skillsSection, ...props }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <section {...props} className={cn(['flex flex-col'])} id='skills'>
            <div className='flex flex-col xl:mt-20 xl:flex-row'>
                <div
                    className={cn(
                        'order-2 flex-1 transition-all duration-1000 xl:order-1 xl:mx-auto xl:w-2/5 xl:flex-initial',
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
                    className={cn(
                        'order-1 flex-1 transition-all duration-1000 xl:order-2',
                        visible
                            ? 'opacity-100 animate-in fade-in slide-in-from-right'
                            : 'opacity-0 animate-out fade-out slide-out-to-right'
                    )}
                >
                    <h1 className={cn('text-center text-5xl xl:text-8xl')}>{skillsProp.title}</h1>
                    <p className={cn('m-2 p-2 text-center text-3xl text-dimmed-muted')}>{skillsProp.subTitle}</p>
                    {skillsProp.skillCategories.map((category, index) => (
                        <div
                            className={cn(
                                'my-6 rounded-lg shadow-full transition-all duration-300 hover:shadow-full-xl'
                            )}
                            key={index}
                        >
                            <h2
                                className={cn(
                                    'pt-8 text-center text-xl font-semibold dark:text-dimmed-font xl:text-2xl'
                                )}
                            >
                                {category.categoryName}
                            </h2>
                            <ul className={cn('flex flex-wrap justify-evenly')}>
                                {category.softwareSkills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className={cn(
                                            'relative m-8 flex h-16 w-16 transition-all duration-300 hover:scale-[110%] xl:h-20 xl:w-20'
                                        )}
                                    >
                                        <Image
                                            src={skill.src}
                                            alt={`Logo of ${skill.name}`}
                                            fill
                                            className={cn('object-contain')}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <ul className={cn('flex flex-wrap justify-between')}>
                {skillsProp.skills.map((skill, index) => (
                    <li
                        key={index}
                        className={cn(
                            'my-2 w-full rounded p-4 shadow-full transition-all duration-300',
                            'hover:shadow-full-xl',
                            'md:min-w-1/5 md:w-[49%]',
                            'xl:my-6 xl:w-[30%]'
                        )}
                    >
                        <h4 className={cn('p-2 text-center text-2xl  xl:text-3xl')}>
                            <Emoji emoji={'🔥'} label={'fire-emoji'} /> {skill.name}
                        </h4>
                        <p className={cn('my-4 text-center text-lg text-dimmed-muted transition-all md:text-xl')}>
                            {skill.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
