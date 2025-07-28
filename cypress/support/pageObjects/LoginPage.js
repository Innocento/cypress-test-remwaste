class LoginPage {
  visit() {
    cy.visit("/");
  }
  enterUsername(username) {
    cy.get('input[placeholder="Username"]').clear().type(username);
  }
  enterPassword(password) {
    cy.get('input[placeholder="Password"]').clear().type(password);
  }
  submit() {
    cy.get('button.form-btn').contains("Login").click();
  }
  assertError(message) {
    cy.get(".form-error").should("contain", message);
  }
}

export default new LoginPage();