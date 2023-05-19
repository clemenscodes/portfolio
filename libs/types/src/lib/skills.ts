import { Description } from './description';
import { Section } from './section';

export type Skill = string;
export interface SoftwareSkill {
    name: string;
}

export interface ISkills extends Section, Description {
    skills: Skill[];
    softwareSkills: SoftwareSkill[];
}
