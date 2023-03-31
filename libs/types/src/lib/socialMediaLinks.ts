import { Display } from './display';

export interface SocialMediaLinks extends Display {
    github?: URL;
    linkedIn?: URL;
    twitter?: URL;
    gitlab?: URL;
    stackOverflow?: URL;
    gmail?: string;
}
