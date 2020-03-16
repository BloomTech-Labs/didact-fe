describe("add source resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/resource-form')
        cy.get("select")
        .select("source")
    })

    it('dropdown displays correct form on select', () => {
        cy.get('label').first().should('have.text', 'Source Name')
    })

    it('inputs display user input', () => {
        const sourceName = "Source Name"
        cy.get('[name="name"]')
        .type(sourceName)
        .should('have.value', sourceName)

        const sourceDesc = "Source Description"
        cy.get('[name="description"]')
        .type(sourceDesc)
        .should('have.value', sourceDesc)

        const sourceLink = "Source.source"
        cy.get('[name="link"]')
        .type(sourceLink)
        .should('have.value', sourceLink)

        cy.get("button").last().click();
        cy.url().should('include', '/sources')
    })
})