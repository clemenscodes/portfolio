import SocialMediaIconButton from '../social-media-icon-button/social-media-icon-button';
import { socialMediaLinks } from '@config';
import { cn } from '@styles';
import { HTML, SocialMediaLinks } from '@types';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export type SocialMediaProps = HTML<'div'> & {
    linksProp?: SocialMediaLinks;
};

export const SocialMedia: React.FC<SocialMediaProps> = ({ linksProp = socialMediaLinks, className, ...props }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [gitHubSrc, setGitHubSrc] = useState('../../../svg/github.svg');
    useEffect(() => {
        if (linksProp.github) {
            isDark ? setGitHubSrc(linksProp.github.src) : setGitHubSrc('../../../svg/github.svg');
        }
    }, [isDark, linksProp.github]);
    return (
        <div {...props} className={cn(['flex items-center justify-between space-x-2 md:w-2/3', className])}>
            {linksProp.github && (
                <SocialMediaIconButton
                    className={cn('')}
                    linkProps={{
                        href: linksProp.github.href,
                    }}
                    imageProps={{
                        src: gitHubSrc,
                        alt: 'GitHub Logo',
                        width: 35,
                        height: 35,
                    }}
                />
            )}
            {linksProp.gmail && (
                <SocialMediaIconButton
                    className={cn('')}
                    linkProps={{
                        href: `mailto:${linksProp.gmail.href}`,
                    }}
                    imageProps={{
                        src: linksProp.gmail.src,
                        alt: 'Gmail Logo',
                        width: 40,
                        height: 40,
                    }}
                />
            )}
            {linksProp.gitlab && (
                <SocialMediaIconButton
                    className={cn('')}
                    linkProps={{
                        href: linksProp.gitlab.href,
                    }}
                    imageProps={{
                        src: linksProp.gitlab.src,
                        alt: 'Gitlab Logo',
                        width: 35,
                        height: 35,
                    }}
                />
            )}
            {linksProp.stackOverflow && (
                <SocialMediaIconButton
                    className={cn('')}
                    linkProps={{
                        href: linksProp.stackOverflow.href,
                    }}
                    imageProps={{
                        src: linksProp.stackOverflow.src,
                        alt: 'StackOverflow Logo',
                        width: 30,
                        height: 30,
                    }}
                />
            )}
            {linksProp.twitter && (
                <SocialMediaIconButton
                    className={cn('')}
                    linkProps={{
                        href: linksProp.twitter.href,
                    }}
                    imageProps={{
                        src: linksProp.twitter.src,
                        alt: 'Twitter Logo',
                        width: 45,
                        height: 45,
                    }}
                />
            )}
            {linksProp.linkedIn && (
                <SocialMediaIconButton
                    className={cn('')}
                    linkProps={{
                        href: linksProp.linkedIn.href,
                    }}
                    imageProps={{
                        src: linksProp.linkedIn.src,
                        alt: 'LinkedIn Logo',
                        width: 40,
                        height: 40,
                    }}
                />
            )}
        </div>
    );
};

export default SocialMedia;
