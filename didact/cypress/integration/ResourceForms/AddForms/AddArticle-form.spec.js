import { login } from '../../../support/index'

describe("add article resource form", () => {
    it.only('dropdown displays correct form on select', () => {
        cy.login()
        cy.visit('/resource-form')
        cy.get(select)
        .select("article")
        cy.get('label:first-child').should('have.value', 'Article Title')
    })

    it('inputs display user input', () => {
        const articleTitle = "Article Title"
        cy.get('[name]="title"')
        .type(articleTitle)
        .should('have.value', articleTitle)

        const articleBody = "Article Body"
        cy.get('[name]="body"')
        .type(articleBody)
        .should('have.value', articleBody)

        const articleTopic = "Topic"
        cy.get('[name]="Topic"')
        .type(articleTopic)
        .should('have.value', articleTopic)
    })
})