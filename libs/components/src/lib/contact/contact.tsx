import email from '../../../assets/json/email.json';
import Animation from '../animation/animation';
import Emoji from '../emoji/emoji';
import SocialMedia from '../social-media/social-media';
import { cn } from '@styles';
import { IContact, ISocialMediaLinks } from '@types';

export type ContactProps = React.ComponentPropsWithoutRef<'section'> & {
    contact: IContact;
    links: ISocialMediaLinks;
};

export const Contact: React.FC<ContactProps> = ({
    contact,
    links,
    ...props
}) => {
    return (
        <section
            className={cn(['flex flex-col', 'md:flex-row'])}
            id='contact'
            {...props}
        >
            <div
                className={cn(
                    'flex flex-col',
                    'm-8 md:w-1/2',
                    'justify-between text-center'
                )}
            >
                <h2 className={cn('my-6', 'text-5xl', 'md:text-6xl')}>
                    {contact.title}{' '}
                    <Emoji emoji={'📫'} label={'telephone-emoji'} />
                </h2>
                <p
                    className={cn(
                        'my-6',
                        'text-lg',
                        'text-dimmed-muted',
                        'md:text-3xl'
                    )}
                >
                    {contact.subTitle}
                </p>
                <p
                    className={cn(
                        'my-6',
                        'text-lg',
                        'font-black',
                        'text-dimmed-muted',
                        'md:text-3xl'
                    )}
                >
                    {contact.email}
                </p>
                <SocialMedia
                    className={cn('my-6', 'md:w-full md:justify-center')}
                    links={links}
                />
            </div>
            <Animation
                className={cn('flex-1', 'my-auto', 'md:w-1/2')}
                animationData={email}
            />
        </section>
    );
};

export default Contact;
