import { Description } from './description';
import { Section } from './section';

export type Skill = string;

export interface SoftwareSkill {
    name: string;
    src: string;
}

export interface SkillCategory {
    categoryName: string;
    softwareSkills: SoftwareSkill[];
}

export interface ISkills extends Section, Description {
    skills: Skill[];
    skillCategories: SkillCategory[];
}
