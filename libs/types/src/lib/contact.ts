import { IContactForm } from './contactForm';
import { IDescription } from './description';
import { ISection } from './section';

export interface IContact extends ISection, IDescription {
    email: string;
    twitter: string;
    form: IContactForm;
}
