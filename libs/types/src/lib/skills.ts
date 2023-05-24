import { Description } from './description';
import { Section } from './section';

export interface ISkill {
    name: string;
    description: string;
}

export interface ISoftwareSkill {
    name: string;
    src: string;
}

export interface ISkillCategory {
    categoryName: string;
    softwareSkills: ISoftwareSkill[];
}

export interface ISkills extends Section, Description {
    skills: ISkill[];
    skillCategories: ISkillCategory[];
}
