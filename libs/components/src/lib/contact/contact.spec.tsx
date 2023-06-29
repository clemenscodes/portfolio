import { contact, links } from '@config';
import { render } from '@testing-library/react';
import Contact from './contact';

describe('Contact', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Contact contact={contact} links={links} />
        );
        expect(baseElement).toBeTruthy();
    });
});
