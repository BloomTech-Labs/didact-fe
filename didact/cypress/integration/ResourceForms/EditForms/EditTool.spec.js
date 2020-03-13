describe("add tool resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/tools/1/edit')
    })

    it('inputs display user input', () => {
        const toolName = "Tool Name"
        cy.get('[name="name"]')
        .clear()
        .type(toolName)
        .should('have.value', toolName)

        const toolDesc = "Tool Description"
        cy.get('[name="description"]')
        .clear()
        .type(toolDesc)
        .should('have.value', toolDesc)

        const toolLink = "Tool.tool"
        cy.get('[name="link"]')
        .clear()
        .type(toolLink)
        .should('have.value', toolLink)
    })

    it('submitting form takes you to tools page', () => {
        cy.get("button").last().click();
        cy.url().should('include', '/tools')
    })
})