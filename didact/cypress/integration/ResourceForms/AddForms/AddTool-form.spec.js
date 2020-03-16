describe("add tool resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/resource-form')
            cy.get("select")
            .select("tool")
    })

    it('dropdown displays correct form on select', () => {
            cy.get("label").first().should('have.text', 'Tool Name')
    })

    it('inputs display user input and form submission takes you to tool page', () => {
        const toolName = "Tool Name"
        cy.get('[name="name"]')
        .type(toolName)
        .should('have.value', toolName)

        const toolDesc = "Tool Description"
        cy.get('[name="description"]')
        .type(toolDesc)
        .should('have.value', toolDesc)

        const toolLink = "Tool.tool"
        cy.get('[name="link"]')
        .type(toolLink)
        .should('have.value', toolLink)

        cy.get("button").last().click();
        cy.url().should('include', '/tools')
    })
})