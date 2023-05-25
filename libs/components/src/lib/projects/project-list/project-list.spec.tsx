import ProjectList from './project-list';
import { projects } from '@config';
import { render } from '@testing-library/react';

describe('ProjectList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <ProjectList projects={projects.projects} />
        );
        expect(baseElement).toBeTruthy();
    });
});
