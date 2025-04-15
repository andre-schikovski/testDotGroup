// ***********************************************
// Comandos customizados.
// ***********************************************


//Rotina de login de usuário no portal
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/'); // URL do portal
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  });

Cypress.Commands.add('voltarParaVitrine', () => {
  cy.get('[data-test="back-to-products"]').click();
  cy.get('.title').should('be.visible');
});