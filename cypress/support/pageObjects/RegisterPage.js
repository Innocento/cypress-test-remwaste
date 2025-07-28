// register page
class RegisterPage {
  enterUsername(username) {
    cy.get('input[placeholder="Username"]').clear().type(username);
  }
  enterPassword(password) {
    cy.get('input[placeholder="Password"]').clear().type(password);
  }
  submit() {
    cy.get('button.form-btn').contains("Register").click();
  }
  assertError(message) {
    cy.get(".form-error").should("contain", message);
  }
}

export default new RegisterPage();