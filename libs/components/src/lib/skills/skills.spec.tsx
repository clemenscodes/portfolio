import Skills from './skills';
import { render } from '@testing-library/react';

describe('Skills', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Skills />);
        expect(baseElement).toBeTruthy();
    });
});
