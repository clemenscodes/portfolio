import Projects from './projects';
import { render } from '@testing-library/react';

describe('Projects', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Projects />);
        expect(baseElement).toBeTruthy();
    });
});
