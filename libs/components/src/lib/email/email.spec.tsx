import { Email } from './email';
import { renderToStaticMarkup } from 'react-dom/server';

describe('Email', () => {
    it('should render successfully', () => {
        const email = renderToStaticMarkup(
            <Email subject={'Test subject'} message={'Test email'} />
        );
        expect(email).toBeTruthy();
    });
});
