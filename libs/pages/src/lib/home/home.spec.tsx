import Home from './home';
import { portfolio } from '@config';
import { render } from '@testing-library/react';

describe('Home', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Home portfolio={portfolio} />);
        expect(baseElement).toBeTruthy();
    });
});
