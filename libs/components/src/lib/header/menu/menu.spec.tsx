import Menu from './menu';
import { render } from '@testing-library/react';

describe('Menu', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Menu isChecked={false} handleChecked={() => 0} />
        );
        expect(baseElement).toBeTruthy();
    });
});
