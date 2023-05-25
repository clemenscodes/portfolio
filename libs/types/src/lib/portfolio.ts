import { IContact } from './contact';
import { IGreeting } from './greeting';
import { IProjects } from './projects';
import { ISection } from './section';
import { ISkills } from './skills';
import { ISocialMediaLinks } from './socialMediaLinks';

export interface IPortfolio {
    sections: ISection[];
    links: ISocialMediaLinks;
    greeting: IGreeting;
    skills: ISkills;
    projects: IProjects;
    contact: IContact;
}
