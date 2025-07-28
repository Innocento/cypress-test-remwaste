class TodoPage {
  addTodo(text) {
    cy.get('input.todo-input').clear().type(text);
    cy.get('button.todo-add-btn').contains("Add").click();
  }
  assertTodoExists(text) {
    cy.get(".todo-list .todo-item").contains(text).should("exist");
  }
  toggleTodo(text) {
    cy.get(".todo-list .todo-item").contains(text)
      .parent()
      .find('input[type="checkbox"]').click();
  }
  deleteTodo(text) {
    cy.get(".todo-list .todo-item").contains(text)
      .parent()
      .find('button.todo-del-btn').click();
  }
  editTodo(oldText, newText) {
    cy.get(".todo-list .todo-item").contains(oldText)
      .parent()
      .find('button').contains("Edit").click();
    cy.get('input.todo-input').clear().type(newText);
    cy.get('button').contains("Save").click();
  }
  logout() {
    cy.get('button.logout-btn').click();
  }
}

export default new TodoPage();