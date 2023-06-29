import { render } from '@testing-library/react';
import Menu from './menu';

describe('Menu', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Menu isChecked={false} handleChecked={() => 0} />
        );
        expect(baseElement).toBeTruthy();
    });
});
