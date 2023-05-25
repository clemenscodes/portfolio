import Projects from './projects';
import { projects } from '@config';
import { render } from '@testing-library/react';

describe('Projects', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Projects projects={projects} />);
        expect(baseElement).toBeTruthy();
    });
});
