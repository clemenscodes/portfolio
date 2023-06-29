import Project from './project';
import { projects } from '@config';
import { render } from '@testing-library/react';

describe('Project', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Project project={projects.projects[0]} />
        );
        expect(baseElement).toBeTruthy();
    });
});
