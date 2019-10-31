/// <reference types="Cypress" />

context('adding a course', () => {
    before(() => cy.registerUserIfNeeded())
    before(() => cy.loginBeforeTest())
    beforeEach(() => {
        cy.visit('/courses/add')
    })
    it("should show text saying 'Course overview'", () => {
        cy.get('p').should('have.value', 'Course Overview')
    })
    it('moves you to the edit page after adding', () => {
        // cy.url
    })
})