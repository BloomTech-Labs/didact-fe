describe("a user logging in to didact", () => {

    it("logs in a user", () => {
        cy.visit('/landing')
        const email = "bob@bobmail.com"
        const password = "secretpass"
        cy.get("button").first().click()
        cy.get("input").first().type(email).should('have.value', email)
        cy.get("input").last().type(password).should('have.value', password)
        cy.get("button").first().click();
    })
})
