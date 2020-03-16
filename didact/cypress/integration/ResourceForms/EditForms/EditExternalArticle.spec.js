import faker from 'faker'

describe("edit external article resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/external-articles/1/edit')
    })

    it('inputs display user input', () => {
        const articleTitle = faker.lorem.sentence()
        cy.get('[name="title"]')
        .clear()
        .type(articleTitle)
        .should('have.value', articleTitle)

        const articleDescription = faker.lorem.paragraph();
        cy.get('[name="description"]')
        .clear()
        .type(articleDescription)
        .should('have.value', articleDescription)

        const articleTopic = "Topic"
        cy.get('[name="topic"]')
        .clear()
        .type(articleTopic)
        .should('have.value', articleTopic)

        const articleLink = "Article.article"
        cy.get('[name="link"]')
        .clear()
        .type(articleLink)
        .should('have.value', articleLink)

        cy.get("button").last().click();
        cy.url().should('include', '/articles')
    })
})