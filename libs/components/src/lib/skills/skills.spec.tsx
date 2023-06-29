import { skills } from '@config';
import { render } from '@testing-library/react';
import Skills from './skills';

describe('Skills', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Skills skills={skills} />);
        expect(baseElement).toBeTruthy();
    });
});
