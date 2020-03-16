describe("edit source resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/sources/1/edit')
    })

    it('dropdown displays correct form on select', () => {
        cy.get('label').first().should('have.text', 'Source Name')
    })

    it('inputs display user input', () => {
        const sourceName = "Source Edit"
        cy.get('[name="name"]')
        .clear()
        .type(sourceName)
        .should('have.value', sourceName)

        const sourceDesc = "Source Desc Edit"
        cy.get('[name="description"]')
        .clear()
        .type(sourceDesc)
        .should('have.value', sourceDesc)

        const sourceLink = "Source.source"
        cy.get('[name="link"]')
        .clear()
        .type(sourceLink)
        .should('have.value', sourceLink)

        cy.get("button").last().click();
        cy.url().should('include', '/sources')
    })
})