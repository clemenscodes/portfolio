import { projects } from '@config';
import { render } from '@testing-library/react';
import ProjectLink from './project-link';

describe('ProjectLink', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <ProjectLink link={projects.projects[0].links[0]} />
        );
        expect(baseElement).toBeTruthy();
    });
});
