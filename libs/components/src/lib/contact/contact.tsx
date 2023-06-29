import { useIntersection } from '@hooks';
import { cn } from '@styles';
import { IContact, ISocialMediaLinks } from '@types';
import email from '../../../assets/json/email.json';
import Animation from '../animation/animation';
import ContactForm from '../contact-form/contact-form';
import Emoji from '../emoji/emoji';
import SocialMedia from '../social-media/social-media';

export type ContactProps = React.ComponentPropsWithoutRef<'section'> & {
    contact: IContact;
    links: ISocialMediaLinks;
};

export const Contact: React.FC<ContactProps> = ({
    contact,
    links,
    ...props
}) => {
    const [ref, visible] = useIntersection();
    return (
        <section
            ref={ref}
            className={cn([
                'flex flex-col',
                'lg:flex-row',
                'transform-will-change transition-all',
                'duration-1000',
                visible && 'opacity-100',
                visible || 'opacity-0',
            ])}
            id='contact'
            {...props}
        >
            <div
                className={cn(
                    'flex flex-col',
                    'm-8 lg:w-1/2',
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
                <ContactForm form={contact.form} />
                <SocialMedia
                    className={cn('my-6', 'md:w-full md:justify-center')}
                    links={links}
                />
            </div>
            <Animation
                className={cn('flex-1', 'my-auto', 'lg:w-1/2')}
                animationData={email}
            />
        </section>
    );
};

export default Contact;
