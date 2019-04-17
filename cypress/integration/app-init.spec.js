describe('app init', () => {
    it('displays todos from API load', () => {
        cy.server();
        cy.route('GET', '/api/todos', 'fixture:todos')
        cy.visit('/')
        cy.get('.todo-list li').should('have.length', 4);
    })
})