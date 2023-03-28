import Home from './home';
import { render } from '@testing-library/react';

describe('Home', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Home />);
        expect(baseElement).toBeTruthy();
    });
});
