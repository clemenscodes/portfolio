import SocialMediaButton from './social-media-button/social-media-button';
import { socialMediaLinks } from '@config';
import { cn } from '@styles';
import { SocialMediaLinks } from '@types';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export type SocialMediaProps = React.ComponentPropsWithoutRef<'ul'> & {
    linksProp?: SocialMediaLinks;
};

export const SocialMedia: React.FC<SocialMediaProps> = ({
    linksProp = socialMediaLinks,
    className,
    ...props
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [gitHubSrc, setGitHubSrc] = useState('../../../svg/github.svg');

    useEffect(() => {
        const gh = linksProp.links.filter((link) => link.name === 'GitHub')[0];
        if (gh) {
            isDark
                ? setGitHubSrc(gh.src)
                : setGitHubSrc('../../../svg/github.svg');
        }
    }, [isDark, linksProp.links]);

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
            {linksProp.links.map((link, index) => (
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
