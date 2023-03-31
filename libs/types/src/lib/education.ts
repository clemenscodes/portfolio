import { Section } from './section';

export interface School {
    name: string;
    logoSrc: string;
    subTitle: string;
    duration: string;
    description: string;
    descriptionBullets: string[];
}
export interface Education extends Section {
    schools: School[];
}
