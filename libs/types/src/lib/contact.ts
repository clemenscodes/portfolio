import { Description } from './description';
import { Section } from './section';

export interface Contact extends Section, Description {
    number: string;
    email: string;
}
