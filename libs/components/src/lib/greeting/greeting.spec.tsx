import Greeting from './greeting';
import { greeting, links } from '@config';
import { render } from '@testing-library/react';

describe('Greeting', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Greeting greeting={greeting} links={links} />
        );
        expect(baseElement).toBeTruthy();
    });
});
