import { links } from '@config';
import { render } from '@testing-library/react';
import SocialMedia from './social-media';

describe('SocialMedia', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SocialMedia links={links} />);
        expect(baseElement).toBeTruthy();
    });
});
