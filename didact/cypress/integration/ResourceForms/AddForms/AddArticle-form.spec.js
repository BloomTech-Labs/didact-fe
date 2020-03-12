describe("add article resource form", () => {
    beforeEach(() => {
        cy.visit('/resource-form')
    })
    
    it.only('dropdown displays selected value', () => {
        cy.get(select)
        .select("article")
        .then(cy.get('label:first-child').should('have.value', 'Article Title'))
    })

    it('inputs display user input', () => {
        const typedInput = "Testing example"
        cy.get('input.name')
        .type(typedInput)
        .should('have.value', typedInput)
    })
})