import { ContactForm } from './contact-form';
import { contact } from '@config';
import { render } from '@testing-library/react';

describe('ContactForm', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ContactForm form={contact.form} />);
        expect(baseElement).toBeTruthy();
    });
});
