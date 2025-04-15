describe('Hello World Test', () => {
    it('should display Hello World', () => {
        cy.visit('http://localhost:3000'); // Altere para a URL da sua aplicação
        cy.contains('Hello World').should('be.visible');
    });
});