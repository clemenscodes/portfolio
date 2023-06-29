import { projects } from '@config';
import { render } from '@testing-library/react';
import Project from './project';

describe('Project', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Project project={projects.projects[0]} />
        );
        expect(baseElement).toBeTruthy();
    });
});
