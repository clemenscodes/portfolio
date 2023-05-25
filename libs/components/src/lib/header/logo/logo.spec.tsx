import Logo from './logo';
import { greeting } from '@config';
import { render } from '@testing-library/react';

describe('Logo', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Logo name={greeting.name} />);
        expect(baseElement).toBeTruthy();
    });
});
