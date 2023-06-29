import { render } from '@testing-library/react';
import Animation from './animation';

describe('Animation', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Animation animationData={undefined} />);
        expect(baseElement).toBeTruthy();
    });
});
