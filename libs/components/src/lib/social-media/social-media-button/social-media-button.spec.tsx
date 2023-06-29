import { render } from '@testing-library/react';
import SocialMediaButton from './social-media-button';

describe('SocialMediaButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SocialMediaButton
                linkProps={{
                    href: '',
                }}
                imageProps={{
                    src: '/mock',
                    alt: 'Mock Logo',
                }}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
