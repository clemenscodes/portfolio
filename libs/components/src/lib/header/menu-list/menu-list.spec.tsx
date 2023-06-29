import MenuList from './menu-list';
import { render } from '@testing-library/react';

describe('MenuList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <MenuList
                isChecked={false}
                sections={[]}
                handleChecked={() => 0}
                handleScroll={() => 0}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
