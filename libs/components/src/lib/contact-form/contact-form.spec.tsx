import ContactForm from './contact-form';
import { render } from '@testing-library/react';

describe('ContactForm', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ContactForm />);
        expect(baseElement).toBeTruthy();
    });
});
