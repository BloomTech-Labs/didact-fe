import faker from 'faker'

describe("add article resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/articles/1/edit')
       
    })
    it('inputs display user input', () => {
        const articleTitle = faker.lorem.sentence();
        cy.get('[name="title"]')
        .clear()
        .type(articleTitle)
        .should('have.value', articleTitle)

        const articleBody = faker.lorem.paragraphs(2);
        cy.get('[name="body"]')
        .clear()
        .type(articleBody)
        .should('have.value', articleBody)

        const articleTopic = "Topic"
        cy.get('[name="topic"]')
        .clear()
        .type(articleTopic)
        .should('have.value', articleTopic)

        cy.get("button").last().click();
            cy.url().should('include', '/articles')
    })
})