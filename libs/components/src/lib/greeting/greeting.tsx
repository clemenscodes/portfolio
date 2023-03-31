import { greeting } from '@config';
import { cn } from '@styles';
import { type HTML, type IGreeting } from '@types';

export type GreetingProps = HTML<'div'> & {
    greetingProps: IGreeting;
};

export const Greeting: React.FC<GreetingProps> = ({ greetingProps = greeting, ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Greeting!</h1>
        </div>
    );
};

export default Greeting;
