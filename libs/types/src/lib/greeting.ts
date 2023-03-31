import { Description } from './description';
import { Display } from './display';

export interface IGreeting extends Display, Description {
    name: string;
    resumeLink: URL;
}
