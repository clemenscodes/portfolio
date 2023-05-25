import { IDescription } from './description';
import { ISection } from './section';

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

export interface IProjects extends ISection, IDescription {
    projects: IProject[];
}
