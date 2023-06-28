import { ErrorMessage } from './error-message';
import { render } from '@testing-library/react';

describe('ErrorMessage', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ErrorMessage />);
        expect(baseElement).toBeTruthy();
    });
});
