import Emoji from '../../../emoji/emoji';
import { cn } from '@styles';
import { ISkill } from '@types';

export type SkillProps = React.ComponentPropsWithoutRef<'li'> & {
    skill: ISkill;
};

export const Skill: React.FC<SkillProps> = ({ skill, ...props }) => {
    return (
        <li
            {...props}
            className={cn(
                'my-2 w-full p-4 ',
                'rounded shadow-full',
                'transition-all duration-300',
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
