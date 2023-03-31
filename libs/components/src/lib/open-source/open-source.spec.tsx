import OpenSource from './open-source';
import { render } from '@testing-library/react';

describe('OpenSource', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<OpenSource />);
        expect(baseElement).toBeTruthy();
    });
});
