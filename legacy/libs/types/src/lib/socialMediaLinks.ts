import { IDisplay } from './display';

export interface ISocialMediaLink {
    name: string;
    href: URL | string;
    src: string;
}

export interface ISocialMediaLinks extends IDisplay {
    links: ISocialMediaLink[];
}
