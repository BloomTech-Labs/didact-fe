const cy = require("../../../support/index")

describe("add source resource form", () => {
    it.only('dropdown displays correct form on select', () => {
        Cypress.Commands.login()
        cy.visit('/resource-form')
        cy.get(select)
        .select("source")
        cy.get('label:first-child').should('have.value', 'Source Name')
    })

    it('inputs display user input', () => {
        const sourceName = "Source Name"
        cy.get('[name]="name"')
        .type(sourceName)
        .should('have.value', sourceName)

        const sourceDesc = "Source Description"
        cy.get('[name]="description"')
        .type(sourceDesc)
        .should('have.value', sourceDesc)

        const sourceLink = "Source.source"
        cy.get('[name]="link"')
        .type(sourceLink)
        .should('have.value', sourceLink)

    })
})