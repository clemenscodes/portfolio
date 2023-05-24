import ProjectLink from './project-link';
import { render } from '@testing-library/react';

describe('ProjectLink', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <ProjectLink
                link={{
                    name: 'Link name',
                    url: new URL('https://google.com'),
                }}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
