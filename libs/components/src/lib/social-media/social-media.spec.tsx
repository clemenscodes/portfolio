import SocialMedia from './social-media';
import { render } from '@testing-library/react';

describe('SocialMedia', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SocialMedia />);
        expect(baseElement).toBeTruthy();
    });
});
