import manWaving from '../../../assets/json/landingPerson.json';
import manOnTable from '../../../assets/svg/manOnTable.svg';
import Animation from '../animation/animation';
import Button from '../button/button';
import Emoji from '../emoji/emoji';
import SocialMedia from '../social-media/social-media';
import { greeting, illustration } from '@config';
import { cn } from '@styles';
import { type HTML, type IGreeting } from '@types';
import Image from 'next/image';

export type GreetingProps = HTML<'div'> & {
    greetingProps?: IGreeting;
};

export const Greeting: React.FC<GreetingProps> = ({ greetingProps = greeting, ...props }) => {
    return (
        <div {...props} className={cn(['animate-in fade-in slide-in-from-bottom-10 duration-1000 md:my-16'])}>
            <div className={cn('block md:flex')}>
                <div className={cn('flex-1')}>
                    <h1
                        className={cn(
                            'my-8 flex-1 text-center text-3xl font-bold leading-tight md:text-left md:text-4xl xl:text-5xl 2xl:text-6xl'
                        )}
                    >
                        {greetingProps.title}{' '}
                        <Emoji className='inline-block animate-wave' emoji={'👋'} label={'waving-hand-emoji'} />
                    </h1>
                    <p
                        className={cn(
                            'text-dimmed-muted text-dimmed-muted my-8 flex-1 text-center text-2xl md:text-left md:text-3xl md:leading-10'
                        )}
                    >
                        {greeting.subTitle}
                    </p>
                    <SocialMedia className='my-8' />
                    <div className={cn('my-10 flex space-x-12 xl:w-1/2 xl:justify-between')}>
                        <Button className='p-3' newTab={false} href='#contact'>
                            Contact me
                        </Button>
                        <Button className='p-3' newTab={true} href={greeting.resumeLink}>
                            See my resume
                        </Button>
                    </div>
                </div>
                <div className={cn('mb-8 flex-1')}>
                    <div className={cn('h-full w-full')}>
                        {illustration.animated ? (
                            <Animation animationData={manWaving} />
                        ) : (
                            <Image className={cn('h-auto max-w-full')} alt='man sitting on table' src={manOnTable} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greeting;
