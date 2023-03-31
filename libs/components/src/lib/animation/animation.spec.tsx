import Animation from './animation';
import { render } from '@testing-library/react';

describe('Animation', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Animation />);
        expect(baseElement).toBeTruthy();
    });
});
