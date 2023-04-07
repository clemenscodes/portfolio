import { Display } from './display';

export interface SocialMediaLink {
    href: URL | string;
    src: string;
}

export interface SocialMediaLinks extends Display {
    github?: SocialMediaLink;
    linkedIn?: SocialMediaLink;
    twitter?: SocialMediaLink;
    gitlab?: SocialMediaLink;
    stackOverflow?: SocialMediaLink;
    gmail?: SocialMediaLink;
}
