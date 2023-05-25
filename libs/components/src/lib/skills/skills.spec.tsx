import Skills from './skills';
import { skills } from '@config';
import { render } from '@testing-library/react';

describe('Skills', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Skills skills={skills} />);
        expect(baseElement).toBeTruthy();
    });
});
