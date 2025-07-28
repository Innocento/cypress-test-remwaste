import RegisterPage from '../support/pageObjects/RegisterPage';

describe('Register', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('button.switch-btn').contains("Register").click();
  });

  it('should register new user', () => {
    const username = `user${Date.now()}`;
    RegisterPage.enterUsername(username);
    RegisterPage.enterPassword("pass123");
    RegisterPage.submit();
    cy.contains("Login").should("exist"); // Should be redirected to login
  });

});