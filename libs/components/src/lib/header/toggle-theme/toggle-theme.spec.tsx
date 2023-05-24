import ToggleTheme from './toggle-theme';
import { render } from '@testing-library/react';

describe('ToggleTheme', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ToggleTheme />);
        expect(baseElement).toBeTruthy();
    });
});
