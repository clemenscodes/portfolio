import {
    IGreeting,
    Illustration,
    Education,
    Section,
    Skills,
    OpenSource,
    Projects,
    SocialMediaLinks,
    Contact,
    School,
} from '@types';

export const illustration: Illustration = {
    animated: true,
};

export const greeting: IGreeting = {
    name: 'Clemens Horn',
    title: "Hi all, I'm Clemens",
    subTitle: 'A Full Stack Developer who loves building robust software with Rust and TypeScript.',
    resumeLink: new URL('https://drive.google.com/file/d/1UaHHePEB-NXinMw6R_Z5G06QaBXigYzS/view?usp=sharin'),
    display: true,
};

export const socialMediaLinks: SocialMediaLinks = {
    github: {
        href: new URL('https://github.com/clemenscodes'),
        src: '../../../svg/github-mark-white.svg',
    },
    linkedIn: {
        href: new URL('https://linkedin.com/in/clemens-horn/'),
        src: '../../../svg/linkedin.svg',
    },
    twitter: {
        href: new URL('https://twitter.com/clemens-horn/'),
        src: '../../../svg/twitter.svg',
    },
    gitlab: {
        href: new URL('https://gitlab.com/clemenshorn'),
        src: '../../../svg/gitlab.svg',
    },
    stackOverflow: {
        href: new URL('https://stackoverflow.com/users/13416466/clemens'),
        src: '../../../svg/stackoverflow.svg',
    },
    gmail: {
        href: 'clemenscodes@gmail.com',
        src: '../../../svg/gmail.svg',
    },
    display: true,
};

export const skillsSection: Skills = {
    title: 'What I do',
    subTitle: 'Exploring bleeding tech',
    skills: [],
    softwareSkills: [],
    href: '#skills',
    name: 'Skills',
    display: true,
};

export const openSourceSection: OpenSource = {
    href: '#opensource',
    name: 'Open Source',
    display: true,
    showGithubProfile: true,
};

const school: School = {
    name: 'Technische Hochschule Mittelhessen',
    logoSrc: '../../../components/assets/img/THM_Logo.png',
    subTitle: 'Bachelor of Science in Social Media Systems',
    duration: '2019 - present',
    description: 'Worked as a tutor in several courses',
    descriptionBullets: [
        'Webbasierte Programmierung 1',
        'Webbasierte Programmierung 2',
        'Webbasierte Systeme 2',
        'Integrations-Projekt 1',
    ],
};

export const educationSection: Education = {
    schools: [school],
    display: true,
    href: '#education',
    name: 'Education',
};

export const projectsSection: Projects = {
    title: 'Projects',
    subTitle: 'Some projects I have built along the way',
    projects: [
        {
            imageSrc: '../../../components/assets/img/crypto.png',
            name: 'Simple Crypto',
            description: 'Beginner friendly introduction to cryptocurrencies and their ecological impact',
            links: [
                {
                    name: 'Visit Website',
                    url: new URL('https://simple-crypto.web.app/'),
                },
            ],
        },
    ],
    href: '#projects',
    name: 'Projects',
    display: true,
};

export const contactSection: Contact = {
    title: 'Contact Me',
    subTitle: 'Discuss a project or just want to say hi? My Inbox is open for all.',
    number: '+49-1746590828',
    email: 'clemenscodes@gmail.com',
    href: '#contact',
    name: 'Contact',
    display: true,
};

export const sections: Section[] = [
    skillsSection,
    educationSection,
    openSourceSection,
    projectsSection,
    contactSection,
];
