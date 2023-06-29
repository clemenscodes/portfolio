import { render } from '@testing-library/react';
import LanguageSelection from './language-selection';

describe('LanguageSelection', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<LanguageSelection />);
        expect(baseElement).toBeTruthy();
    });
});
