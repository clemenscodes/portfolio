import { cn } from '@styles';
import { ISoftwareSkill } from '@types';
import Image from 'next/image';
import React from 'react';

export type SkillCategorySkillProps = React.ComponentPropsWithoutRef<'li'> & {
    softwareSkill: ISoftwareSkill;
};

export const SkillCategorySkill: React.FC<SkillCategorySkillProps> = ({
    softwareSkill,
    ...props
}) => {
    return (
        <li
            {...props}
            className={cn(
                'relative flex',
                'm-8 h-16 w-16',
                'transition-all duration-300',
                'hover:scale-[110%]',
                'xl:h-20 xl:w-20'
            )}
        >
            <Image
                src={softwareSkill.src}
                alt={`Logo of ${softwareSkill.name}`}
                fill
                loading='lazy'
                priority={false}
                className={cn('object-contain')}
            />
        </li>
    );
};

export default SkillCategorySkill;
