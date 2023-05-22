import { Display } from './display';

export interface SocialMediaLink {
    name: string;
    href: URL | string;
    src: string;
}

export interface SocialMediaLinks extends Display {
    links: SocialMediaLink[];
}
