import Greeting from './greeting';
import { render } from '@testing-library/react';

describe('Greeting', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Greeting />);
        expect(baseElement).toBeTruthy();
    });
});
