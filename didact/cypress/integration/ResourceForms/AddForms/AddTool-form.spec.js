describe("add tool resource form", () => {
    it.only('dropdown displays correct form on select', () => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/resource-form').then(() => {
            cy.get(select)
            .select("tool")
            cy.get('label:first-child').should('have.value', 'Tool Name')
        })
        
    })

    it('inputs display user input', () => {
        const toolName = "Tool Name"
        cy.get('[name]="name"')
        .type(toolName)
        .should('have.value', toolName)

        const toolDesc = "Tool Description"
        cy.get('[name]="description"')
        .type(toolDesc)
        .should('have.value', toolDesc)

        const toolLink = "Tool.tool"
        cy.get('[name]="link"')
        .type(toolLink)
        .should('have.value', toolLink)

    })
})