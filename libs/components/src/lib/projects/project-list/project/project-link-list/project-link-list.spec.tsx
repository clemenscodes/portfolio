import { projects } from '@config';
import { render } from '@testing-library/react';
import ProjectLinkList from './project-link-list';

describe('ProjectLinkList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <ProjectLinkList links={projects.projects[0].links} />
        );
        expect(baseElement).toBeTruthy();
    });
});
