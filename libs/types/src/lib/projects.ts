import { Description } from './description';
import { Section } from './section';

export interface ProjectLink {
    name: string;
    url: URL;
}

export interface Project {
    imageSrc: string;
    name: string;
    description: string;
    links: ProjectLink[];
}

export interface Projects extends Section, Description {
    projects: Project[];
}
