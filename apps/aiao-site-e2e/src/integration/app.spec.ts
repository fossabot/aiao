import { getGreeting } from '../support/app.po';

describe('aiao-site', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to aiao-site!');
  });
});
