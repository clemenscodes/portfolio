import { Section } from './section';

export type Skill = string;
export interface SoftwareSkill {
    skill: string;
}

export interface Skills extends Section {
    title: string;
    subTitle: string;
    skills: Skill[];
    softwareSkills: SoftwareSkill[];
}
