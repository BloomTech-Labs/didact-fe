import { login } from '../../../support/index'

describe("add external article resource form", () => {
    it.only('dropdown displays correct form on select', () => {
        cy.login()
        cy.visit('/resource-form')
        cy.get(select)
        .select("external-article")
        cy.get('label:first-child').should('have.value', 'Article Title')
    })

    it('inputs display user input', () => {
        const articleTitle = "Article Title"
        cy.get('[name]="external-article"')
        .type(articleTitle)
        .should('have.value', articleTitle)

        const articleBody = "Article Body"
        cy.get('[name]="body"')
        .type(articleBody)
        .should('have.value', articleBody)

        const articleTopic = "Topic"
        cy.get('[name]="topic"')
        .type(articleTopic)
        .should('have.value', articleTopic)

        const articleLink = "Article.article"
        cy.get('[name]="link"')
        .type(articleLink)
        .should('have.value', articleLink)

    })
})