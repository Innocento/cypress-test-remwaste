import LoginPage from '../support/pageObjects/LoginPage';
import TodoPage from '../support/pageObjects/TodoPage';

describe('To-Do CRUD', () => {
  const username = "testuser";
  const password = "pass123";
  const todoText = `Test ToDo ${Date.now()}`;

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.submit();
    cy.contains("Your To-Dos").should("exist");
  });

  it('should add a new todo', () => {
    TodoPage.addTodo(todoText);
    TodoPage.assertTodoExists(todoText);
  });

  it('should toggle a todo completed', () => {
    TodoPage.addTodo(todoText);
    TodoPage.toggleTodo(todoText);
    cy.get(".todo-item.completed").contains(todoText).should("exist");
  });

  it('should delete a todo', () => {
    TodoPage.addTodo(todoText);
    TodoPage.deleteTodo(todoText);
    //cy.contains(todoText).should("not.exist");
  });

  it('should logout', () => {
    TodoPage.logout();
    cy.contains("Login").should("exist");
  });
});