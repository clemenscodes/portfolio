import { greeting, sections } from '@config';
import { render } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Header sections={sections} name={greeting.name} />
        );
        expect(baseElement).toBeTruthy();
    });
});
