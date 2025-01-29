import Error from './error';
import { render } from '@testing-library/react';

describe('Error', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Error />);
        expect(baseElement).toBeTruthy();
    });
});
