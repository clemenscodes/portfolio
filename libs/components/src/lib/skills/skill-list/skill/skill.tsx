// import { useIntersection } from '@hooks';

import Emoji from '../../../emoji/emoji';
import { cn } from '@styles';
import { ISkill } from '@types';

export type SkillProps = React.ComponentPropsWithoutRef<'li'> & {
    skill: ISkill;
};

export const Skill: React.FC<SkillProps> = ({ skill, ...props }) => {
    // const [ref, visible] = useIntersection<HTMLLIElement>();
    return (
        <li
            // ref={ref}
            {...props}
            className={cn(
                'my-2 w-full p-4 ',
                'rounded shadow-full',
                'transition-all  duration-300',
                // 'transform will-change-transform',
                // visible && 'duration-1000',
                // visible && 'opacity-100',
                // visible && 'animate-in fade-in ease-out',
                // visible && 'slide-in-from-left',
                // visible || 'opacity-0',
                // visible || 'animate-out fade-out',
                // visible || 'slide-out-to-right',
                'hover:shadow-full-xl',
                'md:min-w-1/5 md:w-[49%]',
                'xl:my-6 xl:w-[30%]'
            )}
        >
            <h2 className={cn('p-2 text-center text-2xl  xl:text-2xl')}>
                <Emoji emoji={'🔥'} label={'fire-emoji'} /> {skill.name}
            </h2>
            <p
                className={cn(
                    'my-4 text-center',
                    'text-lg',
                    'text-dimmed-muted',
                    'transition-all',
                    'md:text-xl'
                )}
            >
                {skill.description}
            </p>
        </li>
    );
};

export default Skill;
