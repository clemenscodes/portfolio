import SocialMediaIconButton from './social-media-icon-button';
import { render } from '@testing-library/react';

describe('SocialMediaIconButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SocialMediaIconButton
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
