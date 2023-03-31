import { Description } from './description';
import { Section } from './section';

export type Skill = string;
export interface SoftwareSkill {
    skill: string;
}

export interface Skills extends Section, Description {
    skills: Skill[];
    softwareSkills: SoftwareSkill[];
}
