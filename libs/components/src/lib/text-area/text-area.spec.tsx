import { TextArea } from './text-area';
import { render } from '@testing-library/react';

describe('TextArea', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TextArea />);
        expect(baseElement).toBeTruthy();
    });
});
