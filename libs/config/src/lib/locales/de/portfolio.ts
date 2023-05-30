import { IGreeting, ISection, ISkills, IProjects, ISocialMediaLinks, IContact, IPortfolio } from '@types';

const greeting: IGreeting = {
    name: 'Clemens Horn',
    title: 'Hallo, ich bin Clemens',
    subTitle: 'Ein Entwickler, der gerne robuste Software mit Rust und TypeScript entwickelt.',
    resumeLink: new URL('https://drive.google.com/file/d/1UaHHePEB-NXinMw6R_Z5G06QaBXigYzS/view?usp=sharing'),
    contactMe: 'Kontakt aufnehmen',
    seeResume: 'Lebenslauf ansehen',
    display: true,
};

const contact: IContact = {
    title: 'Kontakt',
    subTitle: 'Sie möchten ein Projekt besprechen oder einfach nur Hallo sagen? Mein Posteingang ist offen für alle !',
    email: 'me@clemenshorn.com',
    href: '#contact',
    name: 'Kontakt',
    display: true,
};

const links: ISocialMediaLinks = {
    links: [
        {
            name: 'GitHub',
            href: new URL('https://github.com/clemenscodes/'),
            src: '../../../svg/github-mark-white.svg',
        },
        {
            name: 'Twitter',
            href: new URL('https://twitter.com/clemenscodes/'),
            src: '../../../svg/twitter.svg',
        },
        {
            name: 'LinkedIn',
            href: new URL('https://linkedin.com/in/clemens-horn/'),
            src: '../../../svg/linkedin.svg',
        },
        {
            name: 'E-Mail',
            href: `mailto:${contact.email}`,
            src: '../../../svg/gmail.svg',
        },
    ],
    display: true,
};

const skills: ISkills = {
    title: 'Was ich mache',
    subTitle: 'Entwicklung skalierbarer Software mit modernen Technologien',
    skills: [
        {
            name: 'Frontend-Schnittstellen',
            description:
                'Entwicklung von skalierbaren, anpassungsfähigen und visuell ansprechenden Frontend-Schnittstellen',
        },
        {
            name: 'UI/UX-Design',
            description: 'Implementierung von UI/UX-Designs unter Verwendung von Tailwind CSS und Storybook',
        },
        {
            name: 'Webanwendungen',
            description: 'Erstellung dynamischer, interaktiver und progressiver Webanwendungen mit Next.js und Angular',
        },
        {
            name: 'Backend-Dienste',
            description: 'RESTful und GraphQL APIs mit Node.js, Nest.js und Hasura',
        },
        {
            name: 'Entwurf und Verwaltung von Datenbanken',
            description: 'Erstellung und Verwaltung von Datenbanken mit Prisma, PostgreSQL, MySQL und MongoDB',
        },
        {
            name: 'Echtzeit-Funktionalität',
            description: 'Implementierung von Echtzeit-Funktionalität mit WebSockets',
        },
        {
            name: 'Sichere Anwendungen',
            description: 'Gewährleistung der Sicherheit durch die Implementierung von OAuth-Protokollen',
        },
        {
            name: 'Test-Frameworks',
            description: 'Einsatz von Jest und Cypress für umfassende Tests',
        },
        {
            name: 'CI/CD',
            description: 'Einrichtung und Verwaltung von DevOps-Workflows mit GitHub Actions, Docker, und Kubernetes',
        },
        {
            name: 'Bereitstellung auf Cloud-Plattformen',
            description:
                'Konfigurierung und Bereitstellung von Anwendungen auf Cloud-Plattformen wie Google Cloud mit Terraform',
        },
        {
            name: 'Effiziente Code-Organization',
            description: 'Nutzung von Nx für eine effiziente Code-Organisation in Monorepo-Architekturen',
        },
        {
            name: 'Kommandozeilen-Schnittstellen',
            description: 'Entwicklung von Kommandozeilenschnittstellen mit Rust',
        },
        {
            name: 'Optimale Entwicklungsumgebung',
            description: 'Verwendung von Arch Linux in einem tastaturgesteuerten Arbeitsablauf',
        },
        {
            name: 'Produktive Code-Bearbeitung',
            description: 'Nutzung von Neovim als Text-Editor, um so effizient und produktiv wie möglich zu sein',
        },
        {
            name: 'Automation',
            description: 'Erstellung von Automatisierungsskripten mit POSIX-Shell und Python',
        },
    ],
    skillCategories: [
        {
            categoryName: 'Programmiersprachen',
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
            categoryName: 'Entwicklungswerkzeuge',
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
            categoryName: 'Kryptowährungen',
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
    name: 'Fähigkeiten',
    display: true,
};

const projects: IProjects = {
    title: 'Projekte',
    subTitle: 'Ein paar Projekte, die ich im Laufe der Zeit entwickelt habe',
    projects: [
        {
            imageSrc: '../../../svg/cli.svg',
            name: 'Ninja VM',
            description: 'Virtuelle Maschine für die Programmiersprache Ninja',
            links: [
                {
                    name: 'C-Code ansehen',
                    url: new URL('https://github.com/clemenscodes/njvm/'),
                },
                {
                    name: 'Rust-Code ansehen',
                    url: new URL('https://github.com/clemenscodes/njvm_rust/'),
                },
            ],
        },
        {
            imageSrc: '../../../svg/cardano.svg',
            name: 'Cardano CLI',
            description: 'Kommandozeilen-Schnittstelle für die Arbeit mit Cardano-Dienstprogrammen',
            links: [
                {
                    name: 'Rust-Code ansehen',
                    url: new URL('https://github.com/crc-cardano-stakepool/cardano/'),
                },
            ],
        },
        {
            imageSrc: '../../../svg/monero.svg',
            name: 'Peer-to-Peer Monero-Mining Einrichtung',
            description: 'Einfaches Hochfahren eines Monero-Knotens und Schürfen von Monero',
            links: [
                {
                    name: 'Code ansehen',
                    url: new URL('https://github.com/clemenscodes/monero/'),
                },
            ],
        },
        {
            imageSrc: '/img/crypto.png',
            name: 'Simple Crypto',
            description: 'Einsteigerfreundliche Einführung in Kryptowährungen und ihre ökologischen Auswirkungen',
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
        // {
        //     imageSrc: '/img/mate-team.png',
        //     name: 'Mate Team',
        //     description: 'Organize events with your friends',
        //     links: [
        //         // {
        //         //     name: 'View site',
        //         //     url: new URL('https://mate-team.de/'),
        //         // },
        //         {
        //             name: 'View code',
        //             url: new URL('https://github.com/clemenscodes/mate-team/'),
        //         },
        //     ],
        // },
        // {
        //     imageSrc: '/img/cargonaut.png',
        //     name: 'myCargonaut',
        //     description: 'Rent rides',
        //     links: [
        //         {
        //             name: 'View site',
        //             url: new URL('https://cargonaut.web.app/'),
        //         },
        //         {
        //             name: 'View code',
        //             url: new URL('https://github.com/clemenscodes/cargonaut/'),
        //         },
        //     ],
        // },
        {
            imageSrc: '/img/swiftsell.png',
            name: 'SWIFTSELL',
            description:
                'Einfach verkaufen (PS: Serverlos, es dauert etwas bis die Seite nach einem Kaltstart geladen hat.)',
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
    name: 'Projekte',
    display: true,
};

const sections: ISection[] = [skills, projects, contact];

const dePortfolio: IPortfolio = {
    sections,
    links,
    greeting,
    skills,
    projects,
    contact,
};

export default dePortfolio;
