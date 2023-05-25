import { IDescription } from './description';
import { ISection } from './section';

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

export interface ISkills extends ISection, IDescription {
    skills: ISkill[];
    skillCategories: ISkillCategory[];
}
