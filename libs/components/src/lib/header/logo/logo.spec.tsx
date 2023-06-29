import { greeting } from '@config';
import { render } from '@testing-library/react';
import Logo from './logo';

describe('Logo', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Logo name={greeting.name} />);
        expect(baseElement).toBeTruthy();
    });
});
