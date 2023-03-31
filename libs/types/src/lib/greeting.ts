import { Display } from './display';

export interface IGreeting extends Display {
    name: string;
    title: string;
    subTitle: string;
    resumeLink: URL;
}
