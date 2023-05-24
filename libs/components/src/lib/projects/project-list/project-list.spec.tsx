import ProjectList from './project-list';
import { render } from '@testing-library/react';

describe('ProjectList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ProjectList projects={[]} />);
        expect(baseElement).toBeTruthy();
    });
});
