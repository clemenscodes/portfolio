import { contact, links } from '@config';
import { render } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Footer contact={contact} links={links} />
        );
        expect(baseElement).toBeTruthy();
    });
});
