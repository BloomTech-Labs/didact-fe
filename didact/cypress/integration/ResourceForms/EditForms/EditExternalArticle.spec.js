describe("edit external article resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/external-articles/3/edit')
    })

    it('inputs display user input submission takes to articles page', () => {
        const articleTitle = "edit article title test"
        cy.get('[name="title"]')
        .clear()
        .type(articleTitle)
        .should('have.value', articleTitle)

        const articleDescription = "edit article body test"
        cy.get('[name="description"]')
        .clear()
        .type(articleDescription)
        .should('have.value', articleDescription)

        const articleTopic = "edit article topic test"
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