import { Description } from './description';
import { Section } from './section';

export interface IProjectLink {
    name: string;
    url: URL;
}

export interface IProject {
    imageSrc: string;
    name: string;
    description: string;
    links: IProjectLink[];
}

export interface IProjects extends Section, Description {
    projects: IProject[];
}
