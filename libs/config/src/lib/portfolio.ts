import { IGreeting, Illustration, Section, Skills } from '@types';

export const illustration: Illustration = {
    animated: true,
};

export const greeting: IGreeting = {
    name: 'Clemens Horn',
    title: "Hi all, I'm Clemens",
    subTitle: 'A Full Stack Developer who loves building robust software and applications with Rust and TypeScript',
    resumeLink: new URL('https://drive.google.com/file/d/1UaHHePEB-NXinMw6R_Z5G06QaBXigYzS/view?usp=sharin'),
    display: true,
};

export const skillsSection: Skills = {
    title: 'What I do',
    subTitle: 'Exploring bleeding tech',
    skills: [],
    softwareSkills: [],
    href: '/#skills',
    name: 'Skills',
    display: true,
};

export const sections: Section[] = [skillsSection];
