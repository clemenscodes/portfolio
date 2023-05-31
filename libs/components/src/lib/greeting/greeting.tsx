import manWaving from '../../../assets/json/landingPerson.json';
import Animation from '../animation/animation';
import Button from '../button/button';
import Emoji from '../emoji/emoji';
import SocialMedia from '../social-media/social-media';
import { useIntersection } from '@hooks';
import { cn } from '@styles';
import { type ISocialMediaLinks, type IGreeting } from '@types';
import { useEffect, useState } from 'react';

export type GreetingProps = React.ComponentPropsWithoutRef<'section'> & {
    greeting: IGreeting;
    links: ISocialMediaLinks;
};

export const Greeting: React.FC<GreetingProps> = ({
    links,
    greeting,
    ...props
}) => {
    const [ref, visible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        if (visible) {
            setTimeout(() => setAnimate(true), 1000);
        }
    }, [visible]);
    return (
        <section
            ref={ref}
            {...props}
            className={cn([
                'animate-in fade-in slide-in-from-bottom-10 duration-1000',
                'md:my-16',
            ])}
        >
            <div className={cn('block md:flex')}>
                <div className={cn('flex-1')}>
                    <h1
                        className={cn(
                            'flex-1 text-center',
                            'my-8',
                            'text-3xl font-bold leading-tight',
                            'whitespace-nowrap',
                            'md:text-left md:text-4xl',
                            'xl:text-5xl',
                            '2xl:text-6xl'
                        )}
                    >
                        {greeting.title}{' '}
                        <Emoji
                            className='inline-block animate-wave'
                            emoji={'👋'}
                            label={'waving-hand-emoji'}
                        />
                    </h1>
                    <p
                        className={cn(
                            'flex-1 text-center',
                            'mx-auto my-8 w-4/5',
                            'text-2xl',
                            'text-dimmed-muted',
                            'md:w-full md:text-left md:text-3xl md:leading-10',
                            'xl:text-4xl'
                        )}
                    >
                        {greeting.subTitle}
                    </p>
                    <SocialMedia className={cn('my-8')} links={links} />
                    <div
                        className={cn(
                            'flex justify-evenly',
                            'my-10 space-x-6',
                            'md:w-1/2 md:justify-between md:space-x-36'
                        )}
                    >
                        <Button
                            className={cn(
                                'p-2',
                                'whitespace-normal text-lg',
                                'md:whitespace-nowrap',
                                'md:p-3 md:text-xl'
                            )}
                            newTab={false}
                            href='#contact'
                        >
                            {greeting.contactMe}
                        </Button>
                        <Button
                            className={cn(
                                'p-2',
                                'whitespace-normal text-lg',
                                'md:whitespace-nowrap',
                                'md:p-3 md:text-xl'
                            )}
                            newTab={true}
                            href={greeting.resumeLink}
                        >
                            {greeting.seeResume}
                        </Button>
                    </div>
                </div>
                <div className={cn('mb-8 flex-1')}>
                    <Animation
                        className={cn(
                            'transform will-change-transform',
                            'transition-all duration-1000',
                            animate && 'opacity-100',
                            animate && 'animate-in fade-in ease-out',
                            animate && 'slide-in-from-right',
                            animate || 'hidden',
                            animate || 'opacity-0',
                            animate || 'animate-out fade-out',
                            animate || 'slide-out-to-right'
                        )}
                        animationData={manWaving}
                    />
                </div>
            </div>
        </section>
    );
};

export default Greeting;
