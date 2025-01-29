import LanguageSelection from './language-selection';
import { render } from '@testing-library/react';

describe('LanguageSelection', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<LanguageSelection />);
        expect(baseElement).toBeTruthy();
    });
});
