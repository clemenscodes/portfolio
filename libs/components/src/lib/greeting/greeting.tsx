import Emoji from '../emoji/emoji';
import { greeting } from '@config';
import { cn } from '@styles';
import { type HTML, type IGreeting } from '@types';

export type GreetingProps = HTML<'div'> & {
    greetingProps?: IGreeting;
};

export const Greeting: React.FC<GreetingProps> = ({ greetingProps = greeting, ...props }) => {
    return (
        <div {...props} className={cn([])}>
            <h1>
                {greetingProps.title}{' '}
                <Emoji className='animate-wave inline-block' emoji={'👋'} label={'waving-hand-emoji'} />
            </h1>
        </div>
    );
};

export default Greeting;
