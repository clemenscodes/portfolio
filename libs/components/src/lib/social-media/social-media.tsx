import { cn } from '@styles';
import { ISocialMediaLinks } from '@types';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SocialMediaButton from './social-media-button/social-media-button';

export type SocialMediaProps = React.ComponentPropsWithoutRef<'ul'> & {
    links: ISocialMediaLinks;
};

export const SocialMedia: React.FC<SocialMediaProps> = ({
    links,
    className,
    ...props
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [gitHubSrc, setGitHubSrc] = useState('../../../svg/github.svg');

    useEffect(() => {
        const gh = links.links.filter((link) => link.name === 'GitHub')[0];
        if (gh) {
            isDark
                ? setGitHubSrc(gh.src)
                : setGitHubSrc('../../../svg/github.svg');
        }
    }, [isDark, links]);

    return (
        <ul
            {...props}
            className={cn([
                'flex items-center justify-evenly',
                'mx-auto w-4/5 ',
                'md:mx-0 md:w-1/2 md:justify-start md:space-x-6',
                className,
            ])}
        >
            {links.links.map((link, index) => (
                <li key={index}>
                    <SocialMediaButton
                        linkProps={{
                            href: link.href,
                        }}
                        imageProps={{
                            src: link.name === 'GitHub' ? gitHubSrc : link.src,
                            alt: `${link.name} Logo`,
                        }}
                    />
                </li>
            ))}
        </ul>
    );
};

export default SocialMedia;
