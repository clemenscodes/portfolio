import ProjectLinkList from './project-link-list';
import { render } from '@testing-library/react';

describe('ProjectLinkList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ProjectLinkList links={[]} />);
        expect(baseElement).toBeTruthy();
    });
});
