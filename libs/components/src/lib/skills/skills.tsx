import codingPerson from '../../../assets/json/codingPerson.json';
import developerActivity from '../../../assets/svg/developerActivity.svg';
import Animation from '../animation/animation';
import { illustration, skillsSection } from '@config';
import { cn } from '@styles';
import { HTML, ISkills } from '@types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export type SkillsProps = HTML<'div'> & {
    skillsProp?: ISkills;
};

export const Skills: React.FC<SkillsProps> = ({ skillsProp = skillsSection, ...props }) => {
    const [visible, setVisible] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            setVisible(true);
        }
    }, [inView]);

    return (
        <div {...props} className={cn(['mt-20 flex'])} id='skills'>
            <div
                ref={ref}
                className={cn(
                    'flex-1 transition-all duration-1000',
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
                    'flex-1 transition-all duration-1000',
                    visible
                        ? 'opacity-100 animate-in fade-in slide-in-from-right'
                        : 'opacity-0 animate-out fade-out slide-out-to-right'
                )}
            >
                <h1>{skillsProp.title}</h1>
                <p>{skillsProp.subTitle}</p>
                {skillsProp.softwareSkills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
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
