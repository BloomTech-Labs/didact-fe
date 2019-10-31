/// <reference types="Cypress" />

context('login', () => {
    before(() => cy.registerUserIfNeeded())
    beforeEach(() => {
        cy.visit('/login')
    })

    it('should fail on bad info', () => {
        cy.get('input[type="email"]').type("fake@fake.com")
        cy.get('input[type="password"]').type("wrongpassword")
        cy.get('button[type="submit"]').click()
        cy.url().should('contain', '/login')
    })

    it('should log in', () => {
        const user = Cypress.env('user')
        cy.get('input[type="email"]').type(user.email)
        cy.get('input[type="password"]').type(user.password)
        cy.get('button[type="submit"]').click()

        cy.url().should('not.contain', '/login')
    })
})