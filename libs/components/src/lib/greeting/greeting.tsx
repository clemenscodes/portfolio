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
        <div {...props} className={cn(['animate-in fade-in slide-in-from-bottom-10 duration-1000'])}>
            <div className=''>
                <div className=''>
                    <h1>
                        {greetingProps.title}{' '}
                        <Emoji className='animate-wave inline-block' emoji={'👋'} label={'waving-hand-emoji'} />
                    </h1>
                    <p className=''>{greeting.subTitle}</p>
                    <SocialMedia />
                    <div className=''>
                        <Button newTab={true} href='#contact'>
                            Contact me
                        </Button>
                        <Button newTab={true} href={greeting.resumeLink}>
                            See my resume
                        </Button>
                    </div>
                </div>
            </div>
            <div className=''>
                {illustration.animated ? (
                    <Animation animationData={manWaving} />
                ) : (
                    <Image alt='man sitting on table' src={manOnTable} />
                )}
            </div>
        </div>
    );
};

export default Greeting;
