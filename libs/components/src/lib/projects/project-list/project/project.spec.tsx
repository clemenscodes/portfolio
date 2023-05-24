import Project from './project';
import { render } from '@testing-library/react';

describe('Project', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Project
                project={{
                    description: 'Project Description',
                    imageSrc: '/project-src',
                    links: [],
                    name: 'Project name',
                }}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
