describe("edit article resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/articles/3/edit')
    })
    it('inputs display user input submission takes to articles page', () => {
        

        const articleTitle = "edit article title test"
        cy.get('[name="title"]')
        .clear()
        .type(articleTitle)
        .should('have.value', articleTitle)

        const articleBody = "edit article body test"
        cy.get('[name="body"]')
        .clear()
        .type(articleBody)
        .should('have.value', articleBody)

        const articleTopic = " edit article topic test"
        cy.get('[name="topic"]')
        .clear()
        .type(articleTopic)
        .should('have.value', articleTopic)

        cy.get("button").last().click();
            cy.url().should('include', '/articles')
    })
})