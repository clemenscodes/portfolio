import Education from './education';
import { render } from '@testing-library/react';

describe('Education', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Education />);
        expect(baseElement).toBeTruthy();
    });
});
