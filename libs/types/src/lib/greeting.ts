import { IDescription } from './description';
import { IDisplay } from './display';

export interface IGreeting extends IDisplay, IDescription {
    name: string;
    resumeLink: URL;
}
