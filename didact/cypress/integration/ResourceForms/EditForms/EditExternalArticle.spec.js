describe("edit external article resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/external-articles/1/edit')
    })

    it('inputs display user input', () => {
        const articleTitle = "Article Title"
        cy.get('[name="title"]')
        .clear()
        .type(articleTitle)
        .should('have.value', articleTitle)

        const articleDescription = "Article Description"
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
    })

    it('submitting form takes you to articles page', () => {
        cy.get("button").last().click();
        cy.url().should('include', '/articles')
    })
})