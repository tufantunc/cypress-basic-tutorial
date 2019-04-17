
describe('visit site', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('visits the website', () => {
        cy.focused().should('have.class', 'new-todo')
    })

    it('accepts inputabc', () => {
        const typedValue = 'My new task123';
        cy.get('.new-todo').type(typedValue)
            .should('have.value', typedValue)
    })
})