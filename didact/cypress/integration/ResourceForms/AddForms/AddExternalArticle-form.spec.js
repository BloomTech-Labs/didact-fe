describe("add external article resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/resource-form')
        cy.get("select")
        .select("external-article")
    })

    it('dropdown displays correct form on select', () => {
        cy.get('label').first().should('have.text', 'Article Title')
    })

    it('inputs display user input', () => {
        const articleTitle = "Article Title"
        cy.get('[name="title"]')
        .type(articleTitle)
        .should('have.value', articleTitle)

        const articleDescription = "Article Description"
        cy.get('[name="description"]')
        .type(articleDescription)
        .should('have.value', articleDescription)

        const articleTopic = "Topic"
        cy.get('[name="topic"]')
        .type(articleTopic)
        .should('have.value', articleTopic)

        const articleLink = "Article.article"
        cy.get('[name="link"]')
        .type(articleLink)
        .should('have.value', articleLink)
    })

    it('submitting form takes you to articles page', () => {
        cy.get("button").last().click();
        cy.url().should('include', '/articles')
    })
})