import { IGreeting, Education, Section, ISkills, IProjects, SocialMediaLinks, Contact, School } from '@types';

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
        {
            name: 'Frontend interface development',
            description: 'Developing scalable, responsive and visually appealing frontend interfaces',
        },
        {
            name: 'UI/UX implementation',
            description: 'Implementing UI/UX designs utilizing Tailwind CSS and Storybook',
        },
        {
            name: 'Web application development',
            description: 'Building dynamic, interactive and progressive web applications with Next.js and Angular',
        },
        {
            name: 'TypeScript expertise',
            description: 'Creating efficient and maintainable code using TypeScript to enhance frontend development',
        },
        {
            name: 'Backend services',
            description: 'Building RESTful and GraphQL APIs using Node.js, Nest.js and Hasura',
        },
        {
            name: 'Database design and management',
            description: 'Creating and managing databases using Prisma, PostgreSQL, MySQL and MongoDB',
        },

        {
            name: 'Realtime functionality ',
            description: 'Implementing real-time functionality using WebSockets',
        },
        {
            name: 'Secure application development',
            description: 'Ensuring security through the implementation of OAuth protocols',
        },
        {
            name: 'Testing frameworks',
            description: 'Utilizing Jest and Cypress for comprehensive testing',
        },
        {
            name: 'DevOps workflows',
            description: 'Setting up and managing DevOps workflows using GitHub Actions, Docker, and Kubernetes',
        },
        {
            name: 'Cloud platform deployment',
            description: 'Configuring and deploying applications on cloud platforms like Google Cloud using Terraform',
        },
        {
            name: 'Efficient code organization',
            description: 'Leveraging Nx for streamlined code organization in monorepo architectures',
        },
        {
            name: 'Command line interfaces',
            description: 'Developing command line interfaces with Rust',
        },
        {
            name: 'Optimal development environment',
            description: 'Utilizing Arch Linux and window managers in a keyboard driven workflow',
        },
        {
            name: 'Productive code editing',
            description: 'Employing Neovim as my code editor of choice to maximize efficiency and productivity',
        },
        {
            name: 'Automation',
            description: 'Creating automation scripts using POSIX shell and Python',
        },
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

export const projectsSection: IProjects = {
    title: 'Projects',
    subTitle: 'Some projects I have built along the way',
    projects: [
        {
            imageSrc: '../../../svg/cli.svg',
            name: 'Ninja VM',
            description: 'Virtual Machine for the Ninja Programming Language',
            links: [
                {
                    name: 'View code in C',
                    url: new URL('https://github.com/clemenscodes/njvm/'),
                },
                {
                    name: 'View code in Rust',
                    url: new URL('https://github.com/clemenscodes/njvm_rust/'),
                },
            ],
        },
        {
            imageSrc: '../../../svg/cardano.svg',
            name: 'Cardano CLI',
            description: 'Command line interface to work with Cardano utilities',
            links: [
                {
                    name: 'View code in Rust',
                    url: new URL('https://github.com/crc-cardano-stakepool/cardano/'),
                },
            ],
        },
        {
            imageSrc: '../../../svg/monero.svg',
            name: 'Peer-to-peer Monero mining setup',
            description: 'Easily bootstrap a monero node and start mining',
            links: [
                {
                    name: 'View code',
                    url: new URL('https://github.com/clemenscodes/monero/'),
                },
            ],
        },
        {
            imageSrc: '/img/crypto.png',
            name: 'Simple Crypto',
            description: 'Beginner friendly introduction to cryptocurrencies and their ecological impact',
            links: [
                {
                    name: 'View site',
                    url: new URL('https://simple-crypto.web.app/'),
                },
                {
                    name: 'View code',
                    url: new URL('https://github.com/clemenscodes/simple-crypto/'),
                },
            ],
        },
        {
            imageSrc: '/img/mate-team.png',
            name: 'Mate Team',
            description: 'Organize events with your friends',
            links: [
                // {
                //     name: 'View site',
                //     url: new URL('https://mate-team.de/'),
                // },
                {
                    name: 'View code',
                    url: new URL('https://github.com/clemenscodes/mate-team/'),
                },
            ],
        },
        {
            imageSrc: '/img/cargonaut.png',
            name: 'myCargonaut',
            description: 'Rent rides',
            links: [
                {
                    name: 'View site',
                    url: new URL('https://cargonaut.web.app/'),
                },
                {
                    name: 'View code',
                    url: new URL('https://github.com/clemenscodes/cargonaut/'),
                },
            ],
        },
        {
            imageSrc: '/img/swiftsell.png',
            name: 'SWIFTSELL',
            description: 'Sell swiftly (Note: Serverless app, visiting site usually triggers a cold start)',
            links: [
                {
                    name: 'View site',
                    url: new URL('https://shop.swiftsell.de/'),
                },
                {
                    name: 'View code',
                    url: new URL('https://github.com/clemenscodes/swiftsell/'),
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

export const sections: Section[] = [skillsSection, educationSection, projectsSection, contactSection];
