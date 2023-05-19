import { getGreeting } from '../support/app.po';
import { greeting } from '@config';

describe('Home', () => {
    beforeEach(() => cy.visit('/'));

    it('should display welcome message', () => {
        getGreeting().contains(greeting.title);
    });
});
