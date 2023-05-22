import {
    IGreeting,
    Illustration,
    Education,
    Section,
    ISkills,
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
    subTitle: 'A developer who loves building robust software with Rust and TypeScript.',
    resumeLink: new URL('https://drive.google.com/file/d/12J1mhDIUc5aN2EIIokasqajRS3h_br2h/view?usp=share_link'),
    display: true,
};

export const socialMediaLinks: SocialMediaLinks = {
    links: [
        {
            name: 'GitHub',
            href: new URL('https://github.com/clemenscodes'),
            src: '../../../svg/github-mark-white.svg',
        },
        {
            name: 'LinkedIn',
            href: new URL('https://linkedin.com/in/clemens-horn/'),
            src: '../../../svg/linkedin.svg',
        },
        {
            name: 'Gmail',
            href: 'mailto:clemenscodes@gmail.com',
            src: '../../../svg/gmail.svg',
        },
    ],
    display: true,
};

export const skillsSection: ISkills = {
    title: 'What I do',
    subTitle: 'Building software that scales using modern technologies',
    skills: [
        'Development of scalable and responsive frontend interfaces using HTML, CSS, and JavaScript',
        'Implementing UI/UX designs and creating visually appealing user interfaces',
        'Utilizing frontend frameworks like Tailwind CSS, Bootstrap, and Sass to streamline development and enhance styling',
        'Building dynamic and interactive web applications with frameworks like React, Next.js, and Angular',
        'Creating efficient and maintainable code using TypeScript to enhance frontend development',
        'Building RESTful APIs and backend services using Node.js, Nest.js, and Express.js',
        'Designing and managing databases using MySQL, PostgreSQL, MongoDB, and Firebase',
        'Implementing real-time functionality and GraphQL APIs using technologies like WebSockets, Hasura, and Prisma',
        'Setting up and managing DevOps workflows using Git, GitHub, GitHub Actions, Docker, and Kubernetes',
        'Configuring and deploying applications on cloud platforms like Google Cloud using Terraform',
        'Developing CLI utilities with Rust and automation scripts using Bash shell scripting',
        'Implementing testing strategies and utilizing testing frameworks like Jest, Cypress and Storybook',
        'Exploring and leveraging emerging technologies like IPFS for NFTs and Cardano for cryptocurrencies',
    ],
    skillCategories: [
        {
            categoryName: 'Programming Languages',
            softwareSkills: [
                {
                    name: 'javascript',
                    src: '../../../svg/javascript.svg',
                },
                {
                    name: 'typescript',
                    src: '../../../svg/typescript.svg',
                },
                {
                    name: 'rust',
                    src: '../../../svg/rust.svg',
                },
                {
                    name: 'c',
                    src: '../../../svg/c.svg',
                },
                {
                    name: 'python',
                    src: '../../../svg/python.svg',
                },
                {
                    name: 'lua',
                    src: '../../../svg/lua.svg',
                },
            ],
        },
        {
            categoryName: 'Frontend',
            softwareSkills: [
                {
                    name: 'html',
                    src: '../../../svg/html.svg',
                },
                {
                    name: 'css',
                    src: '../../../svg/css.svg',
                },
                {
                    name: 'sass',
                    src: '../../../svg/sass.svg',
                },
                {
                    name: 'tailwind',
                    src: '../../../svg/tailwindcss.svg',
                },
                {
                    name: 'bootstrap',
                    src: '../../../svg/bootstrap.svg',
                },
                {
                    name: 'redux',
                    src: '../../../svg/redux.svg',
                },
                {
                    name: 'react',
                    src: '../../../svg/reactjs.svg',
                },
                {
                    name: 'next',
                    src: '../../../svg/nextjs.svg',
                },
                {
                    name: 'angular',
                    src: '../../../svg/angular.svg',
                },
                {
                    name: 'jquery',
                    src: '../../../svg/jquery.svg',
                },
                {
                    name: 'tauri',
                    src: '../../../svg/tauri.svg',
                },
                {
                    name: 'expo',
                    src: '../../../svg/expo.svg',
                },
            ],
        },
        {
            categoryName: 'Backend',
            softwareSkills: [
                {
                    name: 'node',
                    src: '../../../svg/nodejs.svg',
                },
                {
                    name: 'nginx',
                    src: '../../../svg/nginx.svg',
                },
                {
                    name: 'redis',
                    src: '../../../svg/redis.svg',
                },
                {
                    name: 'nest',
                    src: '../../../svg/nestjs.svg',
                },
                {
                    name: 'express',
                    src: '../../../svg/expressjs.svg',
                },
                {
                    name: 'oauth',
                    src: '../../../svg/oauth.svg',
                },
                {
                    name: 'prisma',
                    src: '../../../svg/prisma.svg',
                },
                {
                    name: 'mysql',
                    src: '../../../svg/mysql.svg',
                },
                {
                    name: 'postgres',
                    src: '../../../svg/postgresql.svg',
                },
                {
                    name: 'mongodb',
                    src: '../../../svg/mongodb.svg',
                },
                {
                    name: 'firebase',
                    src: '../../../svg/firebase.svg',
                },
                {
                    name: 'graphql',
                    src: '../../../svg/graphql.svg',
                },
                {
                    name: 'hasura',
                    src: '../../../svg/hasura.svg',
                },
                {
                    name: 'ipfs',
                    src: '../../../svg/ipfs.svg',
                },
            ],
        },
        {
            categoryName: 'DevOps',
            softwareSkills: [
                {
                    name: 'git',
                    src: '../../../svg/git.svg',
                },
                {
                    name: 'docker',
                    src: '../../../svg/docker.svg',
                },
                {
                    name: 'kubernetes',
                    src: '../../../svg/kubernetes.svg',
                },
                {
                    name: 'terraform',
                    src: '../../../svg/terraform.svg',
                },
                {
                    name: 'gcloud',
                    src: '../../../svg/gcloud.svg',
                },
                {
                    name: 'github actions',
                    src: '../../../svg/github-actions.svg',
                },
            ],
        },
        {
            categoryName: 'Development Tools',
            softwareSkills: [
                {
                    name: 'linux',
                    src: '../../../svg/arch.svg',
                },
                {
                    name: 'bash',
                    src: '../../../svg/bash.svg',
                },
                {
                    name: 'neovim',
                    src: '../../../svg/neovim.svg',
                },
                {
                    name: 'yarn',
                    src: '../../../svg/yarn.svg',
                },
                {
                    name: 'nx',
                    src: '../../../svg/nx.svg',
                },
                {
                    name: 'webpack',
                    src: '../../../svg/webpack.svg',
                },
                {
                    name: 'jest',
                    src: '../../../svg/jest.svg',
                },
                {
                    name: 'cypress',
                    src: '../../../svg/cypress.svg',
                },
                {
                    name: 'storybook',
                    src: '../../../svg/storybook.svg',
                },
                {
                    name: 'jira',
                    src: '../../../svg/jira.svg',
                },
                {
                    name: 'trello',
                    src: '../../../svg/trello.svg',
                },
                {
                    name: 'slack',
                    src: '../../../svg/slack.svg',
                },
            ],
        },
        {
            categoryName: 'Cryptocurrencies',
            softwareSkills: [
                {
                    name: 'bitcoin',
                    src: '../../../svg/bitcoin.svg',
                },
                {
                    name: 'monero',
                    src: '../../../svg/monero.svg',
                },
                {
                    name: 'cardano',
                    src: '../../../svg/cardano.svg',
                },
            ],
        },
    ],
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
