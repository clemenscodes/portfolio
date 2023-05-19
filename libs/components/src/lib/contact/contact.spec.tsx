import Contact from './contact';
import { render } from '@testing-library/react';

describe('Contact', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Contact />);
        expect(baseElement).toBeTruthy();
    });
});
