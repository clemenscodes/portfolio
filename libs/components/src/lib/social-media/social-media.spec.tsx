import SocialMedia from './social-media';
import { links } from '@config';
import { render } from '@testing-library/react';

describe('SocialMedia', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SocialMedia links={links} />);
        expect(baseElement).toBeTruthy();
    });
});
