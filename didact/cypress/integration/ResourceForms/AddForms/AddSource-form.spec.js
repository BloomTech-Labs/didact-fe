describe("add source resource form", () => {
    beforeEach(() => {
        cy.visit('/resource-form')
    })
    
    it.only('dropdown displays selected value', () => {
        cy.get(select)
        .select("source")
        .then(cy.get('label:first-child').should('have.value', 'Source Name'))
    })

    it('inputs display user input', () => {
        const typedInput = "Testing example"
        cy.get('#name')
        .type(typedInput)
        .should('have.value', typedInput)
    })
})