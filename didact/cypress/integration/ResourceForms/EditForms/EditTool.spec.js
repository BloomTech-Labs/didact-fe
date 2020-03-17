describe("edit tool resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/tools/4/edit')
    })

    it('inputs display user input and form submission takes you to tools page', () => {
        const toolName = "Tool Edit"
        cy.get('[name="name"]')
        .clear()
        .type(toolName)
        .should('have.value', toolName)

        const toolDesc = "Tool Desc Edit"
        cy.get('[name="description"]')
        .clear()
        .type(toolDesc)
        .should('have.value', toolDesc)

        const toolLink = "Tool.tool"
        cy.get('[name="link"]')
        .clear()
        .type(toolLink)
        .should('have.value', toolLink)

        cy.get("button").last().click();
        cy.url().should('include', '/tools')
    })
})