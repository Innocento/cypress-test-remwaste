import LoginPage from '../support/pageObjects/LoginPage';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login with valid credentials', () => {
    LoginPage.enterUsername("testuser");
    LoginPage.enterPassword("pass123");
    LoginPage.submit();
    cy.contains("Your To-Dos").should("exist");
  });

  it('should show error with invalid credentials', () => {
    LoginPage.enterUsername("wronguser");
    LoginPage.enterPassword("wrongpass");
    LoginPage.submit();
    LoginPage.assertError("Invalid credentials");
  });
});