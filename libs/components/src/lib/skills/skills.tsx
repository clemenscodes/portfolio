import codingPerson from '../../../assets/json/codingPerson.json';
import developerActivity from '../../../assets/svg/developerActivity.svg';
import Animation from '../animation/animation';
import { illustration, skillsSection } from '@config';
import { cn } from '@styles';
import { HTML, ISkills } from '@types';
import Image from 'next/image';

export type SkillsProps = HTML<'div'> & {
    skillsProp?: ISkills;
};

export const Skills: React.FC<SkillsProps> = ({ skillsProp = skillsSection, ...props }) => {
    return (
        <div {...props} className={cn(['mt-20 flex'])} id='skills'>
            <div className='flex-1 animate-in fade-in slide-in-from-left duration-1000'>
                {illustration.animated ? (
                    <Animation animationData={codingPerson} />
                ) : (
                    <Image src={developerActivity} alt={'Man working'} />
                )}
            </div>
            <div className='flex-1 animate-in fade-in slide-in-from-right duration-1000'>
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
