import { getGreeting } from '../support/app.po';

describe('Home', () => {
    beforeEach(() => cy.visit('/'));

    it('should display welcome message', () => {
        getGreeting().contains('Welcome to Home!');
    });
});
